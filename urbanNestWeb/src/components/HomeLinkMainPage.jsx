import { useEffect, useState } from "react";
import { ImageCarrusel } from "./ImageCarrusel";
import { TextField, Autocomplete } from "@mui/material";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import topCitiesSpain from "../js/ciudades.js";
import "../css/Carrusel.css";
import { Controller, useForm } from "react-hook-form";

export function HomeLinkMainPage() {

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
                                options={topCitiesSpain || []}
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
                    <button className="hl-mainLayout-buttonSearch">Bilatu</button>
                </div>
            </div>
            <div className="hl-mainLayout-BestNewBuild">
                <header className="hl-mainLayout-BestNewBuild-header">
                    <h2 className="hl-mainLayout-BestNewBuild-headerTitle">Lo más destacado de obra nueva</h2>
                    <span className="hl-mainLayout-BestNewBuild-headerDescription">Descubre todo lo que puedes encontrar en HomeLink</span>
                </header>
            </div>
        </div>
    )
}