import React from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../api/GameApi";
import { useEffect, useState } from "react";

function GameDetails() {

    const { id }=useParams();
    const[game, setNewGame]=useState({});
    useEffect(()=>{
        getGameById(id).then(data=>setNewGame(data))
    },[id])

    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",     
            gap: "5px",
            alignItems: "center",
            marginTop: "20px",
            border: "1px solid #ddd",               
        }}>
            <div style={{
                marginTop: "20px",
                borderRadius: "50%",
                border: "solid",
                boxSizing: "border-box",
                width: "300px",
                overflow: "hidden"
            }}><img src={game.gameImage} width="300px"/></div>
            <div><h1>Id: {game.id}</h1></div>
            <div><h2>Title: {game.gameTitle}</h2></div>
            <div>
                <p>Player: {game.minPlayers}-{game.maxPlayers}</p>
                <p>PlayTime: {game.playTime}</p>
                <p>Is played: {game.isPlayed ? 'Played' : 'Not Play Yet'}</p>
                <p>Complexity: {game.complexity}</p>
            </div>
        </div>
    );
}

export default GameDetails;
