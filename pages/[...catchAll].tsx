import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function CatchAll() {
  const router = useRouter();
  
  // Redirect to home page after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000); // 3 second delay before redirecting
    
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <Head>
        <title>Page Not Found - E. Ogugua</title>
      </Head>
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <p>Redirecting to home page in 3 seconds...</p>
      </div>
    </div>
  );
}