
import { Category } from '../types';
import { fetchDynamicHint } from './gemini';

const HINT_CACHE_KEY = 'impostor_hint_cache_v1';

export const HINTS_MAPPING: Record<string, string> = {
  // Comida
  "Pizza": "Horno", "Sushi": "Palillos", "Paella": "Arroz", "Burger": "Carne", "Tacos": "Picante",
  "Ramen": "Sopa", "Pasta": "Italia", "Ensalada": "Verde", "Tarta": "Dulce", "Helado": "Frío",
  "Croqueta": "Frita", "Jamón": "Cerdo", "Gazpacho": "Tomate", "Lentejas": "Cuchara", "Burrito": "Tortilla",
  // Lugares
  "París": "Torre", "Tokio": "Neón", "Playa": "Arena", "Selva": "Árboles", "Marte": "Rojo",
  "Londres": "Niebla", "Roma": "Ruinas", "Desierto": "Calor", "Montaña": "Cima", "Cine": "Película",
  // Profesiones
  "Médico": "Salud", "Astronauta": "Espacio", "Chef": "Cocina", "Bombero": "Fuego", "Policía": "Ley",
  "Abogado": "Juicio", "Ingeniero": "Planos", "Artista": "Cuadro", "Músico": "Notas", "Veterinario": "Animales",
  // Objetos
  "Reloj": "Tiempo", "Paraguas": "Lluvia", "Guitarra": "Cuerdas", "Martillo": "Clavo", "Tijeras": "Corte",
  "Espejo": "Reflejo", "Cámara": "Foto", "Teléfono": "Llamada", "Libro": "Páginas", "Llave": "Puerta",
  // Deportes
  "Fútbol": "Gol", "Tenis": "Raqueta", "Surf": "Olas", "Boxeo": "Guantes", "Baloncesto": "Canasta",
  "Natación": "Agua", "Ciclismo": "Bici", "Golf": "Hoyo", "Yoga": "Postura", "Pádel": "Pala",
  // España
  "Flamenco": "Baile", "Siesta": "Sueño", "Fiesta": "Noche", "Dalí": "Bigote", "Real Madrid": "Blanco",
  "Barça": "Azulgrana", "Sidra": "Asturias", "Camino de Santiago": "Andar"
};

export const getCategoryFallback = (category: Category): string => {
  switch (category) {
    case 'Comida': return 'Sabor';
    case 'Lugares': return 'Viaje';
    case 'Profesiones': return 'Trabajo';
    case 'Objetos': return 'Cosa';
    case 'Deportes': return 'Equipo';
    case 'Famosos': return 'Persona';
    case 'España': return 'Cultura';
    default: return 'Tema';
  }
};

/**
 * Obtiene una pista, primero intentando Gemini, luego el mapping local, y finalmente el fallback por categoría.
 */
export const getDynamicHint = async (word: string, category: Category, enabled: boolean): Promise<string | undefined> => {
  if (!enabled) return undefined;

  const cacheKey = `${category}::${word.trim().toLowerCase()}`;
  
  // 1. Intentar desde Cache
  try {
    const cacheRaw = localStorage.getItem(HINT_CACHE_KEY);
    const cache = cacheRaw ? JSON.parse(cacheRaw) : {};
    if (cache[cacheKey]) return cache[cacheKey];
  } catch (e) {}

  // 2. Intentar Gemini
  const geminiHint = await fetchDynamicHint(word, category);
  if (geminiHint) {
    saveToCache(cacheKey, geminiHint);
    return geminiHint;
  }

  // 3. Fallback a Mapping Local
  const normalizedWord = word.trim();
  const localHint = HINTS_MAPPING[normalizedWord];
  if (localHint) return localHint;
  
  // 4. Fallback final por Categoría
  return getCategoryFallback(category);
};

function saveToCache(key: string, value: string) {
  try {
    const cacheRaw = localStorage.getItem(HINT_CACHE_KEY);
    const cache = cacheRaw ? JSON.parse(cacheRaw) : {};
    cache[key] = value;
    localStorage.setItem(HINT_CACHE_KEY, JSON.stringify(cache));
  } catch (e) {}
}
