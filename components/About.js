import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props){
        super(props);
        // console.log("parent constructor()");
    }

    componentDidMount() {
        // console.log("parent componentDidMount()");
    }

    render() {
        // console.log("parent render()");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is an About Us Page</h2>
                <div>
                    Login User: 
                    <UserContext.Consumer>
                        {(data) => {
                            return (
                                <span> {data.loggedInUser}</span>
                            )
                        }}
                    </UserContext.Consumer>
                </div>
                {/* <User name="Deepak (function)" location="Ldh from function" /> */}
                <UserClass name="First (class)" location="Ludhiana from class" address="deep@class.com" />
                {/* <UserClass name="Second (class)" location="Ludhiana from class" address="deep@class.com" />
                <UserClass name="Third (class)" location="Ludhiana from class" address="deep@class.com" /> */}
            </div>
        )
    }
}


export default About;