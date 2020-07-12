import React from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

class Square extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        className="square"
        style={squareStyle}
        onClick={this.props.onclick}
        >
        {this.props.value}
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: Array(9).fill(""),
      symbol: "X"
    }
    this.playerValue = this.playerValue.bind(this)
    this.reset = this.reset.bind(this)
  }
  playerValue(i) {
    if(this.state.symbol === "X")
    {
      this.setState({value: this.state.value.fill("O", i, i+1)
      , symbol: "O"})
    }
    else if(this.state.symbol === "O")
    {
      this.setState({value: this.state.value.fill("X", i, i+1), symbol: "X"})
    }

    else this.setState({value: [...this.state]
    })
    // else
      // this.setState({value : value.map(item => item.key = "X"), symbol: "X"})
      // this.state.value.map(item => item.key("X"))
      // // this.setState({value : value.map(item => item.key = "O"), symbol: "O"})
      // this.setState({symbol: "X"})
  }
  reset() {
    this.setState({value : ""})
  }
  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div className="status" style={instructionsStyle}>Next player: X</div>
        <div className="winner" style={instructionsStyle}>Winner: None</div>
        <button style={buttonStyle} onClick={this.reset}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square onclick={this.playerValue(0)} value={this.state.symbol}/>
            <Square onclick={this.playerValue(1)} value={this.state.symbol} />
            <Square onclick={this.playerValue(2)} value={this.state.symbol} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square onclick={this.playerValue(3)} value={this.state.symbol} />
            <Square onclick={this.playerValue(4)} value={this.state.symbol} />
            <Square onclick={this.playerValue(5)} value={this.state.symbol} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square onclick={this.playerValue(6)} value={this.state.symbol} />
            <Square onclick={this.playerValue(7)} value={this.state.symbol} />
            <Square onclick={this.playerValue(8)} value={this.state.symbol} />
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;