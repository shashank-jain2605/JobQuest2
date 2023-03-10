import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  height: 100vh;
  margin: auto 0;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }

  @media (min-width: 500px) {
    img {
      max-width: 300;
      display: block;
      margin-bottom: 2rem;
    }
  }
`;

export default Wrapper;
