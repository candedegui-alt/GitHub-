# STARPOINT · Mockup interactivo — Pádel OTT & Comunidad

Prototipo navegable (no funcional) de una plataforma **DTC/OTT de pádel** pensada para
la *Era de la Inmersión*: transmisión en vivo, comunidad y *sportainment* alrededor del
circuito Premier Pádel. Pensado como **mockup para presentación oral** del proyecto de
Medios de Comunicación en el Deporte.

> El nombre **STARPOINT** es un placeholder: cambialo en `index.html` (buscá `STARPOINT`).

## Para el PowerPoint

En `mockups/` están las **7 pantallas exportadas como PNG** (alta resolución) listas para
**pegar en las diapositivas**: `inicio`, `vivo`, `stats`, `copa`, `comunidad`, `membresias`, `perfil`.

Para demo en vivo dentro de la presentación, abrí `index.html` en el navegador (pantalla
completa con F11). También podés enlazar una pantalla puntual con `index.html#vivo`,
`index.html#stats`, etc. (agregá `?solo=1` para ver solo el celular, sin el fondo).

## Cómo verlo

- **Local:** abrí `index.html` en cualquier navegador (doble clic). No requiere instalación.
- **Online (opcional):** se puede publicar gratis con **GitHub Pages**
  (`Settings → Pages → Branch: main → /root`) y abrirlo desde el celular.

## Pantallas / funciones de valor

| Sección | Qué muestra |
|---|---|
| **Inicio** | Partido en vivo destacado, contenido de jugadores (stories), accesos a Stats y Máster Cup, clips. |
| **En vivo** | Reproductor con **selección de cámara** (principal, táctica, player-cam, 360°, banco), **pantalla dividida** (2 partidos), y tabs de **Stats IA**, **Chat en vivo** y **Predicción**. |
| **Stats · Premier Pádel** | **Velocidad de pelota** en vivo (km/h), saque/remate máximo, metros recorridos, comparativa del partido y **resultados** del circuito. |
| **Máster Cup** | Torneo armado por la comunidad: **votación de cruces** de 16avos a la final + cuadro. |
| **Comunidad** | Foro con canales, posteos, likes y teaser de Fantasy. |
| **Membresías** | Suscripción por jugador (vlogs, entrenamientos, vida cotidiana). |
| **Perfil** | Avatar personalizado, **Fantasy Pádel**, entradas/palcos. |

## Interacciones que se pueden mostrar en la presentación

- Navegar con la **barra inferior**.
- Tocar el partido en vivo → cambiar de **cámara** → activar **pantalla dividida**.
- En el reproductor, cambiar entre **Stats IA / Chat / Predicción** y **votar**.
- Entrar a **Stats** y ver el **velocímetro** de velocidad de pelota actualizándose.
- En **Máster Cup**, votar un cruce y ver el resultado en %.

## Estética

Dark mode con **verde lima neón** + **azul eléctrico**, tipografía display (Anton/Archivo),
cards redondeadas — alineada a las referencias visuales del documento del proyecto.

## Estructura

```
index.html   → estructura de todas las pantallas
styles.css   → estética (paleta, tipografía, componentes)
app.js       → navegación, cámaras, pantalla dividida, votos, velocímetro
```

> Datos de ejemplo (jugadores, resultados, estadísticas). No es una app funcional.
