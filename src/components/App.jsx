import { useState} from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "components/Notification/Notification"

export function App() {
  const [good, incrementGood] = useState(0);
  const [neutral, incrementNeutral] = useState(0);
  const [bad, incrementBad] = useState(0);
  
  const options = ['good', 'bad', 'neutral']

  function handleIncrement(option) {
    switch (option) {
      case 'good':
        incrementGood(prevState => prevState + 1)
        break;
      
      case 'neutral':
        incrementNeutral(prevState => prevState + 1)
        break;
      
      case 'bad':
        incrementBad(prevState => prevState + 1)
        break;
      
      default: throw new Error(`This ${option} doesn't exist`)
    }
  }

  function total() {
    return good + neutral + bad;
  }

  function positivePercentage() {
    return good / total() * 100;
  }

    return <section>
    <Section title="Please leave feedback">
    <FeedbackOptions onLeaveFeedback={handleIncrement} options={options} />
    </Section>
    <Section title="Statistics"> 
    {total() === 0 ? <Notification/> : <Statistics good={good} bad={bad} neutral={neutral} total={total} positive={positivePercentage} />} 
    </Section>
    </section>
};
 