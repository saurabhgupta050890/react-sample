import React, {Component} from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={ this.props.flag || 'http://bulma.io/images/placeholders/1280x960.png'} alt="Country Flag" />
                    </figure>
                </div>
                <div className="card-content">
                    {this.props.name || 'Click in country to display its information'}
                </div>
                {/*<div> {JSON.stringify(this.props)}</div>*/}
            </div>
        );
    }
}

export default Country;