import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import { getAllGame } from "../api/GameApi";
import TableRender from "../components/TableRender";
import '../style/PlayedGame.css';
function filterArray(data){
    const currArr=[...data];
    const reArr=currArr.filter(item=>item.isPlayed);
    return reArr;
}

function PlayedGamePage() {
    const [games, setNewGame]=useState([]);
    
        useEffect(()=>{
            getAllGame().then(data=>{
                setNewGame(filterArray(data))
            }
        )}
        ,[])

  return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <table className="table-container">
                    <thead>
                        <tr>
                            <th>Game Image</th>
                            <th>Game Title</th>
                            <th>PlayTime</th>
                            <th>Complexity</th>
                        </tr>
                    </thead>
                    <tbody>
                            {games.map((game)=>(
                                <TableRender data={game} />
                            ))}
                    </tbody>
                </table>
            </Suspense>
        </div>
    );
}

export default PlayedGamePage;
