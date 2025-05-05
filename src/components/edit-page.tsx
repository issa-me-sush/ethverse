'use client';

import { Github } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function EditPage() {
  const pathname = usePathname();
  
  // Convert the pathname to the corresponding file path in the GitHub repo
  const getGitHubPath = () => {
    // Remove leading /docs if present
    const path = pathname.replace(/^\/docs/, '');
    // Convert the path to the MDX file location
    return `docs${path}.mdx`;
  };

  const githubUrl = `https://github.com/issa-me-sush/ethverse/edit/main/${getGitHubPath()}`;

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
    >
      <Github className="h-4 w-4" />
      Edit this page on GitHub
    </a>
  );
} 