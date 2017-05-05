import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Region from './Region';

const regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];

class Regions extends Component {
    constructor(props) {
        super(props);
        this.match = props.match;
    }
    render() {
        let regionButtons = regions.map((region, index) => 
                <NavLink className="button is-primary is-outlined" style={{margin:'5px 10px 5px 0px'}} activeClassName="is-active" to={`${this.match.url}/${region}`} key={index}> 
                    {region.toUpperCase()} 
                </NavLink> 
        );
        return (
            <div>
                <div className="block has-shadow" style={{marginTop: '15px', boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1)'}}> {regionButtons} </div>
                <Route path={`${this.match.url}/:regionId`} component={Region}/>
                <Route exact path={this.match.url} render={() => (
                    <h3> Select a region to load Countries </h3>
                )}/>
            </div>
        );
    }
}

export default Regions;