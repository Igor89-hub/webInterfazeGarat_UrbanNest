import { useEffect, useState } from "react";
import { ImageCarrusel } from "./ImageCarrusel";
import { useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import "../css/Carrusel.css";
import { TimelineMax } from "gsap/gsap-core";

export function HomeLinkMainPage() {

    useEffect(() => {
        const split = new SplitText(".hl-mainLayout-title", {
            type:"lines,words"
        });

        gsap.from(split.words, {
            duration: 1,
            y: 40,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out"
        });

        return () => {
            split.revert();
        };

    }, []);

    const [isDivClicked, setDivClicked] = useState('alquiler') //Defektuz egongo da;

    return (
        <div className="hl-mainLayout">
            <header className="hl-mainHeaderTitle">
                <img className="hl-mainHeader-logo" alt="HomeLink Logo" src="/images/homeLinkLogo.png" />
                <span className="hl-mainHeader-welcomeText">¡La busqueda de lo nuevo comieza aqui!</span>
            </header>
            <div className="hl-mainLayout-carrusel">
                <ImageCarrusel />
                <div className="hl-mainLayout-dividerTitle">
                    <p className="hl-mainLayout-title">Gran mercado inmobiliario de HomeLink</p>
                </div>
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