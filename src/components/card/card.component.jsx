import React from "react";
import '../card/card.styles.css'

export const Card = (props) => (
    <div className="card-container">
    <img  alt = 'monster' src={`https://robohash.org/${props.monster.id}size=180*180`}></img>

    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
    </div>
)