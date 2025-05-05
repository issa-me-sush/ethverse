// src/app/doc/layout.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { allDocs } from 'contentlayer/generated';
import SearchDialog from '@/components/search-dialog';
import { sidebarNav } from 'config/sidebar';
import Image from 'next/image';
import {
  SidebarProvider,
  SidebarLayout,
  MainContent,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeaderLogo,
  SidebarHeaderTitle,
  UserAvatar,
  NestedLink,
  useSidebar,
} from '@/components/sidebar';
import { Github } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EditPage } from '@/components/edit-page';

import Header from '@/components/header';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/button';
import { useIsMobile } from '@/hooks/use-mobile';

const SidebarLogo = () => {
  const { isOpen } = useSidebar();
  
  return (
    <Link href={'/'} className="w-full flex items-center justify-start py-[3rem] px-4">
      <Image
        alt="EthVerse"
        className="h-auto block transition-all duration-300"
        width={isOpen ? 160 : 45}
        height={45}
        src={isOpen ? "/logowtextsm.png" : "/logo.png"}
        priority
      />
    </Link>
  );
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();
  
  return (
    <SidebarLayout>
      <SidebarProvider
        defaultOpen={isMobile ? false : true}
        defaultSide="left"
        defaultMaxWidth={280}
        showIconsOnCollapse={true}
      >
        <Sidebar>
          <SidebarHeader>
            <SidebarLogo />
          </SidebarHeader>
          <SidebarContent>
            {sidebarNav.map((section) => (
              <SidebarMenuItem
                isCollapsable={true}
                key={section.title}
                label={section.title}
                icon={section.icon}
                defaultOpen={section.defaultOpen}
                pages={section.pages}
              />
            ))}
          </SidebarContent>

          <SidebarFooter>
            <UserAvatar
              avatar={
                <Image
                  alt="logo"
                  src={'/logo.png'}
                  width={100}
                  height={100}
                />
              }
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Ethereum Community
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ethverse.org
              </span>
            </div>
          </SidebarFooter>
        </Sidebar>

        <MainContent>
          <Header className="justify-between py-2">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              {/* <h1 className="text-xl font-bold">Documentation</h1> */}
            </div>
            <div className="flex gap-2 items-center pr-0 lg:pr-8">
              <SearchDialog searchData={allDocs} />
              <ModeToggle />
              <Button
                onClick={() =>
                  router.push('https://github.com/issa-me-sush/ethverse')
                }
              >
                <Github className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>
            </div>
          </Header>
          <main className="overflow-auto p-6">
            {children}
            <div className="mt-8  border-gray-200  dark:border-gray-800">
              <div className="mt-4 ">
                <EditPage />
              </div>
            </div>
          </main>
        </MainContent>
      </SidebarProvider>
    </SidebarLayout>
  );
}
