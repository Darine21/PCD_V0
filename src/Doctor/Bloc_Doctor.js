import React from "react";
import Slider from "react-slick";

import "./Bloc_Doctor.css";

import ava01 from "../Asset/dr_slim_kassar-min.webp";
import ava02 from "../Asset/SOFIAN.webp";
import ava03 from "../Asset/dr-mazen.webp";
import ava04 from "../Asset/aaaa.jpg";

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    

    return (

<div id="medecin">
        <Slider {...settings} >
=======

        <Slider {...settings}>
>>>>>>> 692ff6ab75d41ed1eee7577d68a6892b5ab0b31d

            <div className="testimonial py-4 px-3">
           

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Dr Salim Kassar</h6>
                        <p className="section__description">Le Dr. Slim KASSAR est largement considéré comme le pionnier de la technologie moderne de greffe de cheveux, introduisant la technique FUE au public.
                            Il est reconnu internationalement pour son travail et a encadré les meilleurs médecins de greffes de cheveux du monde entier.
                            Le Dr. Slim KASSAR a étudié la médecine et la chirurgie en France.</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3"> Dr Sofian Ayedi </h6>
                        <p className="section__description">Le Docteur Sofien AYADI est:

                            Spécialiste en chirurgie digestive depuis 2007
                            Professeur agrégé en chirurgie viscérale en 2013
                            Ancien interne en chirurgie bariatrique à Bruxelles en 2008 (ULB université)
                            Multiples stages de cours intensifs en chirurgie bariatrique a l’IRCAD (Strasbourg)
                            Ancien interne à l’institut Gustave Roussy, Villejuif Paris (chirurgie Carcinologique digestive)Numéro d’inscription à l’ordre des médecins : 14537</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">


                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">Dr Mazen Kallel </h6>
                        <p className="section__description">Docteur Mazen Kallel est un spécialiste en gynécologie obstétrique et traitement de l’infertilité bien connu pour son dévouement et professionnalisme.
                            Avec plus de 13 ans d’expérience, il  possède une approche holistique du traitement de l’infertilité aussi bien féminine que masculine englobant les solutions thérapeutiques, cliniques et biologiques.</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="mb-0 mt-3">AMINI-ADLE Mona</h6>
                        <p className="section__description">Spécialités
                            Cancers cutanés
                            Chirurgie dermatologique
                            Neurofibromatose de type 1
                            Dermatoscopi
                            Tél.: 78 78 59 96</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
  
};

export default Testimonial;