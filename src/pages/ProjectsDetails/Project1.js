import React, { useState, useEffect } from 'react';
import StreamerCard from './StreamerCard';

const Project1 = () => {
    const [streamers, setStreamers] = useState([]);
    const [filteredStreamers, setFilteredStreamers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch streamers from API
    useEffect(() => {
        const fetchStreamers = async () => {
            try {
                const response = await fetch('https://api.chess.com/pub/streamers'); // Replace with your real API URL
                const data = await response.json();
                setStreamers(data.streamers);
                setFilteredStreamers(data.streamers);
            } catch (error) {
                console.error('Error fetching streamers:', error);
            }
        };

        fetchStreamers();
    }, []);

    // Handle search input
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = streamers.filter((streamer) =>
            streamer.username.toLowerCase().includes(query)
        );
        setFilteredStreamers(filtered);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <h1>Project 1: Streamer Search</h1>

            <input
                type="text"
                placeholder="Rechercher un streamer..."
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

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)', // 4 colonnes
                    gap: '20px',
                    maxHeight: '600px', // Limite de la hauteur totale de la grille
                    overflowY: 'auto', // Défilement vertical
                    border: '1px solid #ddd',
                    padding: '10px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                {filteredStreamers.length > 0 ? (
                    filteredStreamers.map((streamer) => (
                        <div
                            key={streamer.username}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                            }}
                        >
                            <img
                                src={streamer.avatar}
                                alt={streamer.username}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    marginBottom: '10px',
                                }}
                            />
                            <h3 style={{ margin: 0, fontSize: '16px', textAlign: 'center' }}>
                                {streamer.username}
                            </h3>
                            <a
                                href={streamer.twitch_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: '#0073e6',
                                    textDecoration: 'none',
                                    marginTop: '8px',
                                    fontSize: '14px',
                                }}
                            >
                                Voir sur Twitch
                            </a>
                            {streamer.is_live && (
                                <span
                                    style={{
                                        marginTop: '5px',
                                        color: 'red',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    • En Live
                                </span>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Aucun streamer trouvé.</p>
                )}
            </div>
        </div>
    );
};

export default Project1;
