import { Route, Routes } from "react-router";
import { HomeLinkMainPage } from "./components/homeLinkMainPage";
import { HouseResume } from "./components/HouseResume";
import { SeeLocationMap } from "./components/SeeLocationMap";
import { FullExtendedHouseInfo } from "./components/FullExtendedHouseInfo";
import { PutYourAnnouncement } from "./components/PutYourAnnouncement";
import './css/HomeLinkMainPage.css';
import './css/HouseResume.css';
import './css/SeeLocationMap.css';
import './css/FullExtendedHouseInfo.css';
import './css/PutYourAnnouncement.css';

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<HomeLinkMainPage/>}/>
            <Route path="/HouseResume" element={<HouseResume/>}/>
            <Route path="/SeeLocationMap" element={<SeeLocationMap/>}/>
            <Route path="/FullExtendedHouseInfo" element={<FullExtendedHouseInfo/>}/>
            <Route path="/PutYourAnnouncement" element={<PutYourAnnouncement/>}/>
        </Routes>
    );
}