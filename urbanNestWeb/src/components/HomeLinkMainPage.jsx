import { useEffect, useState } from "react";
import { ImageCarrusel } from "./ImageCarrusel";
import "../css/Carrusel.css";

export function HomeLinkMainPage() {

    const [isDivClicked, setDivClicked] = useState('alquiler') //Defektuz egongo da;

    return (
        <div className="hl-mainLayout">
            <header className="hl-mainHeaderTitle">
                <img className="hl-mainHeader-logo" alt="HomeLink Logo" src="/images/homeLinkLogo.png" />
                <span className="hl-mainHeader-welcomeText">¡La busqueda de lo nuevo comieza aqui!</span>
            </header>
            <div className="hl-mainLayout-carrusel">
                <ImageCarrusel/>
                <div className="hl-mainLayout-selector">
                    <div className={`hl-mainLayout-selectorLeft ${isDivClicked == 'alquiler' ? 'active' : ''}`} onClick={() => setDivClicked('alquiler')}>
                        <p className="hl-mainLayout-selectorAlquiler">Alquiler</p>
                    </div>
                    <div className={`hl-mainLayout-selectorRight ${isDivClicked == 'compra' ? 'active' : ''}`} onClick={() => setDivClicked('compra')}>
                        <p className="hl-mainLayout-selectorcompra">Compra</p>
                    </div>
                </div>
                <div className="h1-mainLayout-autoComplete"></div>
            </div>
        </div>
    )
}