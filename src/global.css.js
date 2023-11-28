import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  background-color: #333;
  padding: 10px 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

nav li {
  color: #fff;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s;
}

a:hover {
  color: #ffc107;
}
`;

export default GlobalStyles;