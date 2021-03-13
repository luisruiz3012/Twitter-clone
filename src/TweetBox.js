import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1472130069/content-items/001/693/882/Ilustracio_web2-original.png?1472130069" />
                    <input placeholder="What's happening?" type="text"></input>
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text"></input>

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
