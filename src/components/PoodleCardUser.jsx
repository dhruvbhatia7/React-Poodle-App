import React from 'react';
import './PoodleCard.css';


class PoodleCardUser extends React.PureComponent {
    render() {
        return (
           <div className="poodle-details">
                <img className="poodle-img" alt="" src={this.props.image}/>
                <div className="poodle-name">{this.props.name}</div>  
            </div>

        ); 
    }
}

export default PoodleCardUser;