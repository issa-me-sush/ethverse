'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AlignLeft } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

const Toc = () => {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // Get all headings only from the main article content
    const articleElement = document.querySelector('article');
    if (!articleElement) return;
    
    const elements = articleElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingElements = Array.from(elements).map((element) => ({
      id: element.id,
      // Remove any # symbols that might be in the text content
      text: element.textContent?.replace(/#/g, '').trim() || '',
      level: parseInt(element.tagName[1]),
    }));
    setHeadings(headingElements);

    // Set up intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -40% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="fixed right-0 hidden xl:block w-64 p-6 top-16 border-l border-[var(--color-border)] h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="top-0 pb-2">
        <h2 className="flex flex-1 gap-2 items-center font-semibold text-[var(--color)]">
          <AlignLeft size={19} />On this page
        </h2>
      </div>
      <nav className="mt-4">
        <ul className="space-y-3">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`group ${
                activeId === heading.id ? 'active' : ''
              }`}
              style={{ 
                paddingLeft: `${(heading.level - 1) * 12}px`,
                fontSize: heading.level === 1 ? '0.95rem' : '0.9rem'
              }}
            >
              <a
                href={`#${heading.id}`}
                className={`transition-colors block py-1 ${
                  activeId === heading.id
                    ? 'text-primary font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Toc;
