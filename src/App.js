import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: '',
      computer: '',
      arr: ['rock', 'paper', 'scissor']
    }
  }

  setPlayerRock = () => {
    this.setState({player: 'rock'})
    this.setState({computer: this.state.arr[Math.floor((Math.random() * 3))]})
  }

  setPlayerScissor = () => {
    this.setState({player: 'scissor'})
    this.setState({computer: this.state.arr[Math.floor((Math.random() * 3))]})
  }

  setPlayerPaper = () => {
    this.setState({player: 'paper'})
    this.setState({computer: this.state.arr[Math.floor((Math.random() * 3))]})
  }

  renderWinner = () => {
    const player = this.state.player;
    const computer = this.state.computer;
    if (
      (player === 'scissor' && computer === 'paper') || 
      (player === 'paper' && computer === 'rock') || 
      (player === 'rock' && computer === 'scissor') ){
      return 'You Win!'
    } else if (
      (player === 'scissor' && computer === 'rock') || 
      (player === 'paper' && computer === 'scissor') || 
      (player === 'rock' && computer === 'paper')
    ){
      return 'You Lose'
    } else if(!(player.length)){
      return ''
    }else {
      return 'Tie'
    }
  }

  render(){ 
    return (
      <div className="App">
        <button onClick={this.setPlayerRock}>Rock</button>
        <button onClick={this.setPlayerScissor}>Scissor</button>
        <button onClick={this.setPlayerPaper}>Paper</button>
        <h1>{this.state.player.length === 0 ? 'Choose one of the above' : `You: ${this.state.player} vs Computer: ${this.state.computer}`}</h1>
        
        <h1>
          {this.renderWinner()}
        </h1>
      </div>
    )
  }
}

export default App;
