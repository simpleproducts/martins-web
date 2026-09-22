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
  about: {
    label: 'Sobre mí',
    heading: 'Un dibujo es una decisión tomada deprisa y defendida despacio.',
    lede:
      'Georg Martin dibuja la moda como de verdad se ve: de un vistazo, en movimiento, a medio terminar en el ojo.',
    body: [
      'El estudio trabaja casi siempre con tinta y gouache sobre papel de algodón grueso. Cada figura empieza como una única línea continua trazada de un aliento; todo lo que viene después es resta. Lo que sobrevive es la postura, el peso, la caída de un dobladillo: las partes que una fotografía aplana.',
      'Los encargos van desde reportajes editoriales y fotogramas de campaña hasta dibujo en directo en desfiles y retratos privados. Su trabajo se ha publicado en toda Europa, en tres exposiciones colectivas y en unas pocas paredes que importan más que todo lo anterior.',
    ],
    facts: [
      { label: 'Con base en', value: 'Berlín, Alemania' },
      { label: 'Práctica', value: 'Tinta · Gouache · Acabado digital' },
      { label: 'Clientes seleccionados', value: 'Maison Verre, Atelier Noir, Kunsthalle Süd' },
      { label: 'Exposiciones', value: 'París, Lisboa, Viena — 2021 / 2023 / 2025' },
    ],
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
  contact: {
    label: 'Contacto',
    heading: 'Hagamos algo que merezca un marco.',
    lede:
      'Encargos, trabajos editoriales, dibujo en directo y consultas sobre impresión. Suelo responder en dos días laborables.',
    studioLabel: 'Estudio',
    studioValue: 'Oranienstraße 00, 10999 Berlín',
    emailLabel: 'Correo',
    phoneLabel: 'Teléfono',
    messageLabel: 'Mensaje',
    messageCta: 'Escribir un mensaje',
    closeForm: 'Cerrar',
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
