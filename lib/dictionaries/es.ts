import type { Dictionary } from '@/lib/i18n'

const es: Dictionary = {
  meta: {
    title: 'Georg Martin — Ilustración de moda',
    description:
      'Tinta, gouache y bermellón. Ilustración de moda y dibujo editorial desde un pequeño estudio en Berlín.',
    imageAlt: 'Ilustración de moda en tinta y gouache de una figura con vestido de encaje negro',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    works: 'Obra',
    services: 'Servicios',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    skipToContent: 'Saltar al contenido',
    language: 'Idioma',
  },
  hero: {
    eyebrow: 'Ilustración de moda · Berlín',
    lede:
      'Tinta, gouache y un trazo terco de bermellón. Dibujos hechos para la media décima de segundo antes de que la prenda se mueva.',
    since: 'En activo desde 2012',
  },
  intro: {
    label: 'Sobre mí',
    heading: 'Un dibujo es una decisión tomada deprisa y defendida despacio.',
    body: [
      'Dibujo la moda como de verdad se ve: de un vistazo, en movimiento, a medio terminar en el ojo. El estudio trabaja casi siempre con tinta y gouache sobre papel de algodón grueso, y cada figura empieza como una única línea continua trazada de un aliento.',
      'Todo lo que viene después de esa primera línea es resta. Lo que sobrevive es la postura, el peso, la caída de un dobladillo, el ángulo que un hombro sostiene un segundo y luego suelta. Son las partes que una fotografía aplana y las partes por las que me pagan.',
      'He trabajado desde la primera fila de los desfiles, desde probadores a medianoche y desde una mesa en Berlín con la ventana abierta. Catorce años después el método apenas ha cambiado: mira más tiempo del que dibujas y luego dibuja más rápido de lo que piensas.',
      'Los clientes vienen por reportajes editoriales, fotogramas de campaña, dibujo en directo en eventos y retratos privados. Parte del trabajo acaba impreso por toda Europa; otra parte acaba en el pasillo de alguien, lo que me molesta bastante menos de lo que esperaba.',
    ],
    facts: [
      { label: 'Con base en', value: 'Berlín, Alemania' },
      { label: 'Práctica', value: 'Tinta · Gouache · Acabado digital' },
      { label: 'Clientes seleccionados', value: 'Maison Verre, Atelier Noir, Kunsthalle Süd' },
      { label: 'Exposiciones', value: 'París, Lisboa, Viena — 2021 / 2023 / 2025' },
    ],
    galleryLabel: 'Estudio y proceso',
    prev: 'Imagen anterior',
    next: 'Imagen siguiente',
    counterOf: 'de',
  },
  works: {
    label: 'Obra seleccionada',
    heading: 'Piezas recientes',
    lede: 'Cinco dibujos de las dos últimas temporadas. Recorre la pila.',
    pieces: [
      {
        title: 'Estudio carmesí I',
        year: '2025',
        medium: 'Tinta y gouache sobre algodón, 70 × 100 cm',
        caption:
          'Un solo trazo vertical, puesto antes de que la figura existiera. Todo lo demás se dibujó para justificarlo.',
      },
      {
        title: 'Taller, tarde',
        year: '2025',
        medium: 'Tinta a pincel sobre papel tonal, 50 × 70 cm',
        caption:
          'Dibujado al final de una prueba, de memoria, mientras barrían la sala.',
      },
      {
        title: 'Nocturno en encaje',
        year: '2024',
        medium: 'Tinta, gouache, acabado digital',
        caption:
          'El encaje llevó nueve horas. La cara llevó cuatro minutos y es lo único que alguien menciona.',
      },
      {
        title: 'Velo / Desvelo',
        year: '2024',
        medium: 'Gouache sobre papel, díptico, 60 × 80 cm cada uno',
        caption:
          'Dos estados del mismo gesto, colgados separados para que el ojo haga el trabajo.',
      },
      {
        title: 'Brasa',
        year: '2023',
        medium: 'Aguada de tinta y bermellón, 100 × 140 cm',
        caption:
          'Encargado para un escaparate en Viena. Pintado dos veces; el primero era mejor y ya no está.',
      },
    ],
    piece: 'Pieza',
    of: 'de',
    prev: 'Pieza anterior',
    next: 'Pieza siguiente',
  },
  services: {
    label: 'Servicios',
    heading: 'Cuatro maneras de ponerme a trabajar.',
    hint: 'Elige un servicio',
    items: {
      live: {
        title: 'Ilustración en directo',
        lede: 'Dibujado en la sala, delante de las personas para las que se dibuja.',
        body: [
          'Monto una mesa, un tintero y una pila de papel de algodón, y dibujo a tus invitados mientras avanza la noche. Cada retrato lleva de tres a cinco minutos y se va con la persona retratada: sin gestión de colas, sin impresora, sin pantalla entre el invitado y el dibujo.',
          'Funciona en aperturas de tienda, lanzamientos, bodas y jornadas de prensa. Llevo todo, incluida la mesa si hace falta, y puedo dibujar de pie en una esquina o sentado sobre una tarima en medio de la sala. La tinta seca en menos de un minuto; cada invitado sostiene el suyo.',
        ],
        meta: [
          { label: 'Duración habitual', value: '2–4 horas, 25–45 retratos' },
          { label: 'Incluye', value: 'Materiales, desplazamiento en Berlín, escaneos digitales' },
        ],
      },
      events: {
        title: 'Eventos',
        lede: 'Un desfile, una temporada, una sala llena de gente — contado en tinta.',
        body: [
          'Desfiles, inauguraciones privadas, cenas y ferias, cubiertos como lo haría un cronista: veo el conjunto y vuelvo con los ocho dibujos que lo sostienen. La entrega puede ser la misma noche para redes o afinarse en el estudio durante la semana siguiente.',
          'En las semanas de la moda trabajo como mano itinerante: backstage durante las pruebas, en sala durante el desfile y en el estudio después para las planchas acabadas. Los equipos editoriales suelen usar la serie rápida ese día y la lenta para el libro de temporada.',
        ],
        meta: [
          { label: 'Entrega', value: 'Serie rápida esa noche · finales en 5 días' },
          { label: 'Desplazamientos', value: 'Toda Europa, desde Berlín' },
        ],
        process: {
          heading: 'Cómo funciona la reserva',
          lede:
            'Cada evento es distinto, así que el proceso empieza definiendo exactamente qué necesitas. Desde el tipo de evento hasta el número de invitados, de ilustraciones y de materiales, todo se acuerda antes de que el evento ocurra.',
          steps: [
            {
              title: 'Cuéntame sobre tu evento',
              body:
                'Empieza compartiendo lo esencial: la fecha, el lugar y el tipo de evento. Dime si es un evento privado, un evento público, un evento corporativo, una boda, una celebración, una activación de marca u otra cosa.',
            },
            {
              title: 'Definimos el proyecto',
              body:
                'Juntos decidimos cómo será la experiencia de ilustración: el número de invitados, la cantidad estimada de ilustraciones, el tipo de ilustración, los materiales necesarios y si la obra se crea en directo durante el evento o se entrega después.',
            },
            {
              title: 'Confirmas la propuesta',
              body:
                'Con todos los detalles definidos recibes una propuesta a medida según el alcance del evento. Incluye el número acordado de ilustraciones, los materiales, los tiempos, la logística y el precio. Cuando ambas partes están de acuerdo, la reserva queda confirmada.',
            },
            {
              title: 'El evento',
              body:
                'El día acordado llego preparado con el material necesario y creo las ilustraciones en el formato pactado. La experiencia se construye alrededor de tu evento, tus invitados y el tipo de obra que hayamos planeado juntos.',
            },
          ],
          groupsHeading: 'Eventos privados y públicos',
          groups: [
            {
              title: 'Eventos privados',
              body:
                'Bodas, cumpleaños, cenas, celebraciones, fiestas privadas y otras reuniones personales.',
            },
            {
              title: 'Eventos públicos y de marca',
              body:
                'Eventos corporativos, festivales, exposiciones, lanzamientos, activaciones de marca y otras experiencias públicas.',
            },
          ],
        },
      },
      prints: {
        title: 'Láminas',
        lede: 'Ediciones de archivo de los dibujos, hechas como toca.',
        body: [
          'Algunas piezas salen en ediciones cortas sobre papel de algodón de 310 g, impresas en giclée en Berlín y firmadas y numeradas a mano. Las ediciones son de veinticinco; cuando una tirada se cierra, se cierra, y la plancha se retira.',
          'Los tamaños van del A3 hasta 100 × 140 cm, con opción sin marco o enmarcado en roble o fresno ennegrecido. Todo se envía enrollado en tubo o plano entre cartón, asegurado, normalmente en una semana desde el pedido.',
        ],
        meta: [
          { label: 'Edición', value: '25 por pieza, firmadas y numeradas' },
          { label: 'Papel', value: 'Algodón de 310 g, tintas de archivo' },
        ],
      },
      commissions: {
        title: 'Encargos a medida',
        lede: 'Un dibujo, hecho por un motivo, contigo presente en el proceso.',
        body: [
          'Retratos privados, regalos, prendas que quieres dejar registradas, un fotograma de campaña que debe existir antes que la sesión. Empezamos con una conversación y dos o tres bocetos, y luego dibujo: casi siempre dos veces, porque el segundo es el que funciona.',
          'Ves la pieza en la fase de línea y otra vez antes del color, y nada está acabado hasta que tú lo dices. Los originales se entregan enmarcados o planos; los escaneos van con el archivo, por si la pared para la que se hizo cambia de dueño.',
        ],
        meta: [
          { label: 'Plazo', value: '3–6 semanas, urgencias posibles' },
          { label: 'Entregables', value: 'Obra original · escaneo a 600 ppp · derechos de uso' },
        ],
      },
    },
  },
  photography: {
    label: 'Fotografía',
    imageAlt: 'Fotografía del archivo del estudio',
    prev: 'Fotografía anterior',
    next: 'Fotografía siguiente',
    goTo: 'Ir a la fotografía',
  },
  contact: {
    label: 'Contacto',
    heading: 'Hagamos algo que merezca un marco.',
    introLines: [
      'Encargos, trabajos editoriales, dibujo en directo y consultas sobre impresión: todo es bienvenido.',
      'Suelo responder en dos días laborables — antes si el plazo lo pide.',
    ],
    studioLabel: 'Estudio',
    studioValue: 'Oranienstraße 00, 10999 Berlín',
    emailLabel: 'Correo',
    phoneLabel: 'Teléfono',
    messageLabel: 'Mensaje',
    socialsLabel: 'En otros sitios',
    form: {
      name: 'Tu nombre',
      namePlaceholder: 'Ana García',
      email: 'Correo electrónico',
      emailPlaceholder: 'ana@estudio.com',
      subject: 'Asunto',
      subjectPlaceholder: 'Encargo editorial',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame qué tienes en mente y para cuándo lo necesitas.',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      success: 'Gracias — tu mensaje va de camino. Te escribo en breve.',
      successNote: 'Este formulario es una demo y todavía no envía correo.',
      reset: 'Enviar otro',
      errorRequired: 'Este campo es obligatorio.',
      errorEmail: 'Introduce una dirección de correo válida.',
      errorSummary: 'Revisa los campos marcados.',
    },
  },
  footer: {
    tagline: 'Tinta, gouache y bermellón desde 2012.',
    rights: 'Todos los derechos reservados.',
    credit: 'Sitio provisional — imágenes y textos pendientes de sustituir.',
    backToTop: 'Volver arriba',
  },
}

export default es
