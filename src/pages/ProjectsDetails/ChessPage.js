import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chessboard from 'chessboardjsx';
import { Chess } from 'chess.js';
import moveSound from '../../assets/sounds/move-piece.mp3'; // Importation du fichier audio

const ChessPage = () => {
    const { username } = useParams();
    const [game, setGame] = useState(new Chess()); // Instance du jeu d'échecs
    const [playerStats, setPlayerStats] = useState(null);
    const [currentFen, setCurrentFen] = useState(game.fen());
    const [loadingNextMove, setLoadingNextMove] = useState(false); // Indicateur de chargement du coup IA
    const moveAudio = new Audio(moveSound);


    const playMoveSound = () => {
        moveAudio.currentTime = 0; // Réinitialise la lecture pour ne pas couper un son précédent
        moveAudio.play().catch((err) => console.warn('Erreur lors de la lecture du son', err));
    };


    // Récupération des statistiques du joueur
    useEffect(() => {
        const fetchGames = async () => {
            try {
                // const response = await fetch(`http://127.0.0.1:5000/player/analysis?player_name=${username}`);
                const response = await fetch(`https://noisette.bio/api/player/analysis?player_name=${username}`);
                const data = await response.json();
                setPlayerStats(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des statistiques :', error);
            }
        };
        fetchGames();
    }, [username]);

    // Fonction pour envoyer une requête à l'API pour obtenir le prochain coup de l'IA
    const fetchNextMove = async (fen) => {
        setLoadingNextMove(true);
        try {
            // const response = await fetch(`http://127.0.0.1:5000/next_move?fen=${encodeURIComponent(fen)}`);
            const response = await fetch('https://noisette.bio/api/next_move?fen=' + encodeURIComponent(fen));
            const data = await response.json();
            console.log('FEN retourné par l\'IA :', data.fen);
    
            if (data.fen) {
                const newGame = new Chess(data.fen); // Crée une instance basée sur le FEN reçu
                setGame(newGame); // Met à jour l'état du jeu
                setCurrentFen(newGame.fen()); // Met à jour la position FEN actuelle

            }
        } catch (error) {
            console.error('Erreur lors de la récupération du prochain coup :', error);
        } finally {
            playMoveSound(); // Jouer le son après le coup du joueur
            setLoadingNextMove(false);
        }
    };

    // Gestion des mouvements d'échecs
    const handleMove = (move) => {
        const newGame = new Chess(game.fen()); // Créer une nouvelle instance basée sur la position actuelle

        try {
            const result = newGame.move(move); // Le joueur joue son coup
            if (result) {
                setGame(newGame); // Met à jour l'état du jeu si le coup est valide
                setCurrentFen(newGame.fen()); // Met à jour la position FEN actuelle
                playMoveSound(); // Jouer le son après le coup du joueur

                console.log(`Coup joué par le joueur : ${move.from}-${move.to}`);

                // Appeler l'IA après un délai pour plus de fluidité
                setTimeout(() => {
                    fetchNextMove(newGame.fen()); // Requête à l'API avec le dernier FEN
                }, 500);
            }
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
                    <p style={{ margin: '5px 0' }}>Player rating: {playerStats.elo}</p>
                    <p style={{ margin: '5px 0' }}>Number of games analyzed: {playerStats.number_games}</p>
                    <p style={{ margin: '5px 0' }}>Average game length: {playerStats.game_length.toFixed(0)} moves</p>
                    <p style={{ margin: '5px 0' }}>Piece advancement score: {playerStats.piece_advancement.toFixed(0)}</p>
                    <p style={{ margin: '5px 0' }}>Queen moves per game: {playerStats.queen_moves.toFixed(0)}</p>
                    <p style={{ margin: '5px 0' }}>Trades per game: {playerStats.trades.toFixed(0)}</p>
                </div>
            )}

            <Chessboard
                width={400}
                position={currentFen} // Utilisation de la position FEN actuelle
                draggable={game.turn() === 'w'} // Permet de déplacer les pièces uniquement si c'est le tour du joueur
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
