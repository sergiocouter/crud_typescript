/* eslint-disable react/prop-types */
import { createContext, useState, useCallback, useContext } from "react";

interface IDrawerOprion {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData{
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOprion[];
    setDrawerOptions: (newDrawerOptions: IDrawerOprion[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () =>{
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<{children: React.ReactNode}> = ({ children }) =>{

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOprion[]>([]);

  const toggleDrawerOpen = useCallback( () => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  },[]);

  const handleSetDrawerOptions = useCallback( (newDrawerOptions: IDrawerOprion[]) => {
    setDrawerOptions(newDrawerOptions);
  },[]);

  return(
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};