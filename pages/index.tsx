import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the App component from the client
const ClientApp = dynamic(() => import('../client/src/App'), {
  ssr: false,
});

export default function Home() {
  return <ClientApp />;
}
