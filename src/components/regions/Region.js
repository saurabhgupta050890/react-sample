import React, {Component} from 'react';
import axios from 'axios';

const REST_COUNTRY_API = 'https://restcountries.eu/rest/v2/';
class Region extends Component {
    constructor(props) {
        super(props);
        this.params = props.match.params;
        this.state = {countries:[]}
    }
    componentDidMount() {
        this.CountryList();
    }
    CountryList() {
        let url = REST_COUNTRY_API + 'region/' + this.params.regionId;
        return axios.get(url).then((res) => {
            if (res.data) {
                console.log(res.data);
                this.setState({countries: res.data});
            }
        });
    }
    render() {
        let countryList = this.state.countries.map((country) => <button key={country.alpha2Code}>{country.name}</button>);
        return (
            <div>{countryList}</div>
        );
    }
}

export default Region;