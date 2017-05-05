import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

const regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

class Regions extends Component {
    constructor(data) {
        super();
        this.match = data.match;
    }
    render() {
        let regionButtons = regions.map((region, index) => 
            <button key={index}> <Link to={`${this.match.url}/${region}`}> {region.toUpperCase()} </Link> </button>);
        return (
            <div>
                {regionButtons}
                <hr />
                <Route path={`${this.match.url}/:topicId`} component={Topic}/>
                <Route exact path={this.match.url} render={() => (
                    <h3> Select a region to load Countries </h3>
                )}/>

            </div>
        );
    }
}

export default Regions;