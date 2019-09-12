import React, { Component } from 'react';
import ViewCaseNav from './Navbar/ViewCaseNav.js'

class ViewCase extends Component 
{
    
    render()
    {
        let crimeId = this.props.match.params.caseId;
        return(
            <div>
            <ViewCaseNav crimeId = {crimeId}/>
            <div className="container">

            </div>
            </div>
        )

    }
}

export default ViewCase;