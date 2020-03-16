import React, { Component } from 'react';
import './app.css'

class App extends Component{
  state = {
    inputs: "",
    answer: ""
  }

  render(){
   const handleClick = (e)=>{
      let {inputs} = this.state;
      this.setState({inputs: inputs.concat(e.target.value)})
      // console.log(e.target.value)
    }
    const calc = () => {
      this.setState({answer: eval(this.state.inputs)})
    }
    const clear = ()=>{

      this.setState({inputs: ""})
      this.setState({answer: ""})
    }

    return(
      <div>
      <h1>{this.state.inputs}</h1>
    <h4>Answer: {this.state.answer}</h4>

      <button onClick={handleClick} value = "1">1</button>
      <button onClick={handleClick} value = "2">2</button>
      <button onClick={handleClick} value = "3">3</button>
      <button onClick={handleClick} value = "-" className="arith">-</button>
      <button onClick={handleClick} value = "+" className="arith">+</button>
      <br/>
      <button onClick={handleClick} value = "4">4</button>
      <button onClick={handleClick} value = "5">5</button>
      <button onClick={handleClick} value = "6">6</button>
      <button onClick={handleClick} value = "/" className="arith">/</button>
      <button onClick={handleClick} value = "*" className="arith">*</button>
      <br/>
      <button onClick={handleClick} value = "7">7</button>
      <button onClick={handleClick} value = "8">8</button>
      <button onClick={handleClick} value = "9">9</button>
      <button onClick={handleClick} value = "0" className="arith">0</button>
      <button onClick={calc} className="arith">=</button>
      <br/>
      <button onClick={clear} className="clear">AC</button>

        {/* <Button /> */}
      </div>
    )
  }
}

export default App;