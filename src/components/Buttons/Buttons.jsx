import { Component } from 'react';

class Buttons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  add = ({ target }) => {
    const { name } = target;
    this.setState(prevState => {
      return { [name]: prevState[target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Number(
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { add } = this;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <>
        <button name="good" type="button" onClick={add}>
          Good
        </button>
        <button name="neutral" type="button" onClick={add}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={add}>
          Bad
        </button>
        <div>
          <p>Statistics</p>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positive} %</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Buttons;
