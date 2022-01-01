import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';
import { Button } from '@components/UI';
import Image from 'next/image';

function HomePage() {
  return (
    <DefaultLayout title="Home">
      <Card>
        <section className="card-image" />
        <section className="footer">
          <NoButton>&times;</NoButton>
          <YesButton>&#10003;</YesButton>
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
    border: solid 1px ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
  }

  .footer {
    display: flex;
    gap: 0.5rem;
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
