import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';
import { Button, Image } from '@components/UI';
import { IoHeartOutline, IoHeart, IoCheckmark, IoClose } from 'react-icons/io5';
import { useRequests } from '@hooks/useRequests';
import Loader from '@components/Loader';
import { useState, useEffect } from 'react';
import { useVotesContext } from '@context/VotesContext';
import { __DATA_COUNT__, __VOTES_LOCAL_STORAGE__ } from '@src/constants';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { Notyf } from 'notyf';

type CatProps = {
  id: string;
  url: string;
  height?: number;
  width?: number;
};

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [notyf, setNotyf] = useState<Notyf>();
  const [cats, setCats] = useState<CatProps[]>([]);
  const { setVotes, votes } = useVotesContext();
  const [, setValue] = useLocalStorage(__VOTES_LOCAL_STORAGE__);

  const { fetchCats } = useRequests();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setIsLoading(true);
      setNotyf(new Notyf());
    }

    fetchCats()
      .then((data) => {
        if (isMounted) {
          setIsLoading(false);
          setCats(data as CatProps[]);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setIsLoading(false);
          notyf.error(error.message);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleVote = (status: 'likes' | 'dislikes') => {
    const cat = cats?.[currentIndex];
    if (!cat) {
      return;
    }

    const vote = `${cat.id};${cat.url}`;

    const newVotes = {
      ...votes,
      [status]: votes?.[status].includes(vote)
        ? [...votes?.[status]]
        : [...votes?.[status], vote],
    };

    setValue(newVotes);
    setVotes(newVotes);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <DefaultLayout title="Home">
      {isLoading && <Loader />}

      <Card>
        <section className="card-image">
          <Image
            src={
              !isLoading && cats.length
                ? cats?.[currentIndex]?.url
                : '/images/placeholder.jpg'
            }
            alt="cat"
          />
        </section>
        <section className="footer">
          <NoButton onClick={() => handleVote('dislikes')}>
            <IoClose />
          </NoButton>
          <YesButton onClick={() => handleVote('likes')}>
            <IoCheckmark />
          </YesButton>
        </section>
      </Card>
    </DefaultLayout>
  );
}

const Card = styled.section`
  width: 300px;
  margin: 1rem auto;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;

  .card-image {
    width: 100%;
    height: 350px;
  }

  button.fav-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    box-shadow: 0px 0px 2.5px 0px rgba(0, 0, 0, 0.75);
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 100;

    &:hover {
      opacity: 0.8;
    }
  }

  .footer {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const YesButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const NoButton = styled(YesButton)`
  background-color: ${({ theme }) => theme.colors.danger};
`;

export default HomePage;
