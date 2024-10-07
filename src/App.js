import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode applied', 'success');
      document.title = 'TEXT UTIL - DARK';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode applied', 'success');
      document.title = 'TEXT UTIL - LIGHT';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TEXTUTILS" aboutText="about us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextArea heading="Enter the text below" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
