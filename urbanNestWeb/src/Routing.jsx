import { Route, Routes } from "react-router";
import { HomeLinkMainPage } from "./components/HomeLinkMainPage";
import './css/HomeLinkMainPage.css';

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<HomeLinkMainPage/>}/>
        </Routes>
    );
}