import React from "react";
import './CardRender.css';
import { NavLink } from "react-router-dom";

function CardRender({data}) {
    return (
        <div className="card-container">
            <div className="card-header">
                
                    <div className="card-img">
                        <NavLink to={`/SE183894/game/${data.id}`}>
                        <img
                        className="card-img-item"
                        src={data.gameImage}
                        alt="unknow games"/>
                        </NavLink>
                    </div>

                <h3>Title:{data.gameTitle}</h3>
                <span className="card-name"></span>
            </div>

            <div className="card-body">
                <p>PlayerRange: {data.minPlayers}-{data.maxPlayers}</p>
                <p>Complexity: {data.complexity}</p>
                <p></p>
            </div>
            <div className="card-footer">
            </div>
        </div>
    );
}

export default CardRender;
