import { createContext } from "react";
import appData from "../db/data.json";
import DocumentMeta from 'react-document-meta';

export const AppContext = createContext(appData);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppContext.Provider value={appData}>
      <DocumentMeta {...appData.meta}>{children}</DocumentMeta>
    </AppContext.Provider>
  );
};
