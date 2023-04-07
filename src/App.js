import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Router from './Components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Router />
    </BrowserRouter>
  );
}

export default App;
