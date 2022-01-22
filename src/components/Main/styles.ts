import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;

  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  background-color: #06092b;
`;

export const Logo = styled.img`
  width: 25rem;

  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
