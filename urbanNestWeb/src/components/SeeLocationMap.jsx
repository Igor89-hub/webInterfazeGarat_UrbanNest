import { useLocation } from "react-router";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
export function SeeLocationMap() {

    const location = useLocation();
    const navigate = useNavigate();

    const { ciudad, calle, compra, metros, hab, banos, houseData } = location.state || {};
    const mapRef = useRef(null);

    const handleCloseButton = () => {
        navigate("/HouseResume");
    }

    const mapCenter = { lat: 37.4220656, lng: -122.0840897 };

    return (
        <div className="sm-mainLayout">
            <header className="sm-mainLayout-headerTitle">
                <div className="sm-mainLayout-headerTitle-cityInfo">
                    <p className="sm-mainLayout-headerTitle-cityInfoText">{ciudad && calle && `${ciudad} - ${calle}`}</p>
                    <span className="sm-mainLayout-headerTitle-cityInfoText-details">
                        {compra && metros && hab && banos && `${compra}€ | ${metros} m² | ${hab} hab | ${banos} baños`}
                    </span>
                </div>
                <div className="sm-mainLayout-headerTitle-contactUs">
                    <button type="button" name="contaktatuForm" className="sm-mainLayout-headerTitle-contactUs-button">Contactanos</button>
                    <div className="sm-mainLayout-headerTitle-close">
                        <button type="button" name="closeBotoia" className="sm-mainLayout-headerTitle-closeButton" onClick={handleCloseButton}>
                            <IoClose size={45} />
                        </button>
                    </div>
                </div>
            </header>
            <div className="sm-mainLayout-googleMap">
                <gmp-map center={mapCenter} zoom={10} map-id="DEMO_MAP_ID" style={{ height: '400%' }}></gmp-map>
            </div>
        </div>
    )
}