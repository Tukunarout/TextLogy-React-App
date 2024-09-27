import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import Footer from "./components/Footer";

function App() {
  
  //using UseState
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
 

  //Function for alert
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  

  const switchColor = (event)=>{
    switch (event) {
      case 'primary':
        setMode('primary');
        document.body.style.backgroundColor = '#06429b'
        showAlert("Blue theme enabled", "success")
        break;
      case 'success':
        setMode('success');
        document.body.style.backgroundColor = 'rgb(35 83 60)'
        showAlert("Green theme enabled", "success")
        break;
      case 'warning':
        setMode('warning');
        document.body.style.backgroundColor = '#785a00'
        showAlert("Yellow theme enabled", "success")
        break;
        case 'light':
          setMode('light')
          document.body.style.backgroundColor = 'white';
          showAlert("Light theme enabled", "success")         
        break;
        case 'dark':
          setMode('dark')
          document.body.style.backgroundColor = '#494848';
          showAlert("Dark theme enabled", "success")          
        break;
      default:
        setMode('');
    }
  }
  return (
    <>



    <Navbar title="TextLogy" mode={mode}   switchColor={switchColor}/>
    <Alert alert= {alert}/>
    <div className="container my-3"><TextForm heading="Enter you text to analyze" showAlert={showAlert} mode={mode}/></div>
     
      <div><Footer mode={mode}/></div>
      
      
    </>
  );
}

export default App;
