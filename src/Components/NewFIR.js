import React, { Component } from 'react';
import '../CSS/newFIR.css';

class NewFIR extends Component
{
    render()
    {
        return(
            <div className = "container">
                <div className="row">
                    <div className="col s6">
                        <div className="card reportCard">
                            <div className="card-title cardTitle">
                                <h4 className = "cardTitle">New FIR</h4>
                            </div>
                            <div className="card-content">
                                <form onSubmit="">
                                    <div className="input-field">
                                        <input type="text" id="Date" onChange={this.changed}/>
                                        <label htmlFor="email">Date</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="time" onChange={this.changed}/>
                                        <label htmlFor="email">Time</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="offCode" onChange={this.changed}/>
                                        <label htmlFor="offCode">Offense Code</label>
                                    </div>

                                    <div className="input-field center card-action">
                                        <button className="btn grey darken-3">
                                            Create!
                                        </button>
                                    </div>
                                    
                                </form> 
                            </div>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="card reportCard">
                            <div className="card-title cardTitle">
                                <h4 className = "cardTitle">Enter Description</h4>
                            </div>
                            <div className="card-content">
                                <div className="input-field ">
                                    <textarea id = "report"  className = "textAreaHeight"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewFIR;