import React, { Component } from 'react';

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
        ]
      }

    render() {
        var arr = [];
        var details = this.state.details;
        for (var key in details) {
            arr.push(details[key]);
        }
        console.log(arr);
        const crimes = arr.length ?
        (
            arr.map(arr => 
            {
            return ( 
                <div className = "card">
                <div className="row ">
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
}

export default CaseList;