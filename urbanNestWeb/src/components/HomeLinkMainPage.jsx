import { useEffect, useState } from "react";
import { ImageCarrusel } from "./ImageCarrusel";
import { TextField, Autocomplete } from "@mui/material";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import topCitiesSpain from "../js/ciudades.js";
import "../css/Carrusel.css";
import { Controller, useForm } from "react-hook-form";
import { FaHouseSignal } from "react-icons/fa6";
import { TbHomeSearch } from "react-icons/tb";
import { FaBuildingShield } from "react-icons/fa6";
import { useNavigate } from "react-router";

export function HomeLinkMainPage() {

    const navigate = useNavigate();

        const handleClikResume = () => {
        navigate('/HouseResume');
    }

    useEffect(() => {
        const split = new SplitText(".hl-mainLayout-title", {
            type: "lines,words"
        });

        gsap.from(split.words, {
            duration: 1,
            y: 40,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out"
        });

        let split2 = SplitText.create(".hl-mainLayout-selectorAlquiler");

        let t1 = gsap.timeline();

        t1.fromTo('.hl-mainLayout-formAutoComplete',
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
                y: 0,
                stagger: 0.15
            }
        )

        return () => {
            split.revert();
        };

    }, []);

    const [isDivClicked, setDivClicked] = useState('alquiler') //Defektuz egongo da;

    const { control, handleSubmit } = useForm({
        defaultValues: {
            buscarCiudad: null
        }
    });

    const cityNames = topCitiesSpain.map(city => city.ciudad);

    
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
                <div className="h1-mainLayout-autoComplete">
                    <Controller
                        name="buscarCiudad"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "¿Donde quieres empezar tu nueva vida?"
                        }}
                        render={({ field }) => (
                            <Autocomplete
                                freeSolo
                                disablePortal
                                options={cityNames || []}
                                value={field.value}
                                onChange={(_, newValue) => field.onChange(typeof newValue === 'string' ? newValue : newValue || "")}
                                onInputChange={(_, newInputVlue) => field.onChange(newInputVlue)}
                                sx={{ width: 600 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Ciudad"
                                        className="hl-mainLayout-formAutoComplete"
                                        sx={{
                                            '& .MuiInputBase-input': { color: 'white' },
                                            '& .MuiInputLabel-root': { color: 'white' },
                                            '& .MuiAutocomplete-option': { backgroundColor: '#000' },
                                            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white', borderRadius: '40px' },
                                            width: 600,
                                        }}
                                    />
                                )}
                            >

                            </Autocomplete>
                        )}
                    >
                    </Controller>
                    <button className="hl-mainLayout-buttonSearch" onClick={handleClikResume}>Bilatu</button>
                </div>
            </div>
            <div className="hl-mainLayout-BestNewBuild">
                <header className="hl-mainLayout-BestNewBuild-header">
                    <h2 className="hl-mainLayout-BestNewBuild-headerTitle">Lo más destacado de obra nueva</h2>
                    <span className="hl-mainLayout-BestNewBuild-headerDescription">Descubre todo lo que puedes encontrar en HomeLink</span>
                </header>
            </div>
            <div className="hl-mainLayout-BestNewBuild-showBox">
                <div className="hl-mainLayout-BestNewBuild-showCard">
                    <img src="/images/bestNewBuild_images/chaletDonos.png" alt="primeraFoto" className="hl-mainLayout-BestNewBuild-img" />
                    <div className="hl-mainLayout-BestNewBuild-container">
                        <h3 className="hl-mainLayout-BestNewBuild-containerTitle">Chalet en Donosti, Kañueta Bidea</h3>
                        <p className="hl-mainLayout-BestNewBuild-containerText">Descripcion corta de la casa</p>
                    </div>
                </div>
                <div className="hl-mainLayout-BestNewBuild-showCard">
                    <img src="/images/bestNewBuild_images/aticoMadrid.png" alt="segundaFoto" className="hl-mainLayout-BestNewBuild-img" />
                    <div className="hl-mainLayout-BestNewBuild-container">
                        <h3 className="hl-mainLayout-BestNewBuild-containerTitle">Ático en Madrid, Calle de las Aguas</h3>
                        <p className="hl-mainLayout-BestNewBuild-containerText">Descripcion corta de la casa</p>
                    </div>
                </div>
                <div className="hl-mainLayout-BestNewBuild-showCard">
                    <img src="/images/bestNewBuild_images/adosadoBarcelona.png" alt="primeraFoto" className="hl-mainLayout-BestNewBuild-img" />
                    <div className="hl-mainLayout-BestNewBuild-container">
                        <h3 className="hl-mainLayout-BestNewBuild-containerTitle">Adosado en Barcelona, Calle de Jaume Càncer</h3>
                        <p className="hl-mainLayout-BestNewBuild-containerText">Descripcion corta de la casa</p>
                    </div>
                </div>
            </div>
            <div className="hl-mainLayout-whyHomeLinkHeader">
                <header className="hl-mainLayout-whyHomeLinkHeaderTitle">
                    <h2 className="hl-mainLayout-whyHomeLinkTitle">¿Porque escoger <span className="hl-mainLayout-whyHomeLinkTitle-home">Home</span><span className="hl-mainLayout-whyHomeLinkTitle-Link">Link</span>?</h2>
                </header>
            </div>
            <div className="hl-mainLayout-whyHomeLinkBody-box">
                <div className="hl-mainLayout-whyHomeLinkBody-case">
                    <FaHouseSignal size={80} />
                    <div className="hl-mainLayout-whyHomeLinkBody-caseContainer">
                        <h3 className="hl-mainLayout-whyHomeLinkBody-caseContainerTitle">LA MAYOR OFERTA DE INMUEBLES</h3>
                        <p className="hl-mainLayout-whyHomeLinkBody-caseContainerText">Explora miles de propiedades en alquiler y venta. Nuestra amplia base de datos se actualiza constantemente para que encuentres exactamente el hogar que buscas.</p>
                    </div>
                </div>
                <div className="hl-mainLayout-whyHomeLinkBody-case">
                    <TbHomeSearch size={80} color="#38A3A5" />
                    <div className="hl-mainLayout-whyHomeLinkBody-caseContainer">
                        <h3 className="hl-mainLayout-whyHomeLinkBody-caseContainerTitle">BÚSQUEDA FÁCIL</h3>
                        <p className="hl-mainLayout-whyHomeLinkBody-caseContainerText">Usa nuestros filtros avanzados para encontrar tu hogar perfecto en minutos. Busca por precio, ubicación, número de habitaciones y mucho más. ¡Nunca fue tan sencillo!</p>
                    </div>
                </div>
                <div className="hl-mainLayout-whyHomeLinkBody-case">
                    <FaBuildingShield size={80} color="#EE6C4D" />
                    <div className="hl-mainLayout-whyHomeLinkBody-caseContainer">
                        <h3 className="hl-mainLayout-whyHomeLinkBody-caseContainerTitle">CONFIANZA Y ASESORAMIENTO EXPERTO</h3>
                        <p className="hl-mainLayout-whyHomeLinkBody-caseContainerText">Te conectamos con agentes verificados y te ofrecemos la información necesaria para tomar la mejor decisión. Tu tranquilidad es nuestra prioridad.</p>
                    </div>
                </div>
            </div>
            <footer className="hl-mainLayout-footer">
                <p className="hl-mainLayout-footerText">© 2025 MyWebsite. All rights reserved.</p>
            </footer>
        </div>
    )
}