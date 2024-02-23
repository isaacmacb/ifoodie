import './App.css'
import About from './components/About';
import Home from './components/Home';
import Work from './components/Work';
import Testimonial from './components/Testimonial'
import Footer from './components/Footer';
import Contat from './components/Contat';

function App() {
  return (
    <div className='App'>
        <Home/>
        <About/>
        <Work/>
        <Testimonial/>
        <Contat/>
        <Footer/>
    </div>
  )
}

export default App;
