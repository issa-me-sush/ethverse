import { allDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx-components';
import Breadcrumb from '@/components/bread-crumb';
import Toc from '@/components/toc';

type tParams = Promise<{ slug: string[] }>;

export const generateStaticParams = async () => {
  return allDocs.map((doc) => {
    // For a path like "getting-started/introduction",
    // this creates { slug: ['getting-started', 'introduction'] }
    const slugArray = doc._raw.flattenedPath.split('/');
    return { slug: slugArray };
  });
};

export const generateMetadata = async ({ params }: { params: tParams }) => {
  // Join the slug array back into a path string
  const awaitedParams = await params;
  const path = awaitedParams.slug.join('/');
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === path);

  if (!doc) throw new Error(`Doc not found for slug: ${path}`);
  return {
    title: doc.title,
    description: doc.description || 'A detailed guide to the topic.',
    openGraph: {
      title: doc.title,
      description: doc.description || 'A detailed guide to the topic.',
    },
  };
};

const DocsPage = async ({ params }: { params: tParams }) => {
  const awaitedParams = await params;
  // Join the slug array back into a path string
  const path = awaitedParams.slug.join('/');
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === path);

  if (!doc) notFound();
  return (
    <div className={`grid xl:grid xl:grid-cols-[1fr_270px]`}>
      <article className="overflow-auto px-6 py-8">
        <div className="mb-8">
          <Breadcrumb path={doc.url} />
        </div>
        <Mdx code={doc.body.code} />
      </article>

      <div className="relative">
        <Toc doc={{ title: doc.title, url: doc.url }} />
      </div>
    </div>
  );
};

export default DocsPage;
