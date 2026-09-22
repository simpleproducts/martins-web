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

/** One image stands in for every piece until the real scans arrive. */
const PLACEHOLDER = '/artwork/placeholder.jpg'

/**
 * Artwork placeholders. One image is reused for every piece on purpose —
 * replace `src` per piece with the real scan. Gallery plates letterbox the
 * artwork rather than cropping it, so pieces of any proportion are shown whole;
 * `focus` only steers the cropped portraits in the hero and intro sections.
 */
export const ARTWORK = [
  { id: 'crimson', src: PLACEHOLDER, focus: '50% 22%' },
  { id: 'atelier', src: PLACEHOLDER, focus: '38% 46%' },
  { id: 'nocturne', src: PLACEHOLDER, focus: '62% 34%' },
  { id: 'veil', src: PLACEHOLDER, focus: '44% 66%' },
  { id: 'ember', src: PLACEHOLDER, focus: '55% 12%' },
] as const

export const PORTRAIT = { src: PLACEHOLDER, focus: '48% 26%' } as const

/** The hand-navigated carousel beside the introduction. */
export const STUDIO_GALLERY = [
  { src: PLACEHOLDER, focus: '50% 18%' },
  { src: PLACEHOLDER, focus: '34% 44%' },
  { src: PLACEHOLDER, focus: '66% 30%' },
  { src: PLACEHOLDER, focus: '48% 62%' },
  { src: PLACEHOLDER, focus: '58% 8%' },
] as const

/**
 * The services list. `id` is the contract with the dictionaries: every locale
 * must carry a `services.items[id]` entry, so adding a service here and
 * forgetting the copy is a build error rather than an empty panel.
 * Order here is the order on the page.
 */
export const SERVICES = [
  { id: 'live', media: [{ src: PLACEHOLDER, focus: '52% 20%' }, { src: PLACEHOLDER, focus: '40% 48%' }, { src: PLACEHOLDER, focus: '60% 34%' }] },
  { id: 'events', media: [{ src: PLACEHOLDER, focus: '46% 30%' }, { src: PLACEHOLDER, focus: '58% 58%' }, { src: PLACEHOLDER, focus: '36% 16%' }] },
  { id: 'prints', media: [{ src: PLACEHOLDER, focus: '50% 42%' }, { src: PLACEHOLDER, focus: '62% 24%' }, { src: PLACEHOLDER, focus: '44% 70%' }] },
  { id: 'commissions', media: [{ src: PLACEHOLDER, focus: '48% 26%' }, { src: PLACEHOLDER, focus: '55% 52%' }, { src: PLACEHOLDER, focus: '38% 38%' }] },
  { id: 'originals', media: [{ src: PLACEHOLDER, focus: '50% 30%' }, { src: PLACEHOLDER, focus: '42% 52%' }, { src: PLACEHOLDER, focus: '58% 18%' }] },
] as const

export type ServiceId = (typeof SERVICES)[number]['id']

/**
 * The full-bleed photography slideshow. Wordless by design — these are shown
 * edge to edge with nothing but a hairline indicator over them.
 */
export const PHOTOGRAPHY = [
  { src: PLACEHOLDER, focus: '50% 30%' },
  { src: PLACEHOLDER, focus: '30% 50%' },
  { src: PLACEHOLDER, focus: '70% 40%' },
  { src: PLACEHOLDER, focus: '50% 70%' },
  { src: PLACEHOLDER, focus: '60% 20%' },
  { src: PLACEHOLDER, focus: '40% 55%' },
] as const

/**
 * The originals for sale, laid out as a masonry. `aspect` drives the column
 * rhythm, so vary it as the real pieces arrive; `price` is shown as written and
 * is deliberately not translated. Order here is the order in the grid, and the
 * dictionary's `services.items.originals.pieces` is matched to it by index.
 */
export const ORIGINALS = [
  { id: 'crimson-i', src: PLACEHOLDER, focus: '50% 22%', aspect: '3 / 4', price: '€2,400' },
  { id: 'atelier-late', src: PLACEHOLDER, focus: '38% 46%', aspect: '1 / 1', price: '€1,800' },
  { id: 'nocturne', src: PLACEHOLDER, focus: '62% 34%', aspect: '4 / 5', price: '€3,200' },
  { id: 'veil', src: PLACEHOLDER, focus: '44% 66%', aspect: '3 / 4', price: '€2,900' },
  { id: 'ember', src: PLACEHOLDER, focus: '55% 12%', aspect: '1 / 1', price: '€1,500' },
  { id: 'study-vii', src: PLACEHOLDER, focus: '48% 40%', aspect: '4 / 5', price: '€1,100' },
] as const
