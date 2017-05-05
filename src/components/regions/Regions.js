import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Region from './Region';

const regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];

class Regions extends Component {
    constructor(props) {
        super(props);
        this.match = props.match;
    }
    render() {
        let regionButtons = regions.map((region, index) => 
            <button key={index}> <Link to={`${this.match.url}/${region}`}> {region.toUpperCase()} </Link> </button>);
        return (
            <div>
                {regionButtons}
                <hr />
                <Route path={`${this.match.url}/:regionId`} component={Region}/>
                <Route exact path={this.match.url} render={() => (
                    <h3> Select a region to load Countries </h3>
                )}/>

            </div>
        );
    }
}

export default Regions;