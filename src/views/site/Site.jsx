import React from "react";
import TopBar from "../../components/TopBar";
import CrefonoSVGIcon from "../../components/svgsIcons/CrefonoSVGIcon";
import Footer from "./components/Footer";
import VideoAndText from "./components/VideoAndText";

const Site = () => {
    return (
        <TopBar>
            <VideoAndText title={'História'} description={'bla bla'}/>
            <CrefonoSVGIcon size="20rem"/>
            <Footer/>
        </TopBar>
    );
}

export default Site;
