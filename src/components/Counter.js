import React from 'react';
import Buttons from './buttons';
// import 'Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <h1 className="">Please leave feedback</h1>
        <Buttons
          onGoodFeedback={this.goodFeedback}
          onNeutralFeedback={this.neutralFeedback}
          onBadFeedback={this.badFeedback}
        />
        <h2>Statistics</h2>
        <ul className="Statistics__list">
          <li>
            <span className="Statistics__value">Good:{this.state.good}</span>
          </li>
          <li>
            <span className="Statistics__value">
              Neutral:{this.state.neutral}
            </span>
          </li>
          <li>
            <span className="Statistics__value">Bad:{this.state.bad}</span>
          </li>
          <li>
            <span className="Statistics__value">Total:</span>
          </li>
          <li>
            <span className="Statistics__value">Positive feedback:</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Counter;
