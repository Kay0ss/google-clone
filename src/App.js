import react from "react";
import dots from "./Images/dots-menu.svg";
import mic from "./Images/Google_mic.png";
import hero from "./Images/google-logo.png";
// import search from "./Images/search.svg";
import { AiOutlineSearch } from 'react-icons/ai';
import "./App.css";

function App() {
  return (
    <div className="landing-center">
      <img className="hero" src={hero} alt="Google Logo"></img>
      <div className="searchbar">
          <div className="mic-box">
            <h3 className="glass" ><AiOutlineSearch /></h3>
          </div>
        <input className="search" name="search"></input>
        <div className="mic-box">
          <img className="mic" src={mic} alt="search logo"></img>
        </div>
      </div>
      <div className="button-container">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </div>
  );
}

export default App;
