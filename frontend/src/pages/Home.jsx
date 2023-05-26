import React, { useContext } from "react";
import Nav from "../components/Nav";
import Content from "../components/Content";
import { GlobalContext } from "../context/GlobalContext";
import Entry from '../components/Entry';
import { Box } from "@mui/material";

export default function Home(){
const {user} = useContext(GlobalContext);

    return(
        <div>
            <Nav />
            {user ? (
                <Box>
                    <Entry />
                </Box>
            ) : (
                <Box>
                    <Content />
                </Box>
            )}
            
            {/* if logged in call entry component */}
            
        </div>
    )
}