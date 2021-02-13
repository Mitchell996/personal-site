import React from 'react'
import * as bs from 'react-bootstrap'
import DisplayCard from './DisplayCard'
import { useParams } from 'react-router-dom';
import './Home.scss';
//import AppContext from './context';

function createcards(){
    //it's been a fresh while so I'm going to use this 
    //to create the objects for my cards
    let profiles = [];
    let obj1 = {
        display_id : "0",
        name : "github",
        image : "/Github.png"
    };
    let obj2 = {
        display_id: "1",
        name : "Resume",
        image : "/ResumeImage.jpg"
    }
    let obj3 ={
        display_id: "2",
        name : "About me",
        image : "/aboutMe.png"
    }
    profiles[0] = obj1;
    profiles[1] = obj2;
    profiles[2] = obj3;
    return profiles;
}


function Home(props){
let profiles = createcards();

return(
    
    <div class="display">
    <bs.Container class="containter" fluid className="p-0">
    <h1 className="my-4 mx-4 text-center">Mitchell Johnson</h1>
    
  
    <img src = {"/Screen Shot 2021-02-05 at 7.39.58 PM.png"} style= {{ visibility:"hidden", height:"500px"}} />
    
        <bs.Row >
            <bs.Col md="4" >
                <bs.ListGroup.Item><DisplayCard DisplayCard={profiles[0]} /></bs.ListGroup.Item>
            </bs.Col>
            <bs.Col md="4">
            <bs.ListGroup.Item><DisplayCard DisplayCard={profiles[1]} /></bs.ListGroup.Item>
            </bs.Col>
            <bs.Col md="4">
            <bs.ListGroup.Item><DisplayCard DisplayCard={profiles[2]} /></bs.ListGroup.Item>
            </bs.Col>
        </bs.Row>
        <img src = {"/Screen Shot 2021-02-05 at 7.39.58 PM.png"} style= {{ visibility:"hidden", height:"550px"}} />
    </bs.Container>
    </div>
   
)




}

export default Home;