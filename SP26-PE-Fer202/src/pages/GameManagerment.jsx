import { useState, useEffect, Suspense } from "react";
import { getAllGame } from "../api/GameApi";
import TableRender from "../components/TableRender";
import '../style/PlayedGame.css';

function sortingArray(data){
    const arr=[...data];
    for(let i=1; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j].gameTitle > arr[j+1].gameTitle){
                let temp=arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
function GameManagerment() {
    const [games, setNewGame]=useState([]);
    
        useEffect(()=>{
                getAllGame().then(data=>{
                    setNewGame(sortingArray(data))
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

export default GameManagerment;
