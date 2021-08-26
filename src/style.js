import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, sans-serif;
    font-size: 10px;
    scroll-behavior: smooth;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;
export const Wrapper = styled.div`
  
`;

export const Header = styled.div`
  height: 8.5rem;
  position: sticky;
  padding: 0 2rem;
  top: 0;
  background-color: #fff;
  box-shadow: 0.5px 0.5px 5px 1px gray;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 6rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  height: calc(90vh - 85px);
`;