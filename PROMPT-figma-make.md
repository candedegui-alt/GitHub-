Diseñá y prototipá una app mobile (iOS) llamada **STARPOINT**: una plataforma de
streaming de pádel + comunidad (modelo OTT / DTC, estilo "F1 TV" o "NBA League Pass"
pero para pádel). Tono: deportiva, moderna, Gen-Z, "sportainment". Idioma de la interfaz:
español. Mostrá las pantallas dentro de un frame de iPhone.

## Estilo visual (MUY IMPORTANTE: minimalista)
- Dark mode. Diseño limpio, ordenado por secciones, con mucho aire. Pocos colores.
- Paleta exacta:
  - Fondo: #0A0C10
  - Superficie/cards: #13161C (borde sutil #252A33)
  - Amarillo (acento principal / CTAs): #D8FF2E
  - Azul (acento secundario / info): #2B5CFF
  - Azul navy (avatares): #13346D
  - Texto: #F3F5F8 · Texto atenuado: #888F9B
  - Rojo "EN VIVO": #FF3B30
- Tipografía: títulos/números grandes con una display condensada estilo "Anton";
  texto con una sans tipo "Archivo". Mayúsculas para etiquetas pequeñas.
- Cards con esquinas redondeadas (16px). Chips tipo píldora. Sin gradientes ruidosos.
- Barra de navegación inferior con 5 ítems: **Inicio · En vivo · Máster Cup · Comunidad · Perfil**.
  El ítem activo en amarillo.

## Gráfico de cancha (se usa como "miniatura de transmisión")
Creá una ilustración de una cancha de pádel vista desde una cámara de transmisión (de fondo,
elevada): superficie azul, **paredes de cristal** (laterales y de fondo), **red en el medio**
con malla, cinta blanca arriba, tensor central y postes; un **run-off** azul más oscuro
alrededor de la cancha; líneas blancas reglamentarias (perímetro, dos líneas de saque y la
línea central completa que cruza la red); fondo de estadio oscuro con público tenue y luces;
un par de pelotas amarillas. Debe parecer una cancha real. Sin marcas de "Premier Pádel" ni "ESPN".

## Pantallas

### 1) Inicio
Secciones claras, una debajo de otra:
- **En vivo y próximos**: carrusel horizontal de tarjetas estilo transmisión. Cada tarjeta usa
  la ilustración de cancha de fondo, con: logo "✦ STARPOINT" arriba a la izquierda, nombre de
  cancha en itálica a la derecha (ej: "CENTRE COURT" / "SECONDARY COURT"), badge "● LIVE" (rojo)
  o "Próximo", y una barra de progreso amarilla en el borde inferior si está en vivo. Debajo de
  cada tarjeta: título del partido y subtítulo (torneo + horario).
  - Tarjeta 1 (LIVE): "Final — Tapia/Coello vs Chingotto/Galán · Buenos Aires Open"
- **Contenido de jugadores**: fila de "stories" con avatar circular azul navy (iniciales) y
  anillo amarillo: Tapia, Coello, Chingotto, Galán, Lebrón, Paquito.
- **Explorá**: 2 tiles → "Estadísticas" (velocidad de pelota y datos en vivo) y "Máster Cup".
- **Clips destacados**: lista vertical con miniatura (cancha) + ícono play + título.

### 2) En vivo
- Reproductor a pantalla: la ilustración de cancha como "transmisión" de fondo, con degradado
  para legibilidad. Arriba: badge "● EN VIVO", contador de espectadores, y un **marcador
  (scorebug)** translúcido con: nombre del torneo, las dos parejas con banderas, dos columnas de
  sets y la columna de game actual; la pareja al saque marcada. Ejemplo correcto:
  Tapia/Coello 6 4 · 30 / Chingotto/Galán 3 5 · 40 (saca Chingotto/Galán).
- Debajo del video: **selector de cámara** (chips horizontales: 📹 Principal, 🛰️ Táctica,
  ⭐ Player-cam, 🔄 360°) y un botón ancho "⊞ Pantalla dividida" (al activarlo, se ven dos
  partidos lado a lado).
- **Tabs**: Stats / Chat / Predicción.
  - Stats: tres números grandes en amarillo (187 km/h último remate, 173 km/h saque máx., 14
    golpes rally + largo), barra de probabilidad de victoria (IA) y grilla de métricas.
  - Chat: mensajes en vivo + input.
  - Predicción: "¿Quién gana este game?" con dos botones de voto que muestran % al votar.

### 3) Estadísticas
- **Velocímetro** grande: número enorme amarillo en km/h ("187") que representa la velocidad de
  la pelota en vivo, con métricas alrededor (saque máx., velocidad media, rally más largo, metros
  recorridos).
- **Comparativa del partido**: barras enfrentadas entre las dos parejas (winners, errores,
  remate más rápido km/h, puntos ganados en la red), con valores a cada lado.
- **Resultados**: lista de partidos con marcadores y uno "Próximo".

### 4) Máster Cup
Torneo "armado por la comunidad" (votaciones). Header "Vos armás el torneo". Chips de etapas
(16avos · 8vos · 4tos · Semis · Final). Tarjetas de cruce para votar (dos parejas, avatar +
nombre + barra de % + VS en el medio). Las parejas son **mezcladas / inventadas** (no reales):
- Galán / Coello  vs  Tapia / Jon Sanz
- Chingotto / Coki Nieto  vs  Lebrón / Yanguas
Abajo, un mini-cuadro (bracket) con la final.

### 5) Comunidad
Foro: chips de canales (#Todos, #Torneos, #Técnica, #Fantasy, #Argentina), posteos en cards
(avatar, usuario, texto, likes, comentarios, compartir) y un botón flotante "+" amarillo.

### 6) Membresías
Cards por jugador (avatar + nombre + ranking), lista de beneficios (vlogs, entrenamientos,
entrevistas, vida cotidiana, lives exclusivos), precio mensual en USD y botón "Suscribirme".

### 7) Perfil
Avatar grande, nombre, nivel/badges, sección **Fantasy Pádel** (mi equipo con puntos y ranking),
y **Mis entradas** (entrada a un torneo + botón "Comprar entradas / palcos").

## Notas
- Datos de ejemplo; nombres de jugadores ilustrativos.
- Mantené la coherencia visual entre todas las pantallas (mismos colores, tipografías,
  componentes, avatares azules con anillo amarillo).
- Prioridad: que se vea minimalista, ordenado y premium.
