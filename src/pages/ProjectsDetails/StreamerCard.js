import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const StreamerCard = (props) => {
    const [hoveredId, setHoveredId] = useState(null); // État pour suivre la carte survolée

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            
            {props.config.slice(0, 20).map((item) => ( // Affiche uniquement les 20 premiers streamers
                <Box
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)} // Détecte le survol
                    onMouseLeave={() => setHoveredId(null)} // Réinitialise lors de la sortie du survol
                    sx={{
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

                    {/* Affichage du message lors du survol */}
                    {hoveredId === item.id && (
                        <Typography
                            variant="caption"
                            sx={{
                                marginTop: '1rem',
                                color: '#757575',
                                fontSize: '14px',
                            }}
                        >
                            Bot it up 🤖
                        </Typography>
                    )}
                </Box>
            ))}
        </Box>
    );
}

export default StreamerCard;
