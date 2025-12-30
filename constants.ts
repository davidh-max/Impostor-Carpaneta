
import { Category } from './types';

export const WORD_PACKS: Record<Exclude<Category, 'Personalizada'>, string[]> = {
  Comida: [
    "Pizza", "Sushi", "Paella", "Burger", "Tacos", "Ramen", "Pasta", "Ensalada", "Tarta", "Helado", 
    "Croqueta", "Jamón", "Gazpacho", "Lentejas", "Burrito", "Curry", "Falafel", "Kebab", "Ceviche", "Dim Sum", 
    "Lasaña", "Risotto", "Gnocchi", "Tortilla", "Churros", "Bacalao", "Pulpo", "Fabada", "Salmorejo", "Entrecot", 
    "Solomillo", "Salmón", "Atún", "Gambas", "Langosta", "Mejillones", "Almejas", "Queso", "Yogur", "Flan"
  ],
  Lugares: [
    "París", "Tokio", "Playa", "Selva", "Marte", "Nueva York", "Londres", "Roma", "Desierto", "Montaña",
    "Polo Norte", "Cine", "Museo", "Estadio", "Hospital", "Escuela", "Aeropuerto", "Estación", "Bosque", "Castillo",
    "Luna", "Venecia", "Egipto", "Gran Muralla", "Torre Eiffel", "Coliseo", "Piscina", "Gimnasio", "Biblioteca", "Zoo",
    "Iglesia", "Supermercado", "Banco", "Restaurante", "Hotel", "Barco", "Avión", "Submarino", "Granja", "Fábrica"
  ],
  Profesiones: [
    "Médico", "Astronauta", "Chef", "Bombero", "Policía", "Profesor", "Abogado", "Ingeniero", "Artista", "Músico",
    "Veterinario", "Dentista", "Arquitecto", "Periodista", "Fotógrafo", "Actor", "Científico", "Piloto", "Marinero", "Granjero",
    "Peluquero", "Carpintero", "Electricista", "Fontanero", "Panadero", "Carnicero", "Escritor", "Pintor", "Jardinero", "Buzo",
    "Psicólogo", "Contable", "Diseñador", "Programador", "Cajero", "Camarero", "Cartero", "Bibliotecario", "Enfermero", "Juez"
  ],
  Objetos: [
    "Reloj", "Paraguas", "Guitarra", "Martillo", "Tijeras", "Espejo", "Cámara", "Teléfono", "Ordenador", "Libro",
    "Llave", "Mochila", "Silla", "Mesa", "Lámpara", "Gafas", "Botella", "Bicicleta", "Pelota", "Cuchara",
    "Tenedor", "Cuchillo", "Plato", "Vaso", "Cuaderno", "Lápiz", "Bolígrafo", "Mando", "Televisión", "Radio",
    "Violín", "Piano", "Trompeta", "Flauta", "Escoba", "Cepillo", "Jabón", "Toalla", "Cama", "Sofá"
  ],
  Deportes: [
    "Fútbol", "Tenis", "Surf", "Boxeo", "Baloncesto", "Natación", "Ciclismo", "Atletismo", "Golf", "Voleibol",
    "Rugby", "Béisbol", "Hockey", "Esquí", "Snowboard", "Patinaje", "Escalada", "Kárate", "Judo", "Yoga",
    "Pádel", "Ping Pong", "Danza", "Esgrima", "Remo", "Vela", "Piragüismo", "Tiro con Arco", "Equitación", "Senderismo"
  ],
  España: [
    "Tortilla de Patatas", "Ibiza", "El Quijote", "Flamenco", "Sagrada Familia", "Alhambra", "San Fermín", "La Tomatina", "Real Madrid", "Barça",
    "Sevilla", "Madrid", "Barcelona", "Valencia", "Bilbao", "Granada", "Sidra", "Tapas", "Siesta", "Fiesta",
    "Playas", "Pueblos Blancos", "Camino de Santiago", "Lorca", "Dalí", "Picasso", "Rafa Nadal", "Fernando Alonso", "Serrano", "Paella"
  ],
  Famosos: [
    "Lionel Messi", "Cristiano Ronaldo", "Beyoncé", "Elon Musk", "Albert Einstein", "Michael Jackson", "Shakira", "Donald Trump", "Brad Pitt", "Angelina Jolie",
    "Taylor Swift", "Bad Bunny", "Rosalía", "Ibai Llanos", "Auronplay", "TheGrefg", "Will Smith", "Leonardo DiCaprio", "Johnny Depp", "Tom Cruise",
    "Rihanna", "Ariana Grande", "Justin Bieber", "Dua Lipa", "Miley Cyrus", "Lady Gaga", "Drake", "Eminem", "Kanye West", "Bill Gates"
  ],
  Random: [] // Will be populated by mixing all above
};

WORD_PACKS.Random = [
  ...WORD_PACKS.Comida,
  ...WORD_PACKS.Lugares,
  ...WORD_PACKS.Profesiones,
  ...WORD_PACKS.Objetos,
  ...WORD_PACKS.Deportes,
  ...WORD_PACKS.Famosos,
  ...WORD_PACKS.España
];

export const CATEGORY_METADATA: Record<Category, { color: string, iconName: string }> = {
  Comida: { color: 'from-[#FE70C8] to-[#FD9FD9]', iconName: 'Utensils' },
  Lugares: { color: 'from-[#FE70C8] to-[#FD9FD9]', iconName: 'MapPin' },
  Profesiones: { color: 'from-[#FE70C8] to-[#FD9FD9]', iconName: 'Briefcase' },
  Objetos: { color: 'from-[#FE70C8] to-[#FD9FD9]', iconName: 'Package' },
  Deportes: { color: 'from-[#FE70C8] to-[#FD9FD9]', iconName: 'Dribbble' },
  Famosos: { color: 'from-[#FE70C8] to-[#FD9FD9]', iconName: 'Star' },
  España: { color: 'from-[#FE70C8] to-[#FD9FD9]', iconName: 'Flag' },
  Random: { color: 'from-[#FE70C8] to-[#FD9FD9]', iconName: 'Shuffle' },
  Personalizada: { color: 'from-[#5F5E5E] to-[#0B0B0B]', iconName: 'Pencil' }
};
