import styled from 'styled-components';

export const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  outline: none;
  min-width: 100px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
