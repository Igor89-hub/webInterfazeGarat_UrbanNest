import { Route, Routes } from "react-router";
import { HomeLinkMainPage } from "./components/homeLinkMainPage";
import './css/HomeLinkMainPage.css';

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<HomeLinkMainPage/>}/>
        </Routes>
    );
}