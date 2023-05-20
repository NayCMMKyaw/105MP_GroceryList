import React from "react";
import Nav from "../components/Nav";
import Content from "../components/Content";

export default function Landing(){
    return(
        <div>
            <Nav />
            <Content />
            {/* if logged in call entry component */}
            
        </div>
    )
}