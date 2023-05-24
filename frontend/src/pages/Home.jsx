import React, { useContext } from "react";
import Nav from "../components/Nav";
import Content from "../components/Content";
import { GlobalContext } from "../context/GlobalContext";
import Entry from '../components/Entry';

export default function Home(){
const {user} = useContext(GlobalContext);

    return(
        <div>
            {/* {user ? (<Entry />)} */}
            <Nav />
            <Content />
            {/* if logged in call entry component */}
            
        </div>
    )
}