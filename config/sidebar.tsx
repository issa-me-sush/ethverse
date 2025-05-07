import { Clock, Rocket, Cog, Globe } from 'lucide-react'

export type Page = {
  title: string
  href: string
}

export type Section = {
  title: string
  icon?: React.ReactNode
  defaultOpen?: boolean
  pages: Page[]
}

export const sidebarNav = [
  {
    title: '🧱 Pre-Ethereum',
    icon: <Clock className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { title: 'Web2 & Centralized Apps', href: '/docs/pre-ethereum/web2' },
      { title: 'Bitcoin Whitepaper', href: '/docs/pre-ethereum/bitcoin-whitepaper' },
      { title: 'Bitcoin Genesis Block', href: '/docs/pre-ethereum/bitcoin-genesis' },
      { title: 'Ethereum Concept', href: '/docs/pre-ethereum/ethereum-concept' }
    ]
  },
  {
    title: '🚀 Ethereum Launch Era',
    icon: <Rocket className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      { 
        title: 'Ethereum Mainnet', 
        href: '/docs/launch-era/mainnet',
      },
      { 
        title: 'Account-Based Model', 
        href: '/docs/launch-era/mainnet/account-model' 
      },
      { 
        title: 'EVM Execution', 
        href: '/docs/launch-era/mainnet/evm' 
      },
      { 
        title: 'Smart Contracts', 
        href: '/docs/launch-era/mainnet/smart-contracts' 
      },
      { 
        title: 'Gas Mechanics', 
        href: '/docs/launch-era/mainnet/gas' 
      },
      { title: 'The DAO Fork', href: '/docs/launch-era/dao-fork' },
      { title: 'ICO Boom', href: '/docs/launch-era/ico-boom' },
      { title: 'Layer 2 Research', href: '/docs/launch-era/layer2-research' }
    ]
  },
  {
    title: '⚙️ Ethereum Scaling',
    icon: <Cog className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Beacon Chain Genesis', href: '/docs/scaling/beacon-chain' },
      { title: 'EIP-1559', href: '/docs/scaling/eip-1559' },
      { title: 'The Merge', href: '/docs/scaling/merge' },
      { title: 'EIP-4844', href: '/docs/scaling/eip-4844' },
      { title: 'Rollup-Centric Roadmap', href: '/docs/scaling/rollup-roadmap' }
    ]
  },
  {
    title: '🪐 Beyond Ethereum',
    icon: <Globe className="h-5 w-5" />,
    defaultOpen: false,
    pages: [
      { title: 'Modular DA Stack', href: '/docs/beyond/modular-da' },
      { title: 'Verkle Tries', href: '/docs/beyond/verkle-tries' },
      { title: 'Account Abstraction', href: '/docs/beyond/account-abstraction' },
      { title: 'SUAVE Launch', href: '/docs/beyond/suave' },
      { title: 'Optimum Testnet', href: '/docs/beyond/optimum' },
      { title: 'Pectra Upgrade', href: '/docs/beyond/pectra' }
    ]
  }
]
