import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const StreamerCard = (props) => {
    const [loadingCardId, setLoadingCardId] = useState(null); // ID de la carte sur laquelle afficher le GIF

    const handleCardClick = (item) => {
        setLoadingCardId(item.id); // Définit l'ID de la carte cliquée
        setTimeout(() => {
            setLoadingCardId(null); // Cache le GIF après 3 secondes
            // alert(`Chargement de ${item.text} terminé !`);
        }, 3000); // Simulation d'une opération de 3 secondes
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {props.config.slice(0, 20).map((item) => (
                <Box
                    key={item.id}
                    onClick={() => handleCardClick(item)} // Détecte le clic sur la carte
                    sx={{
                        position: 'relative', // Permet de positionner le GIF au centre
                        color: '#263238',
                        textAlign: 'center',
                        padding: '1.5rem',
                        backgroundColor: '#ffffff',
                        margin: '.5rem',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.15)',
                            cursor: 'pointer',
                        },
                    }}
                >
                    {item.icon}
                    <Typography variant="body2" sx={{ marginTop: '0.6rem', fontWeight: 'bold' }}>
                        {item.text}
                    </Typography>

                    {/* Affichage du GIF au centre de la carte cliquée */}
                    {loadingCardId === item.id && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fond semi-transparent sur la carte
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '15px', // Même bordure pour un bon rendu
                            }}
                        >
                            <img
                                src="https://i.gifer.com/ZKZg.gif" // Remplacez par votre propre GIF
                                alt="Chargement..."
                                style={{ width: '50px', height: '50px' }}
                            />
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default StreamerCard;
