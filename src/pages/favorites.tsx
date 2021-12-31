import { useFavoritesContext } from '@context/FavoritesContext';
import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';

function Favorites() {
  const { favorites } = useFavoritesContext();

  console.log('favorites', favorites);

  return (
    <DefaultLayout title="Favorites">
      <TabWrapper>
        <Tab active>Liked</Tab>
        <Tab>Disliked</Tab>
      </TabWrapper>
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
`;

export default Favorites;
