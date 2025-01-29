import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" />
      <div className='container my-3'>
          <TextForm heading = "Enter the text to Convert any case to UpperCase"/>
          <About />
      </div>
    </>
  );
}

export default App;
