import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';

const ChessPage = () => {
    const { username } = useParams();
    const [game, setGame] = useState(new Chess()); // Instance du jeu d'échecs
    const [playerStats, setPlayerStats] = useState(null); // État pour stocker les statistiques du joueur

    // Récupération des statistiques du joueur via l'API Flask
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/player/analysis?player_name=${username}`);
                const data = await response.json(); // Récupération des données JSON
                console.log('Statistiques récupérées :', data);
                setPlayerStats(data); // Stockage des données dans l'état playerStats
            } catch (error) {
                console.error('Erreur lors de la récupération des statistiques :', error);
            }
        };
        fetchGames();
    }, [username]);

    // Gestion des mouvements d'échecs
    const handleMove = (move) => {
        const newGame = new Chess(game.fen()); // Créer une nouvelle instance basée sur la position actuelle

        try {
            const result = newGame.move(move);
            setGame(newGame); // Met à jour l'état du jeu si le coup est valide
            console.log(`Coup joué : ${move.from}-${move.to}`);
        } catch (error) {
            console.warn(`Coup illégal : ${JSON.stringify(move)}`);
        }
    };

    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '20px',
                flexDirection: 'column',
            }}
        >
            <h2 style={{ marginBottom: '20px' }}>Playing against {username} 🤖</h2>

            {/* Bulle d'informations en haut à droite */}
            {playerStats && (
                <div
                    style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        padding: '15px',
                        backgroundColor: '#2b2b2b',
                        color: 'white',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{username}'s Style Analysis</p>
                    <p style={{ margin: '5px 0' }}>Number of games analyzed: {playerStats.number_games}</p>
                    <p style={{ margin: '5px 0' }}>Average game length: {playerStats.game_length.toFixed(0)} moves</p>
                    {/* <p style={{ margin: '5px 0' }}>Central pawns usage: {playerStats.central_pawns.toFixed(0)}%</p> */}
                    <p style={{ margin: '5px 0' }}>Piece advancement score: {playerStats.piece_advancement.toFixed(0)}</p>
                    <p style={{ margin: '5px 0' }}>Queen moves per game: {playerStats.queen_moves.toFixed(0)}</p>
                    <p style={{ margin: '5px 0' }}>Trades per game: {playerStats.trades.toFixed(0)}</p>
                </div>
            )}

            <Chessboard
                width={400}
                position={game.fen()} // Position actuelle de l'échiquier
                onDrop={({ sourceSquare, targetSquare }) =>
                    handleMove({
                        from: sourceSquare,
                        to: targetSquare,
                        promotion: 'q', // Promotion par défaut en reine
                    })
                }
            />
        </div>
    );
};

export default ChessPage;
