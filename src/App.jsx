import React from "react";
import NewsFeed from "./components/NewsFeed.jsx";
import { ContainerStyled } from "./components/styled/Container.styled.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {
    return (
        <div>
            <NavBar />
            <ContainerStyled>
                <NewsFeed />
            </ContainerStyled>
        </div>
    );
}
