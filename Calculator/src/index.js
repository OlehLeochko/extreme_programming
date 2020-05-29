import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: null,
      num2: null,
      op: null
    };
  }
  clearing = () => {
    this.setState({
      num1: null,
      op: null,
      num2: null
    });
  };
  num = n => {
    if (this.state.op == null) {
      if (this.state.num1 == null) {
        this.setState({
          num1: n,
          num2: null
        });
      } else {
        this.setState({
          num1: this.state.num1 + n.toString(),
          num2: null
        });
      }
    } else {
      if (this.state.num2 == null) {
        this.setState({ num2: n });
      } else {
        this.setState({ num2: this.state.num2 + n.toString() });
      }
    }
  };
  opr = opr => {
    this.setState({
      op: opr
    });
  };
  equal = () => {
    switch (this.state.op) {
      case "+":
        this.setState({
          num2: null,
          op: null,
          num1: parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10)
        });
        break;
      case "-":
        this.setState({
          num2: null,
          op: null,
          num1: this.state.num1 - this.state.num2
        });
        break;
      case "/":
        this.setState({
          num2: null,
          op: null,
          num1: this.state.num1 / this.state.num2
        });
        break;
      case "x":
        this.setState({
          num2: null,
          op: null,
          num1: this.state.num1 * this.state.num2
        });
        break;
      default:
        this.clearing();
    }
  };
  render() {
    return (
      <div className="App">
        <div id="ans">
          <h2>
            {this.state.num1} {this.state.op} {this.state.num2}
          </h2>
        </div>
        <div id="new" />
        <div id="num">
          <button onClick={this.clearing} className="clear">
            clear
          </button>
          <button onClick={() => this.opr("+")} className="one">
            +
          </button>
          <br />
          <button onClick={() => this.num(1)} className="one">
            1
          </button>
          <button onClick={() => this.num(2)} className="one">
            2
          </button>
          <button onClick={() => this.num(3)} className="one">
            3
          </button>
          <button onClick={() => this.opr("-")} className="one">
            -
          </button>
          <br />
          <button onClick={() => this.num(4)} className="one">
            4
          </button>
          <button onClick={() => this.num(5)} className="one">
            5
          </button>
          <button onClick={() => this.num(6)} className="one">
            6
          </button>
          <button onClick={() => this.opr("/")} className="one">
            /
          </button>
          <br />
          <button onClick={() => this.num(7)} className="one">
            7
          </button>
          <button onClick={() => this.num(8)} className="one">
            8
          </button>
          <button onClick={() => this.num(9)} className="one">
            9
          </button>
          <button onClick={() => this.opr("x")} className="one">
            x
          </button>
          <br />
          <button onClick={() => this.num(0)} className="clear">
            0
          </button>
          <button onClick={this.equal} className="one">
            =
          </button>
          <br />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
