import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ImageCarrusel() {
    const images = [
        { src: "/images/casa_con_jardin.jpg", alt: "Casa con jardin" },
        { src: "/images/chalet.jpg", alt: "Chalet en la playa" },
        { src: "/images/caserioModerno_conFlores.png", alt: "Caserio moderno" }
    ];

    const imagesAticoMadrid = [
        {src: "/images/aticoMadrid/aticoMadrid.png", alt: "Terraza atico de madrid"},
        {src: "/images/aticoMadrid/salon.png", alt: "Salon"},
        {src: "/images/aticoMadrid/cocina.png", alt:"Cocina"},
        {src: "/images/aticoMadrid/bañoPrincipal.png", alt: "Baño principal"},
        {src: "/images/aticoMadrid/bañoInvitados.png", alt: "Baño invitados"},
        {src: "/images/aticoMadrid/habitacionPrincipal.png", alt: "Habitacion principal"}
    ];


    let location = useLocation();

    const [activeImages, setActiveImages] = useState(images);

    useEffect(() => {
        if(location.pathname === "/"){
            setActiveImages(images);
        }else if(location.pathname === "/HouseResume"){
            setActiveImages(imagesAticoMadrid);
        }
    }, [location.pathname]) //Se ejecutara cuando el pathName se cambie



    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,              
        cssEase: 'ease-in-out',  
        arrows: false,            
        adaptiveHeight: false    
    };


    return (
        <div className="hl-mainLayout-carruselContainer">
            <Slider {...settings}>
                {activeImages.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} 
                        style={{ 
                                width: '100%', 
                                height: '600px',
                                objectFit: 'cover', // Asegúrate de mantener object-fit para que no se deformen
                                filter: 'brightness(60%)'
                            }}  
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}