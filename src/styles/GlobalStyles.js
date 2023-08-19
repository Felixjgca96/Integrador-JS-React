import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}


    
body {
  background: #090909;
  font-family: 'Montserrat', sans-serif;
  color: white;

}
a {
  text-decoration: none;
  color: white;
}

li {
list-style: none;
}

`;
