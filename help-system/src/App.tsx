import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles'

import Rotas from './routes'
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
