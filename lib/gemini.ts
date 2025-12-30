
import { GoogleGenAI } from "@google/genai";

/**
 * Lógica para llamar a Gemini directamente si se dispone de la API_KEY en el contexto actual.
 * Se usa como puente para el endpoint de la API.
 */
export async function fetchDynamicHint(secretWord: string, category: string): Promise<string | null> {
  try {
    const response = await fetch('/api/hint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secretWord, category }),
    });

    if (!response.ok) throw new Error("API Route failed");
    
    const data = await response.json();
    return data.hint || null;
  } catch (error) {
    console.warn("Error fetching dynamic hint from API:", error);
    return null;
  }
}
