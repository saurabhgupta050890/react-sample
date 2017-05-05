import React, {Component} from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image" />
                    </figure>
                </div>
                <div className="card-content">

                </div>
            </div>
        );
    }
}

export default Country;