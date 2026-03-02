"use client"

import React, { createContext, useContext, useState } from 'react';
import appData from "@/public/data.json"

export interface IDataContextProps {
  data: any;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

interface IDataProviderProps {
 children: React.ReactNode
}

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};


export const DataContext = createContext<IDataContextProps | undefined>(undefined);

export const DataProvider: React.FC<IDataProviderProps> = ({ children }: IDataProviderProps) => {
  const [data, setData] = useState<any>(appData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};