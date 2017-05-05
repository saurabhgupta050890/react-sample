import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <article className="message is-primary" style={{marginTop: '25px'}}>
                <div className="message-header"> COUNTRY APP </div>
                <div className="message-body">
                    This is Country Details App. It shows details of countries based on regions
                </div>
            </article>
            
        );
    }
}

export default Home;