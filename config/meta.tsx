export const meta = {
  metadataBase: new URL('https://ethverse.org'),
  title: 'EthVerse - Ethereum Education Platform',
  description:
    'A comprehensive platform for learning Ethereum development, from basics to advanced concepts.',
  authors: [{ name: 'EthVerse Community' }],
  keywords: [
    'Ethereum',
    'blockchain',
    'web3',
    'smart contracts',
    'DeFi',
    'cryptocurrency',
    'blockchain development',
    'Solidity',
    'dApps',
    'EVM',
  ],
  publisher: 'EthVerse',
  creator: 'EthVerse Community',
  openGraph: {
    type: 'website',
    title: 'EthVerse - Learn Ethereum Development',
    description:
      'Your comprehensive guide to Ethereum development - from blockchain basics to advanced smart contracts.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'EthVerse Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', 
    title: 'EthVerse - Learn Ethereum Development', 
    description:
      'Your comprehensive guide to Ethereum development - from blockchain basics to advanced smart contracts.', // Twitter card description
    images: ['/og_image.png'],
    creator: '@ethverse', 
  },
  // SEO Enhancements
  alternates: {
    canonical: 'https://ethverse.org', 
  },
  robots: 'index, follow', // Allows search engines to index and follow links
  // Optional: Hreflang for multilingual content (if applicable)
  hreflang: {
    en: 'https://ethverse.org', // English version URL
    // Add more hreflang if you have other languages (example: Spanish)

  },
};
