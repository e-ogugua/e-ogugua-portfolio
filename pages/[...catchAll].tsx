import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CatchAll() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to home page
    router.replace('/');
  }, [router]);
  
  return null; // No need to render anything as we're redirecting
}