import React from "react";
import Header from "./Header";
import Main from "./Main";
import Page from "./Page";
import Footer from "./Footer"
import './Home.css'
const Home = () => {
    return(
        <div className="home">
            <Header/>
            <Main/>
            <Page/>
            <Footer/>
        </div>
    );
}
export default Home;