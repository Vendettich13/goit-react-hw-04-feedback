import { useState} from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "components/Notification/Notification"
export const App = () => {
  const [good, incrementGood] = useState(0);
  const [neutral, incrementNeutral] = useState(0);
  const [bad, incrementBad] = useState(0);
  
  const handleChangeGood = () => {
      incrementGood(prevState => prevState + 1)
  }
  const handleChangeNeutral = () => {
      incrementNeutral(prevState => prevState + 1)
  }
  const handleChangeBad = () => {
      incrementBad(prevState => prevState + 1)
  }
  const total = () => {
    return good + neutral + bad;
  }
  const positivePercentage = () => {
    return good / total() * 100;
  }

    return <section>
    <Section title="Please leave feedback">
    <FeedbackOptions incrementGood={handleChangeGood} incrementBad={handleChangeBad} incrementNeutral={handleChangeNeutral} />
    </Section>
    <Section title="Statistics"> 
    {total() === 0 ? <Notification/> : <Statistics good={good} bad={bad} neutral={neutral} total={total} positive={positivePercentage} />} 
    </Section>
    </section>
};
 