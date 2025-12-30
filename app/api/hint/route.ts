
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  try {
    const { secretWord, category } = await req.json();

    if (!secretWord || secretWord.length < 2) {
      return new Response(JSON.stringify({ error: "Palabra inválida" }), { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Palabra secreta: ${secretWord}\nCategoría: ${category || 'sin categoría'}\nGenera una pista de UNA palabra relacionada de dificultad media: ni demasiado evidente ni demasiado difícil. Prohibido: devolver la palabra secreta, pistas de letras, o sinónimos exactos muy obvios. Devuelve SOLO la palabra.`,
      config: {
        systemInstruction: "Eres un generador de pistas para un juego social. Tu misión es ayudar al impostor dándole una palabra clave relacionada pero sutil. Devuelve SOLO 1 palabra en español. No uses frases, ni puntuación, ni comillas.",
        temperature: 0.7,
      },
    });

    const text = response.text || "";
    // Normalizar: coger solo la primera palabra por si el modelo se explaya
    const hint = text.trim().split(/\s+/)[0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    return new Response(JSON.stringify({ hint }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return new Response(JSON.stringify({ error: "Error generando pista" }), { status: 500 });
  }
}
