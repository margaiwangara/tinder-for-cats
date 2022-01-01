import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';
import { Button, Image } from '@components/UI';
import { useVotesContext } from '@context/VotesContext';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { __VOTES_LOCAL_STORAGE__ } from '@src/constants';

function Votes() {
  const [activeTab, setActiveTab] = useState<'likes' | 'dislikes'>('likes');
  const [storedValue] = useLocalStorage(__VOTES_LOCAL_STORAGE__);
  const { votes, setVotes } = useVotesContext();

  useEffect(() => {
    let isMounted = true;

    const storedVotes = storedValue ? storedValue : votes;
    if (isMounted) {
      setVotes(storedVotes);
    }

    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(storedValue)]);

  return (
    <DefaultLayout title="Votes">
      <TabWrapper>
        <Tab
          active={activeTab === 'likes'}
          onClick={() => setActiveTab('likes')}
        >
          Liked
        </Tab>
        <Tab
          active={activeTab === 'dislikes'}
          onClick={() => setActiveTab('dislikes')}
        >
          Disliked
        </Tab>
      </TabWrapper>
      <GridView>
        {votes?.[activeTab].map((value) => {
          const split = value?.split(';');
          const id = split?.[0];
          const url = split?.[1];
          return (
            <GridItem key={id}>
              <Image src={url} alt="cat" />
            </GridItem>
          );
        })}
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
  border: solid 1px transparent;
`;
export default Votes;
