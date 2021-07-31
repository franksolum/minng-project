
import Down from "../components/downcontainer/Down";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
//import ProductCarousel from "../components/productCarousel/ProductCarousel";
import Search from "../components/search/Search";
import Service from "../components/services/Service";
import "./Home.css";


const Home = () => {
    return (
        <div className= "home">
            <Navbar />
            <Search />
            <Service />
            <Down />
            <Footer />
        

        </div>
    )
}

export default Home;
