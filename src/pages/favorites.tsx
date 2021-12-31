import { useFavoritesContext } from '@context/FavoritesContext';

function Favorites() {
  const { favorites } = useFavoritesContext();

  console.log('favorites', favorites);

  return (
    <section>
      <h1>Favorites</h1>
    </section>
  );
}

export default Favorites;
