import React from 'react';
import { Button } from 'reactstrap';
import './PoodleDetail.css';

class PoodleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            poodles : [
                {
                    name: 'Fluffy',
                    imgsrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/fluffy.jpg',
                    vaccinations: 'All done',
                    background: 'Fluffy is a poodle who is aged 3. Fluffy was previously owned by an elderly couple in \
                    Belgium but after they died, Fluffy was put in a shelter. Fluffy is energetic and full of life. Fluffy \
                    loves beach balls and is adept at dancing.'

                },
                {
                    name: 'Scruffy',
                    imgsrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/scruffy.jpg',
                    vaccinations: 'All done',
                    background: 'Scruffy is a poodle who is aged 3. \n\nScruffy was previously owned by an elderly couple in \
                    Belgium but after they died, Scruffy was put in a shelter. \n\nScruffy is energetic and full of life. \n\nScruffy \
                    loves beach balls and is adept at dancing.'
                },
                {
                    name: 'Bozo',
                    vaccinations: 'All done',
                    imgsrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/bonzo.jpg',
                    background: 'Bozo is a poodle who is aged 3. \n\nScruffy was previously owned by an elderly couple in \
                    Belgium but after they died, Scruffy was put in a shelter. \n\nScruffy is energetic and full of life. \n\nScruffy \
                    loves beach balls and is adept at dancing.'
                },
                {
                    name: 'Sir-Albert',
                    imgsrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/Sir%20Albert.jpg'
                },
                {
                    name: 'Cupcake',
                    imgsrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/cupcake.jpg'
                },
                {
                    name: 'Lolo',
                    imgsrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/lolo.jpg'
                }
            ]
        }
    }
    render() {
        const { match: { params } } = this.props;
        return (
            <div>
            {this.state.poodles.map((obj) => {
                if (obj.name === params.name) {
                    console.log("image src is " + obj.imgsrc);
                    return (
                        <div className="poodle-info" key={obj.name}>
                            <img alt="" className="poodle-detail-img" src={obj.imgsrc}/>
                            <div className="poodle-background">
                                {obj.background}
                            </div>
                            <Button className="adopt-btn" color="primary">Adopt Now</Button>
                            
                        </div>
            
                    ); 
                }
            })}
            </div>
        );
        
    }
}

export default PoodleDetail;