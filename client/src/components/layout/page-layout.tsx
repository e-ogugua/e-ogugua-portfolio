import { ReactNode } from 'react';
import Head from 'next/head';

interface PageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function PageLayout({ title, description, children }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | Emmanuel Ogugua</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </>
  );
}
