import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ImageCarrusel() {
    const images = [
        { src: "/images/casa_con_jardin.jpg", alt: "Casa con jardin" },
        { src: "/images/chalet.jpg", alt: "Chalet en la playa" },
        { src: "/images/caserioModerno_conFlores.png", alt: "Caserio moderno" }
    ];

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
                {images.map((image, index) => (
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