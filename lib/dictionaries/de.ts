import type { Dictionary } from '@/lib/i18n'

const de: Dictionary = {
  meta: {
    title: 'Georg Martin — Modeillustration',
    description:
      'Tusche, Gouache und Zinnoberrot. Modeillustration und editorielle Zeichnung aus einem kleinen Berliner Atelier.',
    imageAlt: 'Modeillustration in Tusche und Gouache: eine Figur in einem schwarzen Spitzenkleid',
  },
  nav: {
    home: 'Start',
    about: 'Über mich',
    works: 'Arbeiten',
    contact: 'Kontakt',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    skipToContent: 'Zum Inhalt springen',
    language: 'Sprache',
  },
  hero: {
    eyebrow: 'Modeillustration · Berlin',
    lede:
      'Tusche, Gouache und ein sturer Strich Zinnoberrot. Zeichnungen für die halbe Sekunde, bevor sich der Stoff bewegt.',
    since: 'Tätig seit 2012',
  },
  about: {
    label: 'Über mich',
    heading: 'Eine Zeichnung ist eine schnell getroffene und langsam verteidigte Entscheidung.',
    lede:
      'Georg Martin zeichnet Mode so, wie man sie tatsächlich sieht: im Vorbeigehen, in Bewegung, im Auge halb fertig.',
    body: [
      'Das Atelier arbeitet fast ausschließlich mit Tusche und Gouache auf schwerem Baumwollpapier. Jede Figur beginnt als eine einzige durchgehende Linie, in einem Atemzug gesetzt; alles danach ist Subtraktion. Was bleibt, sind Haltung, Gewicht, der Fall eines Saums — genau das, was eine Fotografie flach macht.',
      'Die Aufträge reichen von Editorial-Strecken und Kampagnen-Keyframes bis zu Live-Zeichnung auf Schauen und privaten Porträts. Die Arbeiten erschienen europaweit im Druck, in drei Gruppenausstellungen und an einigen wenigen Wänden, die mehr zählen als all das.',
    ],
    facts: [
      { label: 'Ansässig in', value: 'Berlin, Deutschland' },
      { label: 'Praxis', value: 'Tusche · Gouache · Digitales Finish' },
      { label: 'Ausgewählte Kunden', value: 'Maison Verre, Atelier Noir, Kunsthalle Süd' },
      { label: 'Ausstellungen', value: 'Paris, Lissabon, Wien — 2021 / 2023 / 2025' },
    ],
  },
  works: {
    label: 'Ausgewählte Arbeiten',
    heading: 'Neue Arbeiten',
    lede: 'Fünf Zeichnungen aus den letzten zwei Saisons. Blättern Sie durch den Stapel.',
    pieces: [
      {
        title: 'Karmesinstudie I',
        year: '2025',
        medium: 'Tusche und Gouache auf Baumwolle, 70 × 100 cm',
        caption:
          'Ein einzelner senkrechter Strich, gesetzt bevor es die Figur gab. Alles andere wurde gezeichnet, um ihn zu rechtfertigen.',
      },
      {
        title: 'Atelier, spät',
        year: '2025',
        medium: 'Pinseltusche auf getöntem Papier, 50 × 70 cm',
        caption:
          'Am Ende einer Anprobe aus dem Gedächtnis gezeichnet, während der Raum gefegt wurde.',
      },
      {
        title: 'Nocturne in Spitze',
        year: '2024',
        medium: 'Tusche, Gouache, digitales Finish',
        caption:
          'Die Spitze dauerte neun Stunden. Das Gesicht vier Minuten — und nur davon spricht jemand.',
      },
      {
        title: 'Schleier / Enthüllt',
        year: '2024',
        medium: 'Gouache auf Papier, Diptychon, je 60 × 80 cm',
        caption:
          'Zwei Zustände derselben Geste, weit auseinander gehängt, damit das Auge die Arbeit macht.',
      },
      {
        title: 'Glut',
        year: '2023',
        medium: 'Tuschlavierung und Zinnober, 100 × 140 cm',
        caption:
          'Für ein Schaufenster in Wien beauftragt. Zweimal gemalt; das erste war besser und ist fort.',
      },
    ],
    piece: 'Arbeit',
    of: 'von',
    prev: 'Vorherige Arbeit',
    next: 'Nächste Arbeit',
  },
  contact: {
    label: 'Kontakt',
    heading: 'Machen wir etwas, das einen Rahmen verdient.',
    lede:
      'Aufträge, Editorial-Arbeiten, Live-Zeichnung und Druckanfragen. Antwort in der Regel innerhalb von zwei Werktagen.',
    studioLabel: 'Atelier',
    studioValue: 'Oranienstraße 00, 10999 Berlin',
    emailLabel: 'E-Mail',
    phoneLabel: 'Telefon',
    messageLabel: 'Nachricht',
    messageCta: 'Nachricht schreiben',
    closeForm: 'Schließen',
    socialsLabel: 'Anderswo',
    form: {
      name: 'Ihr Name',
      namePlaceholder: 'Anna Schmidt',
      email: 'E-Mail',
      emailPlaceholder: 'anna@atelier.de',
      subject: 'Betreff',
      subjectPlaceholder: 'Editorial-Auftrag',
      message: 'Nachricht',
      messagePlaceholder: 'Erzählen Sie mir, was Ihnen vorschwebt — und bis wann.',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      success: 'Danke — Ihre Nachricht ist unterwegs. Ich melde mich in Kürze.',
      successNote: 'Dieses Formular ist eine Demo und versendet noch keine E-Mails.',
      reset: 'Weitere senden',
      errorRequired: 'Dieses Feld ist erforderlich.',
      errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      errorSummary: 'Bitte prüfen Sie die markierten Felder.',
    },
  },
  footer: {
    tagline: 'Tusche, Gouache und Zinnober seit 2012.',
    rights: 'Alle Rechte vorbehalten.',
    credit: 'Platzhalter-Website — Bilder und Texte werden ersetzt.',
    backToTop: 'Nach oben',
  },
}

export default de
