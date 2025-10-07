import { Controller, useForm } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import { ImageCarrusel } from "./ImageCarrusel.jsx";
import { IoMdSearch } from "react-icons/io";
import topCitiesSpain from "../js/ciudades.js";
export function FullExtendedHouseInfo() {

    const { control, handleSubmit } = useForm({
        defaultValues: {
            buscarCiudad: null
        }
    });


    const cityNames = topCitiesSpain.map(city => city.ciudad);

    return (
        <div className="hl-resumeMain">
            <header className="hl-resumeMain-headerTitle">
                <div className="hl-resumeMain-headerTitle-case">
                    <img className="hl-resumeMain-headerTitle-img" alt="LogoEmpresa" src="/images/homeLinkLogo.png" />
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
            <div className="hl-mainInfoLayout">
                <div className="hl-mainInfoLayout-carrusel"></div>
                <div className="hl-mainInfoLayout-infoCompleta"></div>
                <div className="hl-mainInfoLayout-contactForm"></div>
            </div>
        </div>
    )
}