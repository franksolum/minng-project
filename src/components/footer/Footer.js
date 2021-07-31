import app from "./appimage/app.png"
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="app">
                <img src={app} alt="app-icon"/>
            </div>
            <div className="terms">
                <span>
                Privacy & policy
                </span>
                <span>
                 Terms of Service
                </span>
            </div>
            <div className="copyright">
               <p>2021 min.ng. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
