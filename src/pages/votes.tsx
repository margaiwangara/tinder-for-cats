import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';

function Votes() {
  return (
    <DefaultLayout title="Votes">
      <TabWrapper>
        <Tab active>Liked</Tab>
        <Tab>Disliked</Tab>
      </TabWrapper>
      <GridView>
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <GridItem key={index} />
          ))}
      </GridView>
    </DefaultLayout>
  );
}

const TabWrapper = styled.section`
  width: 100%;
  display: flex;
`;

const Tab = styled.button<{ active?: boolean }>`
  flex: 1;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
  border: solid 1px
    ${({ active, theme }) => (active ? 'transparent' : theme.colors.primary)};
  min-width: 100px;
  padding: 0.75rem 1rem;
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.primary};
  font-size: 0.9rem;

  &:hover {
    opacity: 0.8;
  }
`;

const GridView = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 200px;
  grid-gap: 1rem;
`;

const GridItem = styled.section`
  border: solid 1px ${({ theme }) => theme.colors.primary};
`;
export default Votes;
