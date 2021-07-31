import { InputAdornment } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import "./Search.css";
//import {Search} from "@material-ui/icons";

const Search = () => {
    return (
        <div className="searchContent">
            <div className="middleContent">
                <h1>Nigeria's Biggest B2B E-Commerce Platform</h1>
                <p>One stop site for connecting businesses through ecommerce</p>
            </div>
            <div className="searchContainer">
                <button className="sell">Sell on Min</button>
                <input className="form-control" type="text" placeholder ="Search by product name or category"/>
                <button className="search">Search</button>
            </div>
        </div>
    );
}

export default Search;
