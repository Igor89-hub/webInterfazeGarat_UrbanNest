import { Route, Routes } from "react-router";
import { HomeLinkMainPage } from "./components/homeLinkMainPage";
import { HouseResume } from "./components/HouseResume";
import { SeeLocationMap } from "./components/SeeLocationMap";
import './css/HomeLinkMainPage.css';
import './css/HouseResume.css';

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<HomeLinkMainPage/>}/>
            <Route path="/HouseResume" element={<HouseResume/>}/>
            <Route path="/SeeLocationMap" element={<SeeLocationMap/>}/>
        </Routes>
    );
}