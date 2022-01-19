import React from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

// -----------------------------

// class App extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   goodFeedback = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   neutralFeedback = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   badFeedback = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.floor((this.state.good * 100) / this.countTotalFeedback());
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className="Counter">
//         <h1 className="">Please leave feedback</h1>
//         <Buttons
//           onGoodFeedback={this.goodFeedback}
//           onNeutralFeedback={this.neutralFeedback}
//           onBadFeedback={this.badFeedback}
//         />
//         <h2>Statistics</h2>
//         <ul className="Statistics__list">
//           <li>
//             <span className="Statistics__value">Good:{good}</span>
//           </li>
//           <li>
//             <span className="Statistics__value">
//               Neutral:{neutral}
//             </span>
//           </li>
//           <li>
//             <span className="Statistics__value">Bad:{bad}</span>
//           </li>
//           <li>
//             <span className="Statistics__value">Total:{total}</span>
//           </li>
//           <li>
//             <span className="Statistics__value">Positive feedback:{percentage}%</span>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// };

// ================================

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
