import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';
import { Button } from '@components/UI';

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

const Tab = styled(Button)<{ active?: boolean }>`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : 'transparent'};
  border: solid 1px
    ${({ active, theme }) => (active ? 'transparent' : theme.colors.primary)};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.primary};
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
