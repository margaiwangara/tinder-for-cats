import { useFavoritesContext } from '@context/FavoritesContext';
import DefaultLayout from '@containers/DefaultLayout';
import styled from 'styled-components';

function Favorites() {
  const { favorites } = useFavoritesContext();

  console.log('favorites', favorites);

  return (
    <DefaultLayout title="Favorites">
      <h2>Favorites</h2>
    </DefaultLayout>
  );
}

export default Favorites;
