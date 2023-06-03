import { Component } from "react";
import Section from './Section/Section';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  onLeaveFeedback = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () =>{
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}>
        </FeedbackOptions>
        </Section>
        {
          this.countTotalFeedback() 
          ? <Section title='Statistics'>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}>
              </Statistics>
            </Section>
          : <Notification message="There is no feedback" />
        }
        </>
)}};


export default App;