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

    render() {

        return (
            <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>
                <p onCopy={this.noCopy}>lorem ipsum dolor sit amet, consectetur</p>

                <Cars color="blue">Ford</Cars>
                <Cars>Merco</Cars>
                <Cars></Cars>

                
    
            </div>
        )
    }
}
export default MyCars;