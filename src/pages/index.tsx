import styled from 'styled-components';

function HomePage() {
  return (
    <section>
      <Heading>Loolz!</Heading>
    </section>
  );
}

const Heading = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default HomePage;
