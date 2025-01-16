// Importation des bibliothèques nécessaires
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../../assets/images/geoguess_0.png';
import Img2 from '../../assets/images/geoguess_1.png';
import Img3 from '../../assets/images/geoguess_2.png';

const Project2 = () => {
    // État pour la sélection des images
    const [selectedImage, setSelectedImage] = useState(null);

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

    // Chemins des images
    const images = [
        Img1,
        Img2,
        Img3
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
                    console.error("Erreur lors de l'envoi de l'image :", error);
                });
        }
    };

    return (
        
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
            {/* Diagramme des probabilités */}
            <div style={{ width: '80%', maxWidth: '800px', marginBottom: '30px' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#263238' }}>Top 3 Pays Probables</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: 1, fontWeight: 'bold' }}>France</span>
                        <div style={{ flex: 4, background: '#263238', height: '20px', borderRadius: '10px' }}></div>
                        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>80%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: 1, fontWeight: 'bold' }}>Allemagne</span>
                        <div style={{ flex: 3, background: '#263238', height: '20px', borderRadius: '10px' }}></div>
                        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>60%</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: 1, fontWeight: 'bold' }}>Italie</span>
                        <div style={{ flex: 2, background: '#263238', height: '20px', borderRadius: '10px' }}></div>
                        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>40%</span>
                    </div>
                </div>
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
                                    border: selectedImage === image ? '2px solid #000000' : 'none', // Contour si sélectionnée
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Bouton pour envoyer l'image */}
            <button 
                onClick={handleSubmit} 
                style={{ 
                    marginTop: '50px', 
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
                Where am I ?!
            </button>
        </div>
    );
};

export default Project2;
