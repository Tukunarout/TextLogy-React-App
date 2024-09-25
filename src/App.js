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
  const [textcolorSwitch, setswitch] = useState("Enable Dark Mode")

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

  //function for mode change dark/light
  const toggleMode = ()=>{
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => (radio.checked = false)); // Uncheck all radio buttons

    if (mode=== 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#494848';
      showAlert("Dark mode enabled", "success")
      setswitch("Enable Light Mode")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
      setswitch("Enable Dark Mode")
    }
  }

  const switchColor = (event)=>{
    const selectedValue = event.target.value;
    console.log(selectedValue);
    
    switch (selectedValue) {
      case 'option1':
        setMode('primary');
        document.body.style.backgroundColor = '#06429b'
        showAlert("Blue theme enabled", "success")
        break;
      case 'option2':
        setMode('success');
        document.body.style.backgroundColor = 'rgb(35 83 60)'
        showAlert("Green theme enabled", "success")
        break;
      case 'option3':
        setMode('warning');
        document.body.style.backgroundColor = '#785a00'
        showAlert("Yellow theme enabled", "success")
        break;
      default:
        setMode('');
    }
  }
  return (
    <>



    <Navbar title="TextLogy" mode={mode} toggleMode={toggleMode} textcolorSwitch={textcolorSwitch} switchColor={switchColor}/>
    <Alert alert= {alert}/>
    <div className="container my-3"><TextForm heading="Enter you text to analyze" showAlert={showAlert} mode={mode}/></div>
     
      <div><Footer mode={mode}/></div>
      
      
    </>
  );
}

export default App;
