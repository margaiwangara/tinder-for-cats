import styled from 'styled-components';
import HeadBoy from '@components/HeadBoy';
import NavigationBar from '@components/NavigationBar';

type Props = {
  title?: string;
  children: React.ReactNode;
};

function DefaultLayout({ title, children }: Props) {
  return (
    <Wrapper>
      <HeadBoy title={title} />
      <section className="wrapper-inner">
        <NavigationBar />
        {children}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;

  .wrapper-inner {
    width: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 80%;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100%;
      padding: 0;
    }
  }
`;

export default DefaultLayout;
