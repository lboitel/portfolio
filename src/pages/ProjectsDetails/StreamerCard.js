import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const StreamerCard = (props) => {
    const navigate = useNavigate();

    const handleCardClick = async (streamerId) => {
        // console.log(`https://noisette.bio/api/player/analysis?player_name=${streamerId}`);
        // const response = await fetch(`https://noisette.bio/api/player/analysis?player_name=${streamerId}`);
        // const data = await response.json();
        // console.log(data)
        navigate(`/play/${streamerId}`);
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {props.config.map((item) => (
                <Box
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
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
                </Box>
            ))}
        </Box>
    );
};

export default StreamerCard;
