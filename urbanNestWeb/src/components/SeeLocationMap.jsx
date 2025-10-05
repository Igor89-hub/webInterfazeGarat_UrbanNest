import { useLocation } from "react-router";
import { useEffect, useRef } from "react";
export function SeeLocationMap() {

    const location = useLocation();

    const { ciudad, calle, houseData } = location.state || {};
    const mapRef = useRef(null);

    const mapCenter = { lat: 37.4220656, lng: -122.0840897 };

    return (
        <div className="sm-mainLayout">
            <header className="sm-mainLayout-headerTitle">
                <div className="sm-mainLayout-headerTitle-cityInfo">
                    <p className="sm-mainLayout-headerTitle-cityInfoText">{ciudad && calle && `${ciudad} - ${calle}`}</p>
                </div>
                <div className="sm-mainLayout-headerTitle-contactUs">
                    <button type="button" name="contaktatuForm" className="sm-mainLayout-headerTitle-contactUs-button">Contactanos</button>
                </div>
            </header>
            <div className="sm-mainLayout-googleMap">
                <gmp-map center={mapCenter} zoom={10} map-id="DEMO_MAP_ID" style={{ height: '400%' }}></gmp-map>
            </div>
        </div>
    )
}