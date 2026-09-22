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
    works: 'Works',
    services: 'Services',
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
  intro: {
    label: 'About me',
    heading: 'A drawing is a decision made quickly and defended slowly.',
    body: [
      'I draw fashion the way it is actually seen — at a glance, in motion, half-finished in the eye. The studio works almost entirely in ink and gouache on heavy cotton paper, and every figure starts as one unbroken line laid down in a single breath.',
      'Everything after that first line is subtraction. What survives is posture, weight, the fall of a hem, the angle a shoulder holds for a second and then gives up. Those are the parts a photograph flattens and the parts I am paid to keep.',
      'I have worked from the front row of shows, from fitting rooms at midnight, and from a table in Berlin with the window open. Fourteen years in, the method has not changed much: watch longer than you draw, then draw faster than you think.',
      'Clients come for editorial spreads, campaign keyframes, live drawing at events and private portraits. Some of the work ends up in print across Europe; some of it ends up on a wall in somebody’s hallway, which I mind rather less than I expected to.',
    ],
    facts: [
      { label: 'Based in', value: 'Berlin, Germany' },
      { label: 'Practice', value: 'Ink · Gouache · Digital finish' },
      { label: 'Selected clients', value: 'Maison Verre, Atelier Noir, Kunsthalle Süd' },
      { label: 'Exhibitions', value: 'Paris, Lisbon, Vienna — 2021 / 2023 / 2025' },
    ],
    galleryLabel: 'Studio and process',
    prev: 'Previous image',
    next: 'Next image',
    counterOf: 'of',
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
  services: {
    label: 'Services',
    heading: 'Ways to put me to work.',
    hint: 'Choose a service',
    items: {
      live: {
        title: 'Live Drawing Illustration',
        lede: 'Drawn in the room, in front of the people it is drawn for.',
        body: [
          'I set up a table, a pot of ink and a stack of cotton paper, and draw your guests as the evening runs. Each portrait takes three to five minutes and leaves with the person in it — no queue management, no printer, no screen between the guest and the drawing.',
          'It works at store openings, launches, weddings and press days. I bring everything, including the table if you need one, and I can draw standing in a corner or seated on a plinth in the middle of the room. Ink dries in under a minute; guests hold their own.',
        ],
        meta: [
          { label: 'Typical run', value: '2–4 hours, 25–45 portraits' },
          { label: 'Includes', value: 'Materials, travel within Berlin, digital scans' },
        ],
      },
      events: {
        title: 'Events',
        lede: 'A show, a season, a room full of people — reported in ink.',
        body: [
          'Runway shows, private views, dinners and fairs, covered the way a writer would cover them: I watch the whole thing and come back with the eight drawings that hold it. The work can be delivered the same night for social, or refined in the studio over the following week.',
          'For fashion weeks I work as a roving hand — backstage during fittings, front of house during the show, and in the studio afterwards for the finished plates. Editorial teams tend to use the fast set on the day and the slow set for the season book.',
        ],
        meta: [
          { label: 'Turnaround', value: 'Rough set same night · finals in 5 days' },
          { label: 'Travel', value: 'Europe-wide, from Berlin' },
        ],
        process: {
          heading: 'How the booking process works',
          lede:
            'Every event is different, so the process starts by defining exactly what you need. From the type of event to the number of guests, illustrations and materials, everything is agreed before the event takes place.',
          steps: [
            {
              title: 'Tell me about your event',
              body:
                'Start by sharing the essential details: the date, the location and the type of event. Let me know whether it is a private event, a public event, a corporate event, a wedding, a celebration, a brand activation or something else.',
            },
            {
              title: 'Define the project',
              body:
                'Together we determine what the illustration experience will look like: the number of guests, the estimated number of illustrations, the type of illustrations, the materials required, and whether the artwork is created live during the event or delivered afterwards.',
            },
            {
              title: 'Confirm the proposal',
              body:
                'Once all the details are defined you receive a custom proposal based on the scope of the event. It covers the agreed number of illustrations, materials, timing, logistics and price. Once both sides agree, the booking is confirmed.',
            },
            {
              title: 'The event',
              body:
                'On the agreed date I arrive prepared with the necessary materials and create the illustrations in the agreed format. The experience is built around your event, your guests and the type of artwork we have planned together.',
            },
          ],
          groupsHeading: 'Private & public events',
          groups: [
            {
              title: 'Private events',
              body:
                'Weddings, birthdays, dinners, celebrations, private parties and other personal gatherings.',
            },
            {
              title: 'Public & brand events',
              body:
                'Corporate events, festivals, exhibitions, launches, brand activations and other public experiences.',
            },
          ],
        },
      },
      prints: {
        title: 'Prints',
        lede: 'Archival editions of the drawings, made properly.',
        body: [
          'Selected pieces are released as small editions on 310 gsm cotton rag, giclée-printed in Berlin and signed and numbered by hand. Editions run to twenty-five; once a run closes it stays closed, and the plate is retired.',
          'Sizes go from A3 up to 100 × 140 cm, with unframed and framed options in oak or blackened ash. Everything ships rolled in a tube or flat-packed behind board, insured, usually within a week of the order.',
        ],
        meta: [
          { label: 'Edition', value: '25 per piece, signed and numbered' },
          { label: 'Paper', value: '310 gsm cotton rag, archival inks' },
        ],
      },
      commissions: {
        title: 'Custom Commissions',
        lede: 'One drawing, made for one reason, with you in the room for it.',
        body: [
          'Private portraits, gifts, garments you want recorded, a campaign keyframe that has to exist before the shoot does. We start with a conversation and two or three thumbnails, then I draw — usually twice, because the second one is the one that works.',
          'You see the piece at the line stage and again before the colour goes down, and nothing is finished until you have said so. Originals are delivered framed or flat; scans come with the file, in case the wall it is made for changes hands later.',
        ],
        meta: [
          { label: 'Lead time', value: '3–6 weeks, rush possible' },
          { label: 'Deliverables', value: 'Original artwork · 600 dpi scan · usage rights' },
        ],
      },
      originals: {
        title: 'Original Pieces',
        lede: 'The drawings themselves, one of each, priced and ready to leave.',
        body: [
          'These are originals: ink and gouache on cotton paper, signed, unframed unless you ask otherwise. What is listed is what exists — when a piece goes, the row closes and nothing takes its place.',
          'Prices include crating and insured shipping within Europe. Framing in oak or blackened ash can be arranged before dispatch, and anything you see here can be viewed at the studio in Berlin by appointment.',
        ],
        meta: [
          { label: 'Condition', value: 'Signed, unframed, certificate included' },
          { label: 'Shipping', value: 'Crated and insured, Europe included' },
        ],
        /** Index-matched to ORIGINALS in lib/site.ts — same order, same length. */
        pieces: [
          { title: 'Crimson Study I', medium: 'Ink and gouache, 70 × 100 cm' },
          { title: 'Atelier, Late', medium: 'Brush ink on toned paper, 50 × 70 cm' },
          { title: 'Nocturne in Lace', medium: 'Ink and gouache, 60 × 80 cm' },
          { title: 'Veil / Unveil', medium: 'Gouache on paper, 60 × 80 cm' },
          { title: 'Ember', medium: 'Ink wash and vermilion, 100 × 140 cm' },
          { title: 'Study VII', medium: 'Brush ink on cotton, 40 × 50 cm' },
        ],
      },
    },
  },
  photography: {
    /** The section shows no heading — only these captions and the closing note. */
    label: 'Photography',
    imageAlt: 'Photograph from the studio archive',
    goTo: 'Go to photograph',
    captions: [
      'Placeholder caption — Berlin, winter, 2024',
      'Placeholder caption — backstage, second fitting',
      'Placeholder caption — the studio at four in the afternoon',
      'Placeholder caption — Paris, between shows',
      'Placeholder caption — the last frame of the roll',
      'Placeholder caption — printed the same week, Kreuzberg',
    ],
    statement:
      'I photograph for the same reason I draw: to keep the half-second the eye already decided was worth keeping. The camera is only faster at admitting it.',
  },
  contact: {
    label: 'Contact',
    heading: 'Let’s make something worth framing.',
    introLines: [
      'Commissions, editorial assignments, live drawing and print enquiries are all welcome.',
      'Replies usually land within two working days — sooner if the deadline says so.',
    ],
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    messageLabel: 'Message',
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
    legalLabel: 'Legal',
  },
  legal: {
    backToSite: 'Back to the site',
    disclaimer: 'Placeholder text. Have it checked by a lawyer before the site goes live.',
    impressum: {
      title: 'Impressum',
      intro: 'Information according to § 5 TMG.',
      blocks: [
        {
          heading: 'Responsible for this site',
          lines: [
            'Georg Martin — Illustration',
            'Oranienstraße 00, 10999 Berlin, Germany',
            'studio@georgmartin.example',
            '+49 30 0000 0000',
          ],
        },
        {
          heading: 'Responsible for the content',
          lines: ['Georg Martin, at the address above (§ 18 (2) MStV).'],
        },
        {
          heading: 'VAT',
          lines: ['VAT identification number under § 27 a UStG: DE000000000.'],
        },
        {
          heading: 'Liability for links',
          lines: [
            'This site links to external sites whose content is outside my control. Responsibility for that content lies with the operator of the site in question. Links are checked when they are added and removed when a violation becomes known.',
          ],
        },
        {
          heading: 'Copyright',
          lines: [
            'All drawings, photographs and texts on this site are the work of Georg Martin unless stated otherwise. Reproduction, distribution or use of any kind requires written permission.',
          ],
        },
        {
          heading: 'Dispute resolution',
          lines: [
            'I am neither obliged nor willing to take part in dispute resolution proceedings before a consumer arbitration board.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      intro: 'This site does not gather data about you. Nothing here tracks, profiles or follows you anywhere else.',
      blocks: [
        {
          heading: 'No analytics, no cookies, no tracking',
          lines: [
            'There is no analytics tool, no tag manager, no advertising pixel and no tracking script on this site. No cookies are set, and nothing is written to your browser storage.',
          ],
        },
        {
          heading: 'No third-party requests',
          lines: [
            'Fonts and images are served from this site itself, so opening a page does not tell any other company that you were here. No content is embedded from social networks or video platforms.',
          ],
        },
        {
          heading: 'Server logs',
          lines: [
            'The hosting provider may keep short-lived technical logs — IP address, time, requested file — for the sole purpose of operating and securing the server. These are not linked to any person here and are not used for anything else.',
          ],
        },
        {
          heading: 'Contact form and email',
          lines: [
            'If you write to me through the form or by email, I use what you send purely to answer you. It is not added to a mailing list, not passed to anyone and not used for any other purpose, and I delete it once the conversation is finished.',
          ],
        },
        {
          heading: 'Your rights',
          lines: [
            'Since no personal data is collected here, there is normally nothing to request, correct or erase. If you have written to me, you may ask at any time what I still hold and ask me to delete it — write to studio@georgmartin.example.',
          ],
        },
      ],
    },
  },
}

export default en
