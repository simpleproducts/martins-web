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
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
  },
  hero: {
    eyebrow: 'Illustration de mode · Berlin',
    lede:
      'Encre, gouache et un trait têtu de vermillon. Des dessins faits pour la demi-seconde avant que le vêtement ne bouge.',
    primaryCta: 'Voir les œuvres',
    secondaryCta: 'Commander une pièce',
    scroll: 'Faites défiler',
    since: 'En activité depuis 2012',
  },
  about: {
    label: 'À propos',
    heading: 'Un dessin est une décision prise vite et défendue lentement.',
    lede:
      'Georg Martin dessine la mode telle qu’on la voit vraiment : d’un coup d’œil, en mouvement, à moitié achevée dans l’œil.',
    body: [
      'L’atelier travaille presque exclusivement à l’encre et à la gouache sur papier de coton épais. Chaque figure commence par une seule ligne continue posée d’un souffle ; tout ce qui suit est soustraction. Ce qui subsiste, c’est la posture, le poids, la tombée d’un ourlet — ce qu’une photographie aplatit.',
      'Les commandes vont des doubles pages éditoriales aux images-clés de campagne, en passant par le dessin en direct lors des défilés et les portraits privés. Le travail a été publié dans toute l’Europe, montré dans trois expositions collectives, et accroché sur quelques murs qui comptent plus que tout le reste.',
    ],
    facts: [
      { label: 'Basé à', value: 'Berlin, Allemagne' },
      { label: 'Pratique', value: 'Encre · Gouache · Finition numérique' },
      { label: 'Clients choisis', value: 'Maison Verre, Atelier Noir, Kunsthalle Süd' },
      { label: 'Expositions', value: 'Paris, Lisbonne, Vienne — 2021 / 2023 / 2025' },
    ],
    quote: 'Je ne dessine pas la robe. Je dessine la seconde où elle s’arrête.',
  },
  works: {
    label: 'Œuvres choisies',
    heading: 'Pièces récentes',
    lede: 'Cinq dessins des deux dernières saisons. Faites défiler pour les parcourir.',
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
  },
  contact: {
    label: 'Contact',
    heading: 'Faisons quelque chose qui mérite un cadre.',
    lede:
      'Commandes, missions éditoriales, dessin en direct et demandes de tirages. Réponse généralement sous deux jours ouvrés.',
    directLabel: 'Ou écrivez directement',
    studioLabel: 'Atelier',
    studioValue: 'Oranienstraße 00, 10999 Berlin',
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
