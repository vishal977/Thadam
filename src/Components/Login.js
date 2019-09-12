import React, { Component } from 'react';
import '../CSS/login.css'
import notesCover from '../Images/notesCover.jpg';

class Login extends Component {
    render()
    {
        return(
            <div className = "container signInCard center">
            <div className="card setCardWidth">
            <div className="card-image ">
              <img src={notesCover} alt="Notes" className = "cardImageHeight"/>
            </div>
          <div className="signInContainer card-content">
              <h4 className="grey-text card-title">Sign In</h4>
              <form onSubmit={this.submitted} className="signInForm">
                  <div className="input-field">
                      <i className="material-icons prefix grey-text text-darken-3">fingerprint</i>
                      <input type="text" id="email" onChange={this.changed}/>
                      <label htmlFor="loginID">Login ID</label>
                  </div>
                  <div className="input-field">
                      <i className="material-icons prefix grey-text text-darken-3">lock</i>
                      <input id="password" type="password" onChange={this.changed}></input>
                      <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field row">
                      <p className="col s4">
                          <label>
                              <input name="dept" type = "radio" value = "police"/>
                              <span>Police</span>
                          </label>
                      </p>
                      <p className="col s4">
                          <label>
                              <input name="dept" type = "radio" value = "forensics"/>
                              <span>Forensics</span>
                          </label>
                      </p>
                      <p className="col s4">
                          <label>
                              <input name="dept" type = "radio" value = "hospital"/>
                              <span>Hospital</span>
                          </label>
                      </p>
                  </div>
                  <div className="input-field center card-action">
                      <button className="btn grey darken-3">Sign In!</button>
                  </div>
              </form>
            </div>
          </div>
            </div>
        )
    }
}

export default Login;