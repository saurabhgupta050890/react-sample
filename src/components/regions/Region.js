import React, {Component} from 'react';
import axios from 'axios';

import Country from '../country/Country';

const REST_COUNTRY_API = 'https://restcountries.eu/rest/v2/';
class Region extends Component {
    constructor(props) {
        super(props);
        this.params = props.match.params;
        this.selectCountry = {};
        this.state = {countries:[]};
        this.loadCountryDetails = this.loadCountryDetails.bind(this);
    }
    componentDidMount() {
        this.CountryList();
    }

    componentWillReceiveProps(nextProps) {
        if (this.params.regionId !== nextProps.match.params.regionId) {
            this.params = nextProps.match.params;
            this.CountryList();
        }
    }
    CountryList() {
        let url = REST_COUNTRY_API + 'region/' + this.params.regionId;
        return axios.get(url).then((res) => {
            if (res.data) {
                this.setState({countries: res.data});
            }
        });
    }
    loadCountryDetails(country) {
        this.selectCountry = country;
    }
    render() {
        let countryList = this.state.countries.map((country) => 
                <li key={country.alpha2Code} onClick={() => this.loadCountryDetails(country)}>
                    <a> {country.name} </a>
                </li>
            );
        return (
            <div className="columns">
                <div className="column is-4">
                    <aside className="menu"><ul className="menu-list"> {countryList} </ul> </aside>
                </div>
                <div className="column is-7">
                    <Country country={this.selectCountry}></Country>
                </div>
            </div>
        );
    }
}

export default Region;