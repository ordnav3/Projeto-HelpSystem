import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles'

import Rotas from './routes'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
