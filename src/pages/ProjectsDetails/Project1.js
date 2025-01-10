import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import StreamerCard from './StreamerCard'; // Import de la carte personnalisée

const Project1 = () => {
    const [streamers, setStreamers] = useState([]);
    const [filteredStreamers, setFilteredStreamers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch streamers from API
    useEffect(() => {
        const fetchStreamers = async () => {
            try {
                const response = await fetch('https://api.chess.com/pub/streamers'); // Remplace par ton URL d'API
                const data = await response.json();
                setStreamers(data.streamers);
                setFilteredStreamers(data.streamers);
            } catch (error) {
                console.error('Erreur lors de la récupération des streamers :', error);
            }
        };

        fetchStreamers();
    }, []);

    // Handle search input
    const handleSearch = (event) => {
        const query = event.target.value ; // .toLowerCase();
        setSearchQuery(query);

        const filtered = streamers.filter((streamer) =>
            streamer.username.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredStreamers(filtered);
    };

    // Convert streamers data into the format expected by StreamerCard
    const streamerCardsConfig = filteredStreamers.map((streamer) => ({
        id: streamer.username,
        icon: <Avatar src={streamer.avatar} alt={streamer.username} sx={{ width: 40, height: 40 }} />,
        text: (
            <>
                {streamer.username}
                {streamer.is_live && (
                    <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '0.5rem' }}>
                        • En Live
                    </span>
                )}
            </>
        ),
    }));

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <h1>Project n°1 - StyleMate</h1>

            <input
                type="text"
                placeholder="Search your favourite chess streamer"
                value={searchQuery}
                onChange={handleSearch}
                style={{
                    width: '100%',
                    padding: '8px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    marginBottom: '20px',
                }}
            />

            {/* Affichage des cartes des streamers */}
            <StreamerCard config={streamerCardsConfig} />
        </div>
    );
};

export default Project1;
