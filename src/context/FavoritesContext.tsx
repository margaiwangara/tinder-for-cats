import { useContext, createContext, useState } from 'react';

type FavoritesContextType = {
  favorites: FavoritesType;
  setFavorites: (favorites: FavoritesType) => void;
};

type FavoritesType = {
  likes: string[];
  dislikes: string[];
};

export const FavoritesContext = createContext<FavoritesContextType>(null);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({
    likes: [],
    dislikes: [],
  });

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);
export default FavoritesProvider;
