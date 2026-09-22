/**
 * Site-wide constants that never need translating.
 * Everything here is placeholder data — swap it for the real thing before launch.
 */
export const SITE = {
  name: 'Georg Martin',
  wordmark: { top: 'Georg Martin', bottom: 'Illustration' },
  url: 'https://georgmartin.example',
  email: 'studio@georgmartin.example',
  phone: '+49 30 0000 0000',
  city: 'Berlin',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
    { label: 'Are.na', href: 'https://are.na/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
} as const

/**
 * Artwork placeholders. One image is reused for every piece on purpose —
 * replace `src` per piece with the real scan. Gallery plates letterbox the
 * artwork rather than cropping it, so pieces of any proportion are shown whole;
 * `focus` only steers the cropped portraits in the hero and about sections.
 */
export const ARTWORK = [
  { id: 'crimson', src: '/artwork/placeholder.jpg', focus: '50% 22%' },
  { id: 'atelier', src: '/artwork/placeholder.jpg', focus: '38% 46%' },
  { id: 'nocturne', src: '/artwork/placeholder.jpg', focus: '62% 34%' },
  { id: 'veil', src: '/artwork/placeholder.jpg', focus: '44% 66%' },
  { id: 'ember', src: '/artwork/placeholder.jpg', focus: '55% 12%' },
] as const

export const PORTRAIT = { src: '/artwork/placeholder.jpg', focus: '48% 26%' } as const
