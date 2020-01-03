import React from 'react';

export default class Loginfo extends React.Component{
render(){
    let verb;
    if(this.props.verb){
        verb = "In"
    }
    else{
        verb="Out"
    }
    return(
        <div>
        <h4>you are currently logged {verb} </h4>
        </div>
    );
}

} 