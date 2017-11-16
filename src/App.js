import React, { Component } from 'react';
import logo from './logo.svg';

class Line extends Component {
  render() {
    return (
      <button className="br2 ph3 pv2 mb2 dib white bg-dark-gray w-20">
        {this.props.short.replace(/[0]{1,}/, '')} {this.props.long}
      </button>
    )
  }
}

class LinesGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lines: []
    }
  }

  componentDidMount() {
    fetch('https://ddot-proxy-test.herokuapp.com/api/where/routes-for-agency/DDOT.json?key=BETA')
      .then(response => response.json())
      .then(d => this.setState({ lines: d.data.list}))
  }

  render() {
    const { lines } = this.state;

    return (
      <div className="flex flex-wrap">
        {lines.map(line =>
          <Line short={line.shortName} long={line.longName} />
        )}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <LinesGrid />
      </div>
    );
  }
}

export default App;
