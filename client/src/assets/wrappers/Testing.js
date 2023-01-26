import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    margin: 0 auto;
    height: var(--nav-height);
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    align-items: center;
    flex: 3;
  }
  h1 {
    font-weight: 700;

    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-500);
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      flex: 2 1;
      gap: 3rem;
    }
    .main-img {
      display: block;
      width: 55%;
      height: 50%;
    }
    .info {
      min-width: 33%;
    }
  }
`;

export default Wrapper;
