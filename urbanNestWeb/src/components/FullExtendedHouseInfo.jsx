import { Controller, useForm } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router";
import { ImageCarrusel } from "./ImageCarrusel.jsx";
import { IoMdSearch } from "react-icons/io";
import topCitiesSpain from "../js/ciudades.js";
export function FullExtendedHouseInfo() {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            buscarCiudad: null
        }
    });

    const navigate = useNavigate();


    const cityNames = topCitiesSpain.map(city => city.ciudad);

    const loadInfo = topCitiesSpain[0];

    const goBackMain = () => {
        navigate("/");
    }

    const goYourAnnouncement = () => {
        navigate("/PutYourAnnouncement");
    }

    return (
        <div className="hl-resumeMain">
            <header className="hl-resumeMain-headerTitle">
                <div className="hl-resumeMain-headerTitle-case">
                    <img className="hl-resumeMain-headerTitle-img" alt="LogoEmpresa" src="/images/homeLinkLogo.png" onClick={goBackMain}/>
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
                    <button type="button" name="iragarkia" className="hl-resumeMain-headerTitle-iragarkia" onClick={goYourAnnouncement}>Pon tu anuncio aqui</button>
                </div>
            </header>
            <div className="hl-mainInfoLayout">
                <div className="hl-mainInfoLayout-carrusel">
                    <ImageCarrusel />
                </div>
                <div className="hl-mainInfoLayout-infoCompleta">
                    {(() => {
                        return (
                            <>
                                <h2 className="hl-mainInfoLayout-infoCompletaTitle">
                                    {loadInfo.ciudad} - {loadInfo.calle}
                                </h2>
                                <p className="hl-mainInfoLayout-infoCompletaType">
                                    {loadInfo.tipo}
                                </p>
                                <p className="hl-mainInfoLayout-infoCompletaBuy">
                                    {loadInfo.compra}
                                </p>
                                <p className="hl-mainInfoLayout-infoCompletaDetails-title">Detalles: </p>
                                <ul className="hl-mainInfoLayout-infoCompletaDetails-list">
                                    <li className="hl-mainInfoLayout-infoCompletaDetails-listText">
                                        {loadInfo.metros_cuadrados} m²
                                    </li>
                                    <li className="hl-mainInfoLayout-infoCompletaDetails-listText">
                                        {loadInfo.habitaciones} habitaciones
                                    </li>
                                    <li className="hl-mainInfoLayout-infoCompletaDetails-listText">
                                        {loadInfo.banos} baños
                                    </li>
                                </ul>
                                <p className="hl-mainInfoLayout-infoCompleta-description">
                                    {loadInfo.descripcion}
                                </p>
                                <p className="hl-mainInfoLayout-infoCompletaDetails-title">Características:</p>
                                <ul className="hl-mainInfoLayout-infoCompletaDetails-list">
                                    {loadInfo.caracteristicas.map((caracteristica, index) => (
                                        <li key={index} className="hl-mainInfoLayout-infoCompletaDetails-listText">
                                            {caracteristica}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )
                    })()}
                </div>
                <div className="hl-mainInfoLayout-contactForm">
                    <form className="hl-mainInfoLayout-contactForm-form">
                        <label htmlFor="ZureEmail">Tu email: </label>
                        <input type="email" name="ZureEmail" className="hl-mainInfoLayout-contactForm-formEmail" />
                        <label htmlFor="zureIzena">Tu nombre: </label>
                        <input type="email" name="zureIzena" className="hl-mainInfoLayout-contactForm-formIzena" />
                        <label htmlFor="zureApellido">Tu apellido: </label>
                        <input type="email" name="zureApellido" className="hl-mainInfoLayout-contactForm-formApellido" />
                        <input type="submit" value="CONTACTAR" name="contactMe" className="hl-mainInfoLayout-contactForm-formSubmit" />
                    </form>
                </div>
            </div>
        </div>
    )
}