import React, { Component } from 'react';
import logo from './logo.svg';

class Line extends Component {
  render() {
    return (
      <li className="ph3 pv2 bb b--light-silver">
        <span className='bg-dark-green white fw7 f5 w2 pv2 tc dib'>
          {this.props.short.replace(/^[0]{1,}/, '')}
        </span> 
        <span className='tr pl1 f6 fw5 pl2'>
          {this.props.long
        }</span>
      </li>
    )
  }
}

class LineInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {input: ''};
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  render() {
    const input = this.props.input;
    return (
        <input className='w-25'
               value={input}
               onChange={this.handleChange} />
    );
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
      <ul class="list pl0 ml0 w-25 ba b--light-silver br3 ma2 vh-75 overflow-scroll">
        {lines.map(line =>
          <Line short={line.shortName} long={line.longName} />
        )}
      </ul>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <LineInput />
        <LinesGrid />
      </div>
    );
  }
}

export default App;
