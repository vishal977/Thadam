import React, { Component } from 'react';
import '../CSS/policeHome.css';
import CaseList from './CaseList';

class PoliceHome extends Component {
    render() {
        return(
            <div className = "container homeList ">
                <div className="card blue darken-1 headers">
                    <div className="row ">
                        <div className="col s4 white-text  ">
                            <h5>Crime ID</h5>
                        </div>
                        <div className="col s4 white-text ">
                            <h5>Offense Code</h5>
                        </div>
                        <div className="col s4 white-text ">
                            <h5>Location</h5>
                        </div>
                    </div>
                </div>
                <CaseList/>
            </div>
        )
    }
}

export default PoliceHome;