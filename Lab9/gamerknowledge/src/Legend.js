import React, { Component } from 'react';
import {Card, Image} from 'react-bootstrap';

export default class Legend extends Component {

    constructor(props) {
        super(props);
        this.state={
            imgLink : "./src/img/".concat(props.legendInfo.legend_id.toString(),".png")
        }
    }

    render() {
        return (
            <div>
                <Card style={{ margin: '5%' }} bg={"dark"} text={"white"}>
                    <Card.Body>
                        <Card.Title>{this.props.legendInfo.bio_name}</Card.Title>
                        <div className="col" >
                            <div className="row shadow-box-example z-depth-5">
                                <Card.Text>
                                    Strength: {this.props.legendInfo.strength}
                                </Card.Text>
                            </div>
                            <div className="row shadow-box-example z-depth-5">
                                <Card.Text>
                                    Dexterity: {this.props.legendInfo.dexterity}
                                </Card.Text>
                            </div>
                            <div className="row shadow-box-example z-depth-5">
                                <Card.Text>
                                    Defense: {this.props.legendInfo.defense}
                                </Card.Text>
                            </div>
                            <div className="row shadow-box-example z-depth-5">
                                <Card.Text>
                                    Speed: {this.props.legendInfo.speed}
                                </Card.Text>
                            </div>
                        </div>
                        <div className="col">
                        <div className="row shadow-box-example z-depth-5">
                                <Card.Text>
                                    Weapon One: {this.props.legendInfo.weapon_one}
                                </Card.Text>
                            </div>
                            <div  className="row shadow-box-example z-depth-5">
                                <Card.Text>
                                    Weapon Two: {this.props.legendInfo.weapon_two}
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
