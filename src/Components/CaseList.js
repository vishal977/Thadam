import React, { Component } from 'react';
import ViewCase from './ViewCase';
import { link } from 'fs';
import {Link} from 'react-router-dom';
class CaseList extends Component{

    state = {
        details : [
        {
            crimeId: 101,
            offCode: "IS101",
            location: "Tambaram"
        },
        {
            crimeId: 102,
            offCode: "IS701",
            location: "Avadi"}
        ],
        getDetailsOf: null
      }

    render() {
        var arr = [];
        var details = this.state.details;
        for (var key in details) {
            arr.push(details[key]);
        }

        const crimes = arr.length ?
        (
            arr.map(arr => 
            {
                var toLink = "viewcase/" + arr.crimeId;
            return (
                <Link to = {toLink}>
                <div className = "card" key = {arr.crimeId}>
                <div className="row" >
                        <div className="col s4 black-text  ">
                            <h5>{arr.crimeId}</h5>
                        </div>
                        <div className="col s4 black-text ">
                            <h5>{arr.offCode}</h5>
                        </div>
                        <div className="col s4 black-text ">
                            <h5>{arr.location}</h5>
                        </div>
                    </div>
                </div>
                </Link>
                )
            })
        ):
        (       
                <div className="error">
                    <h3>No crimes!</h3>
                </div>
        )

         return(
            <div className="notes">
                {crimes}
             </div>
         )
    }
    clicked = (clicked) =>
    {
        this.setState({
            getDetailsOf : clicked
        })

    }   
}



export default CaseList;