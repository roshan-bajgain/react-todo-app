import './App.css';
import Header from './components/Header';
import Todos from './components/Todos'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header searchBar={true}/>
      <Todos />
      <Footer />
    </>
  );
}

export default App;
