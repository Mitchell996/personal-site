import React from 'react';
import * as bs from 'react-bootstrap';
//import AppContext from './context'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useParams} from "react-router-dom";


function createcards(){
    //it's been a fresh while so I'm going to use this 
    //to create the objects for my cards
    let profiles = [];
    let obj1 = {
        display_id : "0",
        title: "github and other sites",
        profile_links: ["https://github.com/Mitchell996", "https://www.figma.com/files/user/771537126370303213"],
        profile_picture: "/GithubFork.png",
        link_description: ["my github", "my figma"],
        description: ["What you'll find on your github is some javascript, a few react projects, and the example app I made, family Map.",
            "On my Figma, you'll find a few designs that I have created for class or personal projects"],
        name : "github",
        image : "/Github.png"
    };
    let obj2 = {
        display_id: "1",
        name : "Resume",
        profile_picture: "/Resume Jan 2021.png",
        profile_links: [""],
        link_description: [""],
        description: ["you should be able to see my full Resume, if not click on about me and my LinkedIn profile should be accessible."],
        image : "/ResumeImage.jpg"
    }
    let obj3 ={
        display_id: "2",
        name : "About me",
        profile_picture: "/aboutMe.png",
        profile_links: ["https://www.linkedin.com/in/mitchell-a-johnson-byu/"],
        link_description: ["my linkedin account"],
        description: ["My name is Mitchell Johnson, I'm from Santa Clarita, California.  I currently attend BYU getting a degree in Information Systems(est. graduation april 2021)"],
        image : "/aboutMe.png"
    }
    profiles[0] = obj1;
    profiles[1] = obj2;
    profiles[2] = obj3;
    return profiles;
}

function organizeProfileInfo(profile){

let profileLengths = profile.profile_links.length;
    let profileInfo = []
    let info = {
        link : "",
        linkDesc : "",
        desc : ""
    };
    for(let i = 0; i < profileLengths; i++){
        info.link = profile.profile_links[i];
        info.linkDesc = profile.link_description[i];
        info.desc = profile.description[i];
        profileInfo.push({
            link : profile.profile_links[i],
        linkDesc : profile.link_description[i],
        desc : profile.description[i]
        });
    }
    return profileInfo;
}

export default function DisplayDetail(props){
//console.log("what's display? " , displayDetail);
let profiles = createcards();
let { display } = useParams();
let profile = profiles[display];
let profInfo = organizeProfileInfo(profile);
return(
    <bs.Container >
       <img src = {"/Screen Shot 2021-02-05 at 7.39.58 PM.png"} style= {{ visibility:"hidden", height:"500px"}} />
            <h3 className="text-center">{profile.title}</h3>
        
        <bs.Row style={{backgroundColor: "#7c8256"}}>
            <bs.Col>
                <img src ={profile.profile_picture} style={{height:"400px",width:"600px" }}/>
            </bs.Col>
            <bs.Col>
            {Object.values(profInfo).map((description) => {
                return (
                    <bs.Card >
                    <bs.Card.Header><a href={description.link} key={display}>{description.linkDesc}</a></bs.Card.Header>
                    <br></br>
                    <p>{description.desc}</p>
                    </bs.Card>
                )
            }    )}
            </bs.Col>
        </bs.Row>

        <img src = {"/Screen Shot 2021-02-05 at 7.39.58 PM.png"} style= {{ visibility:"hidden", height:"550px"}} />

    </bs.Container>
)

}

//export default displayDetail;


/*

{Object.values(organizedCampaigns).map((campaign) => {
                            return (<bs.ListGroup key={campaign[0] + count++} horizontal>
                                <bs.Col md="3">
                                    <bs.ListGroup.Item sm={3} key={campaign[0].campaign_id}> <CampaignCard campaign={campaign[0]} /> </bs.ListGroup.Item>
                                </bs.Col>
                                {campaign.length > 1 ?
                                    (<bs.Col md="3">
                                        <bs.ListGroup.Item sm={3} key={campaign[1].campaign_id} ><CampaignCard campaign={campaign[1]} /></bs.ListGroup.Item>
                                    </bs.Col>) : <div></div>}
                                {campaign.length > 2 ?
                                    (<bs.Col md="3">
                                        <bs.ListGroup.Item sm={3} key={campaign[2].campaign_id} ><CampaignCard campaign={campaign[2]} /></bs.ListGroup.Item>
                                    </bs.Col>) : <div></div>}
                                {campaign.length > 3 ?
                                    (<bs.Col md="3">
                                        <bs.ListGroup.Item sm={3} key={campaign[3].campaign_id} ><CampaignCard campaign={campaign[3]} /></bs.ListGroup.Item>
                                    </bs.Col>) : <div></div>}
                            </bs.ListGroup>)
                        })}


*/