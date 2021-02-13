import React from 'react';
import * as bs from 'react-bootstrap';
import { Link } from 'react-router-dom';


function DisplayCard(display) {
    return (
        <bs.Card style = {{ color: "darkcyan"}}>
            <bs.Card.Header style ={{backgroundColor: "#cccccc"}}>{display.DisplayCard.name}</bs.Card.Header>
            <Link to={"/display/" + display.DisplayCard.display_id } key={display.DisplayCard.display_id}>
                <bs.Card.Img variant="bottom" height="200px" src={display.DisplayCard.image}  />
            </Link>
        </bs.Card>
    )
}
//<Link to={"/display/" + displayCard.display_id } key={displayCard.display_id}></Link>
//</Link>
export default DisplayCard;