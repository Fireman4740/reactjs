import React, { Component} from 'react';
import Cars from './Cars';
class MyCars extends Component {

    noCopy = () => {
        alert("Please noCopy")
    }
    addStyle = (e) => {
        if (e.target.classList.contains('slyled')){
            e.target.classList.remove('slyled')
        }else
        e.target.classList.add('slyled')
    }

    state = {
        voiture: [
            { name : 'Ford', color : 'red', year : 2000, age: null},
            { name : 'Porche', color : 'red', year : 2010, age: null},
            { name : 'Merco', color : 'red', year : 2002,age: null},
        ],
        title: ' titre 2 '
    }
    addTenYears = () => {
        const updateStae = this.state.voiture.map((param) => {
            return param.year -=10;
        })
        this.setState({
            updateStae

        })
    }
    
    Agecars = () => {
        const date = new Date().getFullYear();
        const y = this.state.voiture.map((param) => { 
            return  param.age =date - param.year;
        });
        this.setState({
            y
        })
        console.log(y)
    }
    
    render() {
        
        const date = new Date().getFullYear();
        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
                <h1 >{this.state.title}</h1>
                <p onCopy={this.noCopy}>lorem ipsum dolor sit amet, consectetur</p>

                <button onClick={this.addTenYears}>+ 10</button>
                <button onClick={this.Agecars}>Afficher age</button>
                {/* <Cars age = {date-this.state.voiture[0].year} year= {this.state.voiture[0].year} color={this.state.voiture[0].color} >{this.state.voiture[0].name}</Cars>
                <Cars age = {date-this.state.voiture[1].year}year= {this.state.voiture[1].year} color={this.state.voiture[1].color}>{this.state.voiture[1].name}</Cars>
                <Cars age = {date-this.state.voiture[2].year}year= {this.state.voiture[2].year} color={this.state.voiture[2].color}>{this.state.voiture[2].name}</Cars> */}

                {
                    this.state.voiture.map((voiture, index) => {
                        return (
                            <Cars key = {index} color={voiture.color} name={voiture.name} age={date-voiture.year}></Cars>
                        )
                    })
                }
    
            </div>
        )
    }
}
export default MyCars;