import { createContext, useContext } from 'react';
import appData from '../db/data.json';

export const AppContext = createContext(appData);

interface AppProviderProps {
 children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <AppContext.Provider value={appData}>{children}</AppContext.Provider>;
};
