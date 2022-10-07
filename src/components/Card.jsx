import './card.css' 
import {
    Link
  } from "react-router-dom";

export const Card = (props) =>{
    return(
        <Link to={`exchange/${props.id}`}>
            <div className="card" key={props.id}>
                <h2>{props.name}</h2>
                <p>{props.adjusted_volume}</p>
            </div>
        </Link>
    )
}