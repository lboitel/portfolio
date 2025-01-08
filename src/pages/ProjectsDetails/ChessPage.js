import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';

const ChessPage = () => {
    const { username } = useParams();
    const [game, setGame] = useState(new Chess()); // Instance du jeu d'échecs

    // Récupération des parties du streamer via l'API
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`https://api.chess.com/pub/player/${username}/games`);
                const data = await response.json();
                console.log('Parties récupérées :', data);
            } catch (error) {
                console.error('Erreur lors de la récupération des parties :', error);
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
                display: 'flex',
                // justifyContent: 'center', // Centre horizontalement
                alignItems: 'center', // Centre verticalement
                // height: 'vh', // Prend toute la hauteur de la fenêtre
                padding: '20px',
                flexDirection: 'column', // Pour que le titre soit au-dessus
            }}
        >
            <h2 style={{ marginBottom: '20px' }}>Playing against {username} 🤖</h2>
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
