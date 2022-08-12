// import logo from './logo.svg';
import './App.css';
import First from './components/First/First';
import Navigation from './components/Navigation/Navigation';
import Second from './components/Second/Second';
import Third from './components/Third/Third';
import Fourth from './components/Fourth/Fourth';
import Form from './components/Form/Form';
import Fifth from './components/Fifth/Fifth';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
