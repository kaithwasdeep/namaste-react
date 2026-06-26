import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Dummy Location"
            }
        }
    }

    async componentDidMount(){
        const data = (await fetch("https://api.github.com/users/kaithwasdeep"));
        const jsonData = await data.json();
        // console.log("jsonData == ", jsonData);
        this.setState({
            userInfo: jsonData
        })
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate called");
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount called");
    }
    
    render() {
        // console.log(this.props.name +" child render");
        const {location, address} = this.props;
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.login}</h2>
                <h3>Location: {this.state.userInfo.type}</h3>
                <h4>Mail Address: {address}</h4>
            </div>
        )
    }
}

export default UserClass;