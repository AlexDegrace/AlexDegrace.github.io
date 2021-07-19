import React, { Component, setState} from 'react'
import Card from 'react-bootstrap/Card';
import Sidebar from './Sidebar.js';
import Grid from '@material-ui/core/Grid';
import Legend from './Legend.js'

export default class LegendPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedLegends : []
        };
        this.handlerSorting({
            firstWeapon: "no",
            secondWeapon: "no",
            att: "0",
            dex: "0",
            def: "0",
            speed: "0"
        });
    }


    handlerSorting = (sortingValue) => {
        let wantedLegends = [];
        var i;
        var currentLegend;
        for(i =0; i < this.props.legends.length; i++ ){
            currentLegend = this.props.legends[i];
            if((currentLegend.weapon_one === sortingValue.firstWeapon || currentLegend.weapon_two === sortingValue.firstWeapon || sortingValue.firstWeapon === "no")
            && (currentLegend.weapon_one === sortingValue.secondWeapon || currentLegend.weapon_two === sortingValue.secondWeapon || sortingValue.secondWeapon === "no") 
            && (currentLegend.strength === sortingValue.att || sortingValue.att ==="0")
            && (currentLegend.dexterity === sortingValue.dex || sortingValue.dex ==="0")
            && (currentLegend.defense === sortingValue.def || sortingValue.def ==="0")
            && (currentLegend.speed === sortingValue.speed || sortingValue.speed ==="0"))
            {
                wantedLegends.push(currentLegend);
                console.log(currentLegend)
            }
        }
        this.setState({sortedLegends: wantedLegends});
    }

    render() {
        return (
            <>
            <div className="row">
                <div className="col-2 sidebar" >
                    <Sidebar className="sidebar" onSelectSorting={this.handlerSorting} key="sidebar"></Sidebar>
                </div>
                <div className="col-10">
                    <Grid container spacing={3}>
                        {this.state.sortedLegends.map((legend) => {       
                            return (<><Grid item xs={4}><Legend legendInfo = {legend} key={legend.id}></Legend></Grid></>);
                            })}
                    </Grid>
                </div>
            </div>
            </>
        )
    }
}


