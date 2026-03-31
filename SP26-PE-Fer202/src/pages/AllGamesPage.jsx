import React, { Suspense, useEffect, useState } from "react";
import { getAllGame } from "../api/GameApi";
import CardRender from "../components/CardRender";
import '../style/AllGamesPage.css';

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

function AllGamesPage() {
    const [games, setNewGame]=useState([]);

    useEffect(()=>{
        getAllGame().then(data=>{
            setNewGame(sortingArray(data))
        }
    )}
    ,[])

    return (
        <Suspense fallback={<h1>Loading data....</h1>}>
            <div className="card-grid-container">
                {games.map((game)=>(
                    <CardRender key={game.id} data={game}/>
                ))}
            </div>
        </Suspense>
    );
}

export default AllGamesPage;
