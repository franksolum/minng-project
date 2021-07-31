//import {Link} from "react-router-dom";
import { useState } from "react";
import { AccountCircle, ArrowDropDown, Dehaze, Notifications, ShoppingCartOutlined, ToggleOffOutlined, } from "@material-ui/icons";
import "./Narbar.css";

const Navbar = () => { 

    const[showLinks, setShowLinks] = useState(true)

    return(
        <div className="navbar">
            <div className="container">
                <div className="leftNavbar">
                
                     Min.Ng

                </div>
                
                <div className="rightNavbar"> 
                 <span className="navMenu" id={showLinks ? "hidden" :  " "}>Home</span>
                 <span className="navMenu" id={showLinks ? "hidden" :  " "}>Services</span>
                 <span className="navMenu" id={showLinks ? "hidden" :  " "}>Help</span>
                 <span className="navMenu" >ENG<ArrowDropDown /> </span>
                 <span><ShoppingCartOutlined /></span>
                 <span className="navMenu"><Notifications /> </span>
                 <span><AccountCircle/> </span>
                 <span className="navMenu" >Helen 0.<ArrowDropDown /></span>
            
                </div>
               

                
            </div>
        </div>
    );
}

export default Navbar;
