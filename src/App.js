import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import GameCard from './gamecard.js';
import './gamecard.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [games, setGames] = useState([
    {
      title: "Assassin's Creed Odyssey",
      imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/812140/library_600x900_2x.jpg?t=1670596176",
      tags: ["Action", "Adventure", "Open World"]
    },
    {
      title: "HELLDIVERS 2",
      imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/553850/library_600x900_2x.jpg?t=1724255371",
      tags: ["Action", "Multiplayer", "Co-op"]
    }
  ]);

  const filteredGames = searchGames(games, searchTerm);

  return (
    <div className="app">
      <input 
        type="text" 
        className="search-input"
        placeholder="Search games..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="game-library">
        {filteredGames.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
}

function searchGames(games, searchTerm) {
  return games.filter(game => 
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
}

export default App;
