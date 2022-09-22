import { Component } from 'react';
import Buttons from './Buttons/Buttons';

class App extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // add = () => {
  //   this.setState({ good: this.state.good + 1 });
  // };

  render() {
    // const { good, neutral, bad } = this.state;
    // const { add } = this;
    return (
      <>
        <Buttons init={0} />
        {/* {(good, neutral, bad)}
        <button type="button" onClick={add}>
          good
        </button>
        <button type="button" onClick={add}>
          neutral
        </button>
        <button type="button" onClick={add}>
          bad
        </button> */}
      </>
    );
  }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  // statIncrease = ({ target }) => {
    // const { name } = target;
    // this.setState(prevState => {
    //   return { [name]: prevState[target.name] + 1 };
    // });
  // };

  // render() {
  //   const { good, neutral, bad } = this.state;

  //   return (
  //     <div className="App">
  //       <p>Please leave your feedback</p>
  //       <div>
  //         <button name="good" type="button" onClick={this.statIncrease}>
  //           good
  //         </button>
  //         <button name="neutral" type="button" onClick={this.statIncrease}>
  //           neutral
  //         </button>
  //         <button name="bad" type="button" onClick={this.statIncrease}>
  //           bad
  //         </button>
  //       </div>
        // <div>
        //   <p>Statistics</p>
        //   <ul>
        //     <li>Good: {good}</li>
        //     <li>Neutral: {neutral}</li>
        //     <li>Bad: {bad}</li>
        //   </ul>
        // </div>
  //     </div>
  //   );
  // }
}
export { App };
