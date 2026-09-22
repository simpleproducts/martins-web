/**
 * English is the reference dictionary: every other locale is type-checked
 * against this shape, so a missing key is a build error rather than a hole
 * in the page.
 */
const en = {
  meta: {
    title: 'Georg Martin — Fashion Illustration',
    description:
      'Ink, gouache and vermilion. Fashion illustration and editorial drawing from a small studio in Berlin.',
    imageAlt: 'Ink and gouache fashion illustration of a figure in a black lace gown',
  },
  nav: {
    home: 'Home',
    about: 'About',
    works: 'Works',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    language: 'Language',
  },
  hero: {
    eyebrow: 'Fashion illustration · Berlin',
    lede:
      'Ink, gouache and one stubborn stroke of vermilion. Drawings made for the half-second before a garment moves.',
    since: 'Working since 2012',
  },
  about: {
    label: 'About',
    heading: 'A drawing is a decision made quickly and defended slowly.',
    lede:
      'Georg Martin draws fashion the way it is actually seen — at a glance, in motion, half-finished in the eye.',
    body: [
      'The studio works almost entirely in ink and gouache on heavy cotton paper. Each figure begins as a single unbroken line laid down in one breath; everything after that is subtraction. What survives is posture, weight, the fall of a hem — the parts a photograph flattens.',
      'Commissions run from editorial spreads and campaign keyframes to live drawing at shows and private portraits. Work has appeared in print across Europe, in three group exhibitions, and on a small number of walls that matter more than any of it.',
    ],
    facts: [
      { label: 'Based in', value: 'Berlin, Germany' },
      { label: 'Practice', value: 'Ink · Gouache · Digital finish' },
      { label: 'Selected clients', value: 'Maison Verre, Atelier Noir, Kunsthalle Süd' },
      { label: 'Exhibitions', value: 'Paris, Lisbon, Vienna — 2021 / 2023 / 2025' },
    ],
  },
  works: {
    label: 'Selected works',
    heading: 'Recent pieces',
    lede: 'Five drawings from the last two seasons. Move through the stack.',
    pieces: [
      {
        title: 'Crimson Study I',
        year: '2025',
        medium: 'Ink and gouache on cotton, 70 × 100 cm',
        caption:
          'A single vertical stroke, laid before the figure existed. Everything else was drawn to justify it.',
      },
      {
        title: 'Atelier, Late',
        year: '2025',
        medium: 'Brush ink on toned paper, 50 × 70 cm',
        caption:
          'Drawn at the end of a fitting, from memory, while the room was being swept.',
      },
      {
        title: 'Nocturne in Lace',
        year: '2024',
        medium: 'Ink, gouache, digital finish',
        caption:
          'The lace took nine hours. The face took four minutes and is the only part anyone mentions.',
      },
      {
        title: 'Veil / Unveil',
        year: '2024',
        medium: 'Gouache on paper, diptych, 60 × 80 cm each',
        caption:
          'Two states of the same gesture, hung apart so the eye has to do the work.',
      },
      {
        title: 'Ember',
        year: '2023',
        medium: 'Ink wash and vermilion, 100 × 140 cm',
        caption:
          'Commissioned for a window in Vienna. Painted twice; the first one was better and is gone.',
      },
    ],
    piece: 'Piece',
    of: 'of',
    prev: 'Previous piece',
    next: 'Next piece',
  },
  contact: {
    label: 'Contact',
    heading: 'Let’s make something worth framing.',
    lede:
      'Commissions, editorial assignments, live drawing and print enquiries. Replies usually land within two working days.',
    studioLabel: 'Studio',
    studioValue: 'Oranienstraße 00, 10999 Berlin',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    messageLabel: 'Message',
    messageCta: 'Write a message',
    closeForm: 'Close',
    socialsLabel: 'Elsewhere',
    form: {
      name: 'Your name',
      namePlaceholder: 'Jane Doe',
      email: 'Email',
      emailPlaceholder: 'jane@studio.com',
      subject: 'Subject',
      subjectPlaceholder: 'Editorial commission',
      message: 'Message',
      messagePlaceholder: 'Tell me what you have in mind, and when you need it.',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Thank you — your message is on its way. I will be in touch shortly.',
      successNote: 'This form is a demo and does not deliver mail yet.',
      reset: 'Send another',
      errorRequired: 'This field is required.',
      errorEmail: 'Please enter a valid email address.',
      errorSummary: 'Please check the highlighted fields.',
    },
  },
  footer: {
    tagline: 'Ink, gouache and vermilion since 2012.',
    rights: 'All rights reserved.',
    credit: 'Placeholder site — imagery and copy to be replaced.',
    backToTop: 'Back to top',
  },
}

export default en
