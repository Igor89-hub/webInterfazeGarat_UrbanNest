import { Controller, useForm } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import topCitiesSpain from "../js/ciudades.js";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import { ImageCarrusel } from "./ImageCarrusel.jsx";


export function HouseResume() {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            buscarCiudad: null
        }
    });

    const navigate = useNavigate();

    const goBackMain = () => {
        navigate("/");
    }

    const goSeeTheMap = () => {

        const cityStreet = `${houseData.ciudad} - ${houseData.calle}`;
        console.log(cityStreet);
        navigate("/SeeLocationMap", {
            state: {
                ciudad: houseData.ciudad,
                calle: houseData.calle,
            }
        });
    }

    let houseData = topCitiesSpain[0];

    const cityNames = topCitiesSpain.map(city => city.ciudad);


    return (
        <div className="hl-resumeMain">
            <header className="hl-resumeMain-headerTitle">
                <div className="hl-resumeMain-headerTitle-case">
                    <img className="hl-resumeMain-headerTitle-img" alt="LogoEmpresa" src="/images/homeLinkLogo.png" onClick={goBackMain} />
                </div>
                <div className="hl-resumeMain-headerTitle-case">
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
                                            '& .MuiInputBase-input': { color: 'black' },
                                            '& .MuiInputLabel-root': { color: 'black' },
                                            '& .MuiAutocomplete-option': { backgroundColor: '#000' },
                                            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black', borderRadius: '40px' },
                                            width: 550,
                                        }}
                                    />
                                )}
                            >

                            </Autocomplete>
                        )}
                    >
                    </Controller>
                    <button className="hl-resumeMain-headerTitle-bilatu" type="button" name="bilatuBotoia">
                        <IoMdSearch size={35} color="white" />
                    </button>
                </div>
                <div className="hl-resumeMain-headerTitle-case">
                    <button type="button" name="iragarkia" className="hl-resumeMain-headerTitle-iragarkia">Pon tu anuncio aqui</button>
                </div>
            </header>
            <div className="hl-resumeMain-navBar">
                <div className="hl-resumeMain-navBarSelect">
                    <nav className="hl-resumeMain-navBar-a">Comprar</nav>
                    <nav className="hl-resumeMain-navBar-a">Alquiler</nav>
                    <nav className="hl-resumeMain-navBar-a">Obra Nueva</nav>
                </div>
            </div>
            <div className="hl-resumeMain-houseResume">
                <div className="hl-resumeMain-houseResume-display">
                    <div className="hl-resumeMain-houseResume-displayCarrusel">
                        <ImageCarrusel />
                    </div>
                    <div className="hl-resumeMain-houseResume-displayResume">
                        {(() => {
                            return (
                                <>
                                    <h2 className="hl-resumeMain-houseResume-displayResume-ciudadCalle">
                                        {houseData.ciudad} - {houseData.calle}
                                    </h2>
                                    <p className="hl-resumeMain-houseResume-displayResume-tipo">
                                        {houseData.tipo}
                                    </p>
                                    <p className="hl-resumeMain-houseResume-displayResume-tipo">
                                        {houseData.compra}
                                    </p>
                                    <p className="hl-resumeMain-houseResume-displayResume-detallesTitle">Detalles: </p>
                                    <ul className="hl-resumeMain-houseResume-displayResume-detalles">
                                        <li className="hl-resumeMain-houseResume-displayResume-detallesTexto">
                                            {houseData.metros_cuadrados} m²
                                        </li>
                                        <li className="hl-resumeMain-houseResume-displayResume-detallesTexto">
                                            {houseData.habitaciones} habitaciones
                                        </li>
                                        <li className="hl-resumeMain-houseResume-displayResume-detallesTexto">
                                            {houseData.banos} baños
                                        </li>
                                    </ul>
                                    <p className="hl-resumeMain-houseResume-displayResume-descripcionCorta">
                                        {houseData.descripcion_corta}
                                    </p>
                                </>
                            )
                        })()}
                        <div className="hl-resumeMain-navBarMapButton">
                            <button className="hl-resumeMain-navBar-seeMap" type="button" name="mapaIkusi" onClick={goSeeTheMap}>Ver Mapa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}