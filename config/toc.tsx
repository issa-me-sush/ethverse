type TocPage = {
  title: string;
  href: string;
};

type TocSection = {
  title: string;
  href: string;
  pages?: TocPage[];
};

type TocData = {
  [key: string]: TocSection[];
};

// Your TocData object with the correct types
export const TocData: TocData = {
  'getting-started/introduction': [
    {
      title: 'Introduction to Ethereum',
      href: '/docs/getting-started/introduction#introduction-to-ethereum',
      pages: [
        {
          title: 'What is Ethereum?',
          href: '/docs/getting-started/introduction#what-is-ethereum',
        },
        {
          title: 'Key Features of Ethereum',
          href: '/docs/getting-started/introduction#key-features-of-ethereum',
        },
        {
          title: 'Why Learn Ethereum?',
          href: '/docs/getting-started/introduction#why-learn-ethereum',
        },
        {
          title: 'Getting Started',
          href: '/docs/getting-started/introduction#getting-started',
        },
        {
          title: 'Prerequisites',
          href: '/docs/getting-started/introduction#prerequisites',
        },
        {
          title: 'Additional Resources',
          href: '/docs/getting-started/introduction#additional-resources',
        },
      ],
    },
  ],
  'getting-started/blockchain-basics': [
    {
      title: 'Blockchain Basics',
      href: '/docs/getting-started/blockchain-basics#blockchain-basics',
      pages: [
        {
          title: 'What is a Blockchain?',
          href: '/docs/getting-started/blockchain-basics#what-is-a-blockchain',
        },
        {
          title: 'Key Concepts',
          href: '/docs/getting-started/blockchain-basics#key-concepts',
        },
        {
          title: 'How Blocks Work',
          href: '/docs/getting-started/blockchain-basics#how-blocks-work',
        },
        {
          title: 'Types of Blockchains',
          href: '/docs/getting-started/blockchain-basics#types-of-blockchains',
        },
        {
          title: 'Cryptography in Blockchain',
          href: '/docs/getting-started/blockchain-basics#cryptography-in-blockchain',
        },
        {
          title: 'Common Terms',
          href: '/docs/getting-started/blockchain-basics#common-terms',
        },
        {
          title: 'Real-World Applications',
          href: '/docs/getting-started/blockchain-basics#real-world-applications',
        },
        {
          title: 'Best Practices',
          href: '/docs/getting-started/blockchain-basics#best-practices',
        },
      ],
    },
  ],
  'getting-started/wallet-setup': [
    {
      title: 'Setting Up Your Ethereum Wallet',
      href: '/docs/getting-started/wallet-setup#setting-up-your-ethereum-wallet',
      pages: [
        {
          title: 'Types of Wallets',
          href: '/docs/getting-started/wallet-setup#types-of-wallets',
        },
        {
          title: 'Setting Up MetaMask',
          href: '/docs/getting-started/wallet-setup#setting-up-metamask',
        },
        {
          title: 'Best Security Practices',
          href: '/docs/getting-started/wallet-setup#best-security-practices',
        },
        {
          title: 'Network Settings',
          href: '/docs/getting-started/wallet-setup#network-settings',
        },
        {
          title: 'Getting ETH',
          href: '/docs/getting-started/wallet-setup#getting-eth',
        },
        {
          title: 'Common Operations',
          href: '/docs/getting-started/wallet-setup#common-operations',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/getting-started/wallet-setup#troubleshooting',
        },
        {
          title: 'Advanced Features',
          href: '/docs/getting-started/wallet-setup#advanced-features',
        },
      ],
    },
  ],
  'getting-started/installation': [
    {
      title: 'Steps to install',
      href: '/docs/getting-started/installation',
    },
  ],
  'components/folder-tree': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/folder-tree#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/folder-tree#props',
    },
  ],
  'components/button': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/button#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/button#props',
    },
  ],
  'components/note': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/note#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/note#props',
    },
  ],
  'components/search-button': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/search-button#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/search-button#props',
    },
  ],
  'components/sidebar': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/sidebar#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/sidebar#props',
    },
  ],
  'components/steps': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/steps#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/steps#props',
    },
  ],
  'components/syntax-highlighter': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/syntax-highlighter#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/syntax-highlighter#props',
    },
  ],
  'components/tabs': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/tabs#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/tabs#props',
    },
  ],
  'components/menu': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/menu#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/menu#props',
    },
  ],
  'components/popover': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/popover#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/popover#props',
    },
  ],
  'components/dialog': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/dialog#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/dialog#props',
    },
  ],
  'components/select': [
    {
      title: 'Preview & Code Snippet',
      href: '/docs/components/select#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/docs/components/select#props',
    },
  ],
  theme: [
    {
      title: 'Overview',
      href: 'docs/theme#overview',
    },
    {
      title: 'Understanding Foreground and Background',
      href: '/docs/theme#understanding-foreground-and-background',
    },
    {
      title: 'Primary and Secondary colors',
      href: '/docs/theme#primary-and-secondary-colors',
    },

    {
      title: 'Where to modify',
      href: '/docs/theme#where-to-modify-themes',
    },
  ],
  'search-bar': [
    {
      title: 'How it works',
      href: '/docs/search-bar#-how-it-works',
    },
    {
      title: 'Key Features',
      href: '/docs/search-bar#-key-features',
    },
    {
      title: 'Customization',
      href: '/docs/search-bar#-customization',
    },
    {
      title: 'Code Snippet: search highlight',
      href: '/docs/search-bar#-code-snippet-search-highlighting',
    },
    {
      title: 'Visual Preview',
      href: '/docs/search-bar#-visual-preview',
    },
    {
      title: 'Why this is cool',
      href: '/docs/search-bar#-why-this-is-cool',
    },
  ],
  'customization/font': [
    {
      title: 'Location of Font Definition',
      href: '/docs/customization/font#location-of-font-definition',
    },
    {
      title: 'Applying Font Globally',
      href: '/docs/customization/font#applying-the-font-globally',
    },
    {
      title: 'Font Size & Config',
      href: '/docs/customization/font#modifying-font-size--tailwind-config',
    },
    {
      title: 'Font Weight',
      href: '/docs/customization/font#customizing-font-weight',
    },
    {
      title: 'Summary',
      href: '/docs/customization/font#summary',
    },
  ],
  'customization/sidebar': [
    {
      title: 'Folder Structure',
      href: '/docs/customization/sidebar#folder-structure',
    },
    {
      title: 'How to make changes',
      href: '/docs/customization/sidebar#editing-sidebar-navigation',
    },
    {
      title: 'Where is Sidebar Renderer?',
      href: '/docs/customization/sidebar#where-is-the-sidebar-rendered',
    },
    {
      title: 'Summary',
      href: '/docs/customization/sidebar#summary',
    },
  ],
  'customization/toc': [
    {
      title: 'Folder Structure',
      href: '/docs/customization/toc#folder-structure',
    },
    {
      title: 'How to make changes',
      href: '/docs/customization/toc#editing-table-of-contents-toc',
    },
    {
      title: 'Where is Toc Renderer?',
      href: '/docs/customization/toc#where-is-the-TOC-rendered',
    },
    {
      title: 'Summary',
      href: '/docs/customization/toc#summary',
    },
  ],
  'customization/seo-and-social-sharing': [
    {
      title: 'Why metadata matters',
      href: '/docs/customization/seo-and-social-sharing#why-metadata-matters',
    },
    {
      title: 'Configuring Metadata',
      href: '/docs/customization/seo-and-social-sharing#configuring-metadata-in-nextjs',
    },
  ],
  'getting-started/quick-start': [
    {
      title: 'Create your MDX file and add metadata',
      href: '/docs/getting-started/quick-start#create-your-mdx-file-and-add-metadata',
    },
    {
      title: 'Start Writing',
      href: '/docs/getting-started/quick-start#start-writing',
    },
  ],
};
