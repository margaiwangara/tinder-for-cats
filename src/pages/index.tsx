import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';
import { Button } from '@components/UI';
import Image from 'next/image';
import { IoHeartOutline, IoHeart, IoCheckmark, IoClose } from 'react-icons/io5';
import { useQuery } from 'react-query';
import { useRequests } from '@hooks/useRequests';
import Loader from '@components/Loader';
import { useState, useEffect } from 'react';

type CatProps = {
  id: string;
  url: string;
  height?: number;
  width?: number;
};

function HomePage() {
  const [activeCat, setActiveCat] = useState<CatProps | null>(null);
  const [count, setCount] = useState(0);
  const [changeLoading, setChangeLoading] = useState(false);

  const { fetchCats } = useRequests();

  const { isLoading, data, error } = useQuery('cats', fetchCats);

  const cats = (data as CatProps[]) || [];

  useEffect(() => {
    if (!isLoading && !error) {
      setActiveCat(cats[count]);
      setChangeLoading(false);
    }
  }, [isLoading, error, JSON.stringify(data), count]);

  const handleClick = () => {
    setChangeLoading(true);
    const condition = count === cats.length - 1;
    setCount(condition ? 0 : count + 1);
  };

  return (
    <DefaultLayout title="Home">
      {isLoading && <Loader />}

      <Card>
        <section className="card-image">
          {isLoading || !activeCat?.url ? (
            <p>Loading...</p>
          ) : (
            <Image layout="fill" src={activeCat?.url} alt="cat" priority />
          )}
          <button className="fav-button">
            <IoHeartOutline />
          </button>
        </section>
        <section className="footer">
          <NoButton onClick={handleClick} disabled={changeLoading}>
            <IoClose />
          </NoButton>
          <YesButton onClick={handleClick} disabled={changeLoading}>
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
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;

  .card-image {
    width: 100%;
    flex: 1;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .image-box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
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
