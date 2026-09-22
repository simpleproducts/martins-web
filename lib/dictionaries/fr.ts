import type { Dictionary } from '@/lib/i18n'

const fr: Dictionary = {
  meta: {
    title: 'Georg Martin — Illustration de mode',
    description:
      'Encre, gouache et vermillon. Illustration de mode et dessin éditorial depuis un petit atelier berlinois.',
    imageAlt: 'Illustration de mode à l’encre et à la gouache d’une figure en robe de dentelle noire',
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    works: 'Œuvres',
    services: 'Services',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    skipToContent: 'Aller au contenu',
    language: 'Langue',
  },
  hero: {
    eyebrow: 'Illustration de mode · Berlin',
    lede:
      'Encre, gouache et un trait têtu de vermillon. Des dessins faits pour la demi-seconde avant que le vêtement ne bouge.',
    since: 'En activité depuis 2012',
  },
  intro: {
    label: 'À propos',
    heading: 'Un dessin est une décision prise vite et défendue lentement.',
    body: [
      'Je dessine la mode telle qu’on la voit vraiment : d’un coup d’œil, en mouvement, à moitié achevée dans l’œil. L’atelier travaille presque exclusivement à l’encre et à la gouache sur papier de coton épais, et chaque figure commence par une seule ligne continue posée d’un souffle.',
      'Tout ce qui suit cette première ligne est soustraction. Ce qui subsiste, c’est la posture, le poids, la tombée d’un ourlet, l’angle qu’une épaule tient une seconde avant de céder. Ce sont les parties qu’une photographie aplatit et celles pour lesquelles on me paie.',
      'J’ai travaillé depuis le premier rang des défilés, depuis des cabines d’essayage à minuit, et depuis une table berlinoise la fenêtre ouverte. Quatorze ans plus tard, la méthode a peu changé : regarder plus longtemps qu’on ne dessine, puis dessiner plus vite qu’on ne pense.',
      'On vient me chercher pour des doubles pages éditoriales, des images-clés de campagne, du dessin en direct et des portraits privés. Une partie du travail finit imprimée dans toute l’Europe ; une autre finit dans le couloir de quelqu’un, ce qui me dérange bien moins que prévu.',
    ],
    facts: [
      { label: 'Basé à', value: 'Berlin, Allemagne' },
      { label: 'Pratique', value: 'Encre · Gouache · Finition numérique' },
      { label: 'Clients choisis', value: 'Maison Verre, Atelier Noir, Kunsthalle Süd' },
      { label: 'Expositions', value: 'Paris, Lisbonne, Vienne — 2021 / 2023 / 2025' },
    ],
    galleryLabel: 'Atelier et processus',
    prev: 'Image précédente',
    next: 'Image suivante',
    counterOf: 'sur',
  },
  works: {
    label: 'Œuvres choisies',
    heading: 'Pièces récentes',
    lede: 'Cinq dessins des deux dernières saisons. Parcourez la pile.',
    pieces: [
      {
        title: 'Étude cramoisie I',
        year: '2025',
        medium: 'Encre et gouache sur coton, 70 × 100 cm',
        caption:
          'Un seul trait vertical, posé avant que la figure n’existe. Tout le reste a été dessiné pour le justifier.',
      },
      {
        title: 'Atelier, tard',
        year: '2025',
        medium: 'Encre au pinceau sur papier teinté, 50 × 70 cm',
        caption:
          'Dessiné à la fin d’un essayage, de mémoire, pendant qu’on balayait la salle.',
      },
      {
        title: 'Nocturne en dentelle',
        year: '2024',
        medium: 'Encre, gouache, finition numérique',
        caption:
          'La dentelle a pris neuf heures. Le visage en a pris quatre minutes et c’est la seule chose qu’on remarque.',
      },
      {
        title: 'Voile / Dévoilé',
        year: '2024',
        medium: 'Gouache sur papier, diptyque, 60 × 80 cm chacun',
        caption:
          'Deux états du même geste, accrochés à distance pour que l’œil fasse le travail.',
      },
      {
        title: 'Braise',
        year: '2023',
        medium: 'Lavis d’encre et vermillon, 100 × 140 cm',
        caption:
          'Commandé pour une vitrine à Vienne. Peint deux fois ; le premier était meilleur et il a disparu.',
      },
    ],
    piece: 'Pièce',
    of: 'sur',
    prev: 'Pièce précédente',
    next: 'Pièce suivante',
  },
  services: {
    label: 'Services',
    heading: 'Quatre façons de me mettre au travail.',
    hint: 'Choisissez un service',
    items: {
      live: {
        title: 'Illustration en direct',
        lede: 'Dessiné dans la salle, devant celles et ceux qu’on dessine.',
        body: [
          'J’installe une table, un pot d’encre et une pile de papier de coton, et je dessine vos invités au fil de la soirée. Chaque portrait prend trois à cinq minutes et repart avec la personne dessinée : pas de file à gérer, pas d’imprimante, aucun écran entre l’invité et le dessin.',
          'Cela fonctionne aux ouvertures de boutique, aux lancements, aux mariages et aux journées presse. J’apporte tout, y compris la table si besoin, et je peux dessiner debout dans un coin ou assis sur une estrade au milieu de la salle. L’encre sèche en moins d’une minute ; chacun tient la sienne.',
        ],
        meta: [
          { label: 'Durée type', value: '2–4 heures, 25–45 portraits' },
          { label: 'Comprend', value: 'Matériel, déplacement dans Berlin, scans numériques' },
        ],
      },
      events: {
        title: 'Événements',
        lede: 'Un défilé, une saison, une salle pleine — raconté à l’encre.',
        body: [
          'Défilés, vernissages, dîners et foires, couverts comme le ferait un chroniqueur : je regarde l’ensemble et je reviens avec les huit dessins qui le tiennent. La livraison peut se faire le soir même pour les réseaux, ou s’affiner à l’atelier la semaine suivante.',
          'Pendant les fashion weeks, je travaille en main mobile : en coulisses pendant les essayages, en salle pendant le défilé, puis à l’atelier pour les planches finies. Les équipes éditoriales utilisent en général la série rapide le jour même et la série lente pour le livre de saison.',
        ],
        meta: [
          { label: 'Délais', value: 'Série rapide le soir même · finales sous 5 jours' },
          { label: 'Déplacements', value: 'Toute l’Europe, au départ de Berlin' },
        ],
        process: {
          heading: 'Comment se passe la réservation',
          lede:
            'Chaque événement est différent : le processus commence donc par définir exactement ce dont vous avez besoin. Du type d’événement au nombre d’invités, d’illustrations et de matériaux, tout est convenu avant que l’événement n’ait lieu.',
          steps: [
            {
              title: 'Parlez-moi de votre événement',
              body:
                'Commencez par l’essentiel : la date, le lieu et le type d’événement. Dites-moi s’il s’agit d’un événement privé, d’un événement public, d’un événement d’entreprise, d’un mariage, d’une célébration, d’une activation de marque ou d’autre chose.',
            },
            {
              title: 'Nous définissons le projet',
              body:
                'Ensemble, nous déterminons à quoi ressemblera l’expérience d’illustration : le nombre d’invités, le nombre estimé d’illustrations, leur type, les matériaux nécessaires, et si les œuvres sont réalisées en direct pendant l’événement ou livrées après.',
            },
            {
              title: 'Vous validez la proposition',
              body:
                'Une fois tous les détails définis, vous recevez une proposition sur mesure adaptée à l’ampleur de l’événement : nombre d’illustrations convenu, matériaux, horaires, logistique et prix. Dès accord des deux parties, la réservation est confirmée.',
            },
            {
              title: 'Le jour J',
              body:
                'À la date convenue, j’arrive préparé avec le matériel nécessaire et je réalise les illustrations dans le format convenu. L’expérience est construite autour de votre événement, de vos invités et du type d’œuvres prévu ensemble.',
            },
          ],
          groupsHeading: 'Événements privés et publics',
          groups: [
            {
              title: 'Événements privés',
              body:
                'Mariages, anniversaires, dîners, célébrations, fêtes privées et autres réunions personnelles.',
            },
            {
              title: 'Événements publics et de marque',
              body:
                'Événements d’entreprise, festivals, expositions, lancements, activations de marque et autres expériences publiques.',
            },
          ],
        },
      },
      prints: {
        title: 'Tirages',
        lede: 'Des éditions d’archive des dessins, faites correctement.',
        body: [
          'Certaines pièces sortent en petites éditions sur coton 310 g, imprimées en giclée à Berlin, signées et numérotées à la main. Les éditions vont à vingt-cinq ; une fois close, une série le reste, et la planche est retirée.',
          'Les formats vont du A3 au 100 × 140 cm, encadrés en chêne ou en frêne noirci, ou non encadrés. Tout part roulé en tube ou à plat entre cartons, assuré, en général dans la semaine suivant la commande.',
        ],
        meta: [
          { label: 'Édition', value: '25 par pièce, signées et numérotées' },
          { label: 'Papier', value: 'Coton 310 g, encres d’archive' },
        ],
      },
      commissions: {
        title: 'Commandes sur mesure',
        lede: 'Un dessin, fait pour une raison, avec vous dans la pièce.',
        body: [
          'Portraits privés, cadeaux, vêtements que vous voulez consigner, une image-clé de campagne qui doit exister avant la prise de vue. On commence par une conversation et deux ou trois croquis, puis je dessine — souvent deux fois, car c’est le second qui tient.',
          'Vous voyez la pièce au stade du trait, puis avant la couleur, et rien n’est fini tant que vous ne l’avez pas dit. Les originaux sont livrés encadrés ou à plat ; les scans accompagnent le fichier, au cas où le mur auquel il est destiné change de mains.',
        ],
        meta: [
          { label: 'Délai', value: '3–6 semaines, urgences possibles' },
          { label: 'Livrables', value: 'Œuvre originale · scan 600 ppp · droits d’usage' },
        ],
      },
    },
  },
  photography: {
    label: 'Photographie',
    imageAlt: 'Photographie tirée des archives de l’atelier',
    prev: 'Photographie précédente',
    next: 'Photographie suivante',
    goTo: 'Aller à la photographie',
  },
  contact: {
    label: 'Contact',
    heading: 'Faisons quelque chose qui mérite un cadre.',
    introLines: [
      'Commandes, missions éditoriales, dessin en direct et demandes de tirages : tout est bienvenu.',
      'Réponse généralement sous deux jours ouvrés — plus vite si l’échéance l’exige.',
    ],
    studioLabel: 'Atelier',
    studioValue: 'Oranienstraße 00, 10999 Berlin',
    emailLabel: 'E-mail',
    phoneLabel: 'Téléphone',
    messageLabel: 'Message',
    socialsLabel: 'Ailleurs',
    form: {
      name: 'Votre nom',
      namePlaceholder: 'Camille Durand',
      email: 'E-mail',
      emailPlaceholder: 'camille@atelier.com',
      subject: 'Objet',
      subjectPlaceholder: 'Commande éditoriale',
      message: 'Message',
      messagePlaceholder: 'Dites-moi ce que vous avez en tête, et pour quand.',
      submit: 'Envoyer le message',
      sending: 'Envoi…',
      success: 'Merci — votre message est parti. Je reviens vers vous très vite.',
      successNote: 'Ce formulaire est une démo et n’envoie pas encore de courrier.',
      reset: 'En envoyer un autre',
      errorRequired: 'Ce champ est obligatoire.',
      errorEmail: 'Veuillez saisir une adresse e-mail valide.',
      errorSummary: 'Veuillez vérifier les champs signalés.',
    },
  },
  footer: {
    tagline: 'Encre, gouache et vermillon depuis 2012.',
    rights: 'Tous droits réservés.',
    credit: 'Site provisoire — images et textes à remplacer.',
    backToTop: 'Haut de page',
  },
}

export default fr
