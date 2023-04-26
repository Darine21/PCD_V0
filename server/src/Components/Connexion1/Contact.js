import React,{useRef} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Contact.css";

function App() {
  const contactRef = useRef(null);
  const handleClick = () => {
    if (contactRef.current) {
    contactRef.current.scrollIntoView({ behavior: "smooth" });}
  };
  return (
   
    
    <div className="container" id="contact">
      <Link to={"/Signin"}>
      <button className="button1">Sign in </button>
      </Link>
     
      <Link to={"/Signup"}>
      <button className="button1" onClick={handleClick}>Sign up </button>
      </Link>
     </div>
     
  );
 
}
export default App;
