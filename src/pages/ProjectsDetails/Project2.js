// Importation des bibliothèques nécessaires
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import ApexCharts from 'react-apexcharts';
import Img1 from '../../assets/images/geoguess_0.png';
import Img2 from '../../assets/images/geoguess_1.png';
import Img3 from '../../assets/images/geoguess_2.png';

const Project2 = () => {
    // État pour la sélection des images
    const [selectedImage, setSelectedImage] = useState(null);
    const [probabilities, setProbabilities] = useState([
        { name: 'France', probability: 64.5 },
        { name: 'Allemagne', probability: 23.5 },
        { name: 'Italie', probability: 12 },
    ]);
    
    const images = [
        Img1,
        Img2,
        Img3
    ];
    // Configuration du carrousel
    const settings = {
        dots: true, // Afficher les indicateurs
        infinite: true, // Boucle infinie
        speed: 500, // Vitesse de transition
        slidesToShow: 3, // Montrer plusieurs images
        centerMode: true, // Centrer les diapositives
        centerPadding: '0px', // Espace autour des images centrées
        slidesToScroll: 1, // Nombre d'images à faire défiler à chaque fois
        adaptiveHeight: true, // S'adapte à la hauteur de l'image
    };

    // Configuration du graphique
    const chartOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '16px', // Agrandissement de la taille de police
                    // fontWeight: 'bold',
                },
            }, 
        },
        xaxis: {
            categories: probabilities.map((p) => p.name),
            
        },
        colors: ['#263238'], // Couleurs personnalisées pour chaque barre
    };
    

    const series = [
        {
            name: "Confiance (%)",
            data: probabilities.map((p) => p.probability),
        },
    ];

    // Fonction pour envoyer l'image via une requête POST
    const handleSubmit = () => {
        if (selectedImage) {
            fetch('https://example.com/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: selectedImage }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Image envoyée avec succès :', data);
                })
                .catch((error) => {
                    console.error('Erreur lors de l\'envoi de l\'image :', error);
                });
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0f0f0', padding: '20px', height: '100vh', overflow: 'auto' }}>
            {/* Diagramme des probabilités */}
            <div style={{ width: '80%', maxWidth: '800px', marginTop: '30px', marginBottom: '30px' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '5px', color: '#263238' }}>That's probably in : </h3>
                <ApexCharts options={chartOptions} series={series} type="bar" height={300} />
            </div>
            {/* Carrousel */}
            <div style={{ width: '80%', maxWidth: '800px' }}>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} style={{ position: 'relative' }} onClick={() => setSelectedImage(image)}>
                            <img 
                                src={image} 
                                alt={`Slide ${index + 1}`} 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    borderRadius: '20px', 
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                                    transform: 'scale(0.9)', // Réduction de la taille des images
                                    cursor: 'pointer', // Indicateur de clic
                                    border: selectedImage === image ? '2px solid #263238' : 'none', // Contour si sélectionnée
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Boutons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
                <button 
                    onClick={handleSubmit} 
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        backgroundColor: '#263238', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                    }}
                    disabled={!selectedImage} // Désactiver si aucune image n'est sélectionnée
                >
                    Where am I ?
                </button>
                <button 
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        backgroundColor: '#3E66B1', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer' 
                    }}
                >
                    Play my rules
                </button>
            </div>
        </div>
    );
};

export default Project2;
