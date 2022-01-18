import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../buttons';


class Section extends React.Component {
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

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => { 
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

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
            <span className="Statistics__value">Good:{good}</span>
          </li>
          <li>
            <span className="Statistics__value">
              Neutral:{neutral}
            </span>
          </li>
          <li>
            <span className="Statistics__value">Bad:{bad}</span>
          </li>
          <li>
            <span className="Statistics__value">Total:{total}</span>
          </li>
          <li>
            <span className="Statistics__value">Positive feedback:{percentage}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Section;

Section.propTypes = {

};
