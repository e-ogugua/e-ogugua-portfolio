import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Persona = 'dev' | 'ceo';

interface PersonaContextType {
  persona: Persona;
  setPersona: (persona: Persona) => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [persona, setPersonaState] = useState<Persona>('dev');

  // Load persona from localStorage on initial render
  useEffect(() => {
    const savedPersona = localStorage.getItem('persona') as Persona | null;
    if (savedPersona) {
      setPersonaState(savedPersona);
    }
  }, []);

  const setPersona = (newPersona: Persona) => {
    setPersonaState(newPersona);
    localStorage.setItem('persona', newPersona);
  };

  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
}
