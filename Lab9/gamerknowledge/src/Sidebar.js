import React,{ useState, Component } from 'react'
import {
    ProSidebar,
    Menu,
    SubMenu,
  } from 'react-pro-sidebar';
import RangeSlider from 'react-bootstrap-range-slider';
import {Button} from 'react-bootstrap';



var sorting = {
    firstWeapon: "no",
    secondWeapon: "no",
    att: 0,
    dex: 0,
    def: 0,
    speed: 0
};

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          att :"0",
          dex :"0",
          def :"0",
          speed :"0"
        };
    }

    handleSortingChange = () => {
        sorting.att = this.state.att.toString();
        sorting.dex = this.state.dex.toString();
        sorting.def = this.state.def.toString();
        sorting.speed = this.state.speed.toString();
        this.props.onSelectSorting(sorting);            
    }

    onFirstWeaponChange(event) {
        sorting.firstWeapon = event.target.value;
    }

    onSecondWeaponChange(event) {
        sorting.secondWeapon = event.target.value;
    }


    render() {
        return (
            <ProSidebar style={{minHeight:"1080px"}}>
            <Menu iconShape="square">
                <SubMenu title="First Weapon">
                    <div onChange={this.onFirstWeaponChange}>
                        <input type="radio" id="noWeapon1" name="firstWeapon" value="no"/>
                        <label for="noWeapon1">No Second Weapon</label><br/>
                        <input type="radio" id="grapplehammer1" name="firstWeapon" value="Hammer"/>
                        <label for="grapplehammer1">Grapple Hammer</label><br/>
                        <input type="radio" id="sword1" name="firstWeapon" value="Sword"/>
                        <label for="sword1">Sword</label><br/>
                        <input type="radio" id="blasters1" name="firstWeapon" value="Pistol"/>
                        <label for="blasters1">Blasters</label><br/>
                        <input type="radio" id="rocketlance1" name="firstWeapon" value="RocketLance"/>
                        <label for="rocketlance1">Rocket Lance</label><br/>
                        <input type="radio" id="spear1" name="firstWeapon" value="Spear"/>
                        <label for="spear1">Spear</label><br/>
                        <input type="radio" id="katars1" name="firstWeapon" value="Katar"/>
                        <label for="katars1">Katars</label><br/>
                        <input type="radio" id="axe1" name="firstWeapon" value="Axe"/>
                        <label for="axe1">Axe</label><br/>
                        <input type="radio" id="bow1" name="firstWeapon" value="Bow"/>
                        <label for="bow1">Bow</label><br/>
                        <input type="radio" id="gauntlets1" name="firstWeapon" value="Fists"/>
                        <label for="gauntlets1">Gauntlets</label><br/>
                        <input type="radio" id="scythe1" name="firstWeapon" value="Scythe"/>
                        <label for="scythe1">Scythe</label><br/>
                        <input type="radio" id="cannon1" name="firstWeapon" value="Cannon"/>
                        <label for="cannon1">Cannon</label><br/>
                        <input type="radio" id="orb1" name="firstWeapon" value="Orb"/>
                        <label for="orb1">Orb</label><br/>
                        <input type="radio" id="greatsword1" name="firstWeapon" value="Greatsword"/>
                        <label for="greatsword1">Greatsword</label><br/>
                    </div>
                </SubMenu>
                <SubMenu title="Second Weapon">
                    <div onChange={this.onSecondWeaponChange}>
                        <input type="radio" id="noWeapon2" name="secondWeapon" value="no"/>
                        <label for="noWeapon2">No Second Weapon</label><br/>
                        <input type="radio" id="grapplehammer2" name="secondWeapon" value="Hammer"/>
                        <label for="grapplehammer2">Grapple Hammer</label><br/>
                        <input type="radio" id="sword2" name="secondWeapon" value="Sword"/>
                        <label for="sword2">Sword</label><br/>
                        <input type="radio" id="blasters2" name="secondWeapon" value="Pistol"/>
                        <label for="blasters2">Blasters</label><br/>
                        <input type="radio" id="rocketlance2" name="secondWeapon" value="RocketLance"/>
                        <label for="rocketlance2">Rocket Lance</label><br/>
                        <input type="radio" id="spear2" name="secondWeapon" value="Spear"/>
                        <label for="spear2">Spear</label><br/>
                        <input type="radio" id="katars2" name="secondWeapon" value="Katar"/>
                        <label for="katars2">Katars</label><br/>
                        <input type="radio" id="axe2" name="secondWeapon" value="Axe"/>
                        <label for="axe2">Axe</label><br/>
                        <input type="radio" id="bow2" name="secondWeapon" value="Bow"/>
                        <label for="bow2">Bow</label><br/>
                        <input type="radio" id="gauntlets2" name="secondWeapon" value="Fists"/>
                        <label for="gauntlets2">Gauntlets</label><br/>
                        <input type="radio" id="scythe2" name="secondWeapon" value="Scythe"/>
                        <label for="scythe2">Scythe</label><br/>
                        <input type="radio" id="cannon2" name="secondWeapon" value="Cannon"/>
                        <label for="cannon2">Cannon</label><br/>
                        <input type="radio" id="orb2" name="secondWeapon" value="Orb"/>
                        <label for="orb2">Orb</label><br/>
                        <input type="radio" id="greatsword2" name="secondWeapon" value="Greatsword"/>
                        <label for="greatsword2">Greatsword</label><br/>
                    </div>
                </SubMenu>
                <SubMenu title="Attack">
                <RangeSlider value={this.state.att} max={10} onChange={value => this.setState({ att: value.target.value })}/>
                </SubMenu>
                <SubMenu title="Dexterity">
                <RangeSlider value={this.state.dex} max={10} onChange={value => this.setState({ dex: value.target.value })}/>
                </SubMenu>
                <SubMenu title="Defense ">
                <RangeSlider value={this.state.def} max={10} onChange={value => this.setState({ def: value.target.value })}/>
                </SubMenu>
                <SubMenu title="Speed">
                <RangeSlider value={this.state.speed} max={10} onChange={value => this.setState({ speed: value.target.value })}/>
                </SubMenu>
                <div class="text-center"> 
                    <Button variant="secondary" id="sortButton" onClick={this.handleSortingChange}>Sort Legends</Button>
                </div>
            </Menu>
        </ProSidebar>
        )
    }
}

