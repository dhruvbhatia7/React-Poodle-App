import React from 'react';
import './Adopt.css';

class Adopt extends React.PureComponent {

    render() {
        const { match: { params } } = this.props;
        return(
            <div className="adopt-container">
                <span>Thank you for submitting your request to adopt our poodle <b>{params.name}</b></span>
            </div>
        );
    }
}

export default Adopt;