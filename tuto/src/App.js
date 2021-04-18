
import React, { Component} from 'react';
import Mycars from './components/Mycars';
import './App.css';

class  App extends Component {
  state ={ 
    title :' Mon catalogue'
}
changeTitle =(e) => {
  
  this.setState({title:' Mon nouveux title'})
}
changeViaparam =(title) => {
  this.setState({
   title : title
  })
}
changeViaBind = (param) => {
  this.setState({
    title : param
   })
}
changeViaInput = (e) => {
  this.setState({
    title : e.target.value
   })
}
  render() {
    return (
      <div className="App">
       <Mycars title={this.state.title}/>
       <button onClick={this.changeTitle}>okok</button>
       <button onClick={() => this.changeViaparam('Titre para')}>via para</button>
       <button onClick={this.changeViaBind.bind(this,'titre via bind')}>okok</button>
      <input type="text" onChange={this.changeViaInput} value={this.state.title}/>
      </div>
    );
  }

  }
 

export default App;
