import React from 'react';
import dynamic from 'next/dynamic';

// Disable SSR for the client app to prevent hydration issues
const ClientApp = dynamic(
  () => import('../client/src/App'),
  { ssr: false, loading: () => <div>Loading...</div> }
);

// This is a client-side only app
const Home = () => {
  return <ClientApp />;
};

// Disable SSR for this page
Home.getInitialProps = async () => ({});

export default Home;
