import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';
import { Button } from '@components/UI';
import Image from 'next/image';
import { IoHeartOutline, IoHeart, IoCheckmark, IoClose } from 'react-icons/io5';

function HomePage() {
  return (
    <DefaultLayout title="Home">
      <Card>
        <section className="card-image">
          <Image
            layout="fill"
            alt="image of a cat"
            src="https://source.unsplash.com/500x500?cats"
          />
          <button className="fav-button">
            <IoHeartOutline />
          </button>
        </section>
        <section className="footer">
          <NoButton>
            <IoClose />
          </NoButton>
          <YesButton>
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
    /* border: solid 1px ${({ theme }) => theme.colors.primary}; */
    /* background-color: ${({ theme }) => theme.colors.white}; */
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
`;

const NoButton = styled(YesButton)`
  background-color: ${({ theme }) => theme.colors.danger};
`;

export default HomePage;
