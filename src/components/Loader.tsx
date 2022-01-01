import styled from 'styled-components';
import { ImSpinner4 } from 'react-icons/im';

function Loader() {
  return (
    <LoaderWrapper>
      <ImSpinner4 className="spinner" size={50} />
    </LoaderWrapper>
  );
}

const LoaderWrapper = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  .spinner {
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

export default Loader;
