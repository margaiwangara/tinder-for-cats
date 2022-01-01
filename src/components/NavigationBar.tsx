import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

function NavigationBar() {
  const router = useRouter();

  const activeLink = (path: string) => {
    if (router.pathname === `/${path}`) {
      return ' active';
    }
    return '';
  };

  console.log('router', router.pathname);

  return (
    <NavBarWrapper>
      <Link href="/">
        <a className="navbar-brand">Tinder For Cats</a>
      </Link>
      <section className="nav-links">
        <Link href="/votes">
          <a className={`nav-link${activeLink('votes')}`}>Votes</a>
        </Link>
        <Link href="/favorites">
          <a className={`nav-link${activeLink('favorites')}`}>Favorites</a>
        </Link>
        {/* <Link href="/breeds">
          <a className={`nav-link${activeLink('breeds')}`}>Breeds</a>
        </Link>
        <Link href="/search">
          <a className={`nav-link${activeLink('search')}`}>Search</a>
        </Link> */}
      </section>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a.navbar-brand {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-around;
  }

  a.nav-link {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;

    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default NavigationBar;
