import type { NextConfig } from 'next'

/**
 * English lives at the site root ("/"), the other locales under a prefix
 * ("/es", "/fr", "/de"). Every route is physically rendered by app/(site)/[locale],
 * so "/" is rewritten onto "/en" internally while the visible URL stays "/".
 * "/en" itself permanently redirects to "/" so there is a single canonical URL
 * per language.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/en', destination: '/', permanent: true }]
  },
  async rewrites() {
    return {
      beforeFiles: [{ source: '/', destination: '/en' }],
      afterFiles: [],
      fallback: [],
    }
  },
}

export default nextConfig
