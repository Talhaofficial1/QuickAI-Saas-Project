import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';   // Tailwind directives
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';

//is  me env variable ka naam REACT_APP_ se shru hona chaiye
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key. Add it to your .env file');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
  
);
