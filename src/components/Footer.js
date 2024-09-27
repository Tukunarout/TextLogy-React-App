import React from "react";

const Footer = (props) => {
  return (
    <div className="footer">
    <footer
      className="bg-dark text-white text-center text-lg-start"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%"
      }}
    >
      <div className={`text-center p-3 bg-${props.mode}`}style={{color: props.mode === 'dark' || props.mode === 'primary' 
      || props.mode === 'success' || props.mode === 'warning' ? 'white' : 'black',border:"1px solid black"
        }}>
        © 2024 TextLogy
      </div>
    </footer>
  </div>
  );
};

export default Footer;
