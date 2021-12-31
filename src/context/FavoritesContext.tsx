import { useContext, createContext, useState } from 'react';

type FavoritesContextType = {
  favorites: string[];
  setFavorites: (favorites: string[]) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>(null);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);
export default FavoritesProvider;
