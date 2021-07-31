import "./Service.css";
import bag from  "./images/bag.jpeg"
import earpod from  "./images/earpod.jpeg"
import mens from  "./images/mens.jpeg"
import kitchen from  "./images/kitchen.jpeg"

const Service = () => {
    return (
    <>
        <div className="serviceContainer">
            <div className="title">
               <h1>Our services</h1>
            </div>
            <div  className= "service-items">
                <img src= {bag} alt="bags" />
                <p>Get your bags</p>
            </div>
            <div  className= "service-items">
                <img src= {kitchen} alt="kitchen" />
                <p>Kitchen utensil</p>
            </div>
            <div  className= "service-items">
                <img src= {mens} alt="mens" />
                <p>Men's Fashion</p>
            </div>
            <div  className= "service-items">
                <img src= {earpod} alt="earpod" />
                <p>Gadget</p>
            </div>
        </div>
        <div className="newsletter">
            <button className="news">Join our newsletter</button>
            <input type="text" placeholder="Type your email here" />
            <button className="join">Join now</button>
        </div>

   </>
    );
}

export default Service;
