import { useContext, createContext, useState } from 'react';

export const VotesContext = createContext<VotesContextType>(null);

export type VotesContextType = {
  votes: VotesType;
  setVotes: (votes: VotesType) => void;
};

export type VotesType = {
  likes: string[];
  dislikes: string[];
};

const VotesProvider = ({ children }) => {
  const [votes, setVotes] = useState({
    likes: [],
    dislikes: [],
  });

  return (
    <VotesContext.Provider value={{ votes, setVotes }}>
      {children}
    </VotesContext.Provider>
  );
};

export const useVotesContext = () => useContext(VotesContext);
export default VotesProvider;
