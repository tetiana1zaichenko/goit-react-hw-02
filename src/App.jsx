import { useState } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  // const totalFeedback = ${feedback.good} + ${feedback.neutral} + ${feedback.bad};

  return (
    <>
      <Description></Description>
      <Options onClick={updateFeedback}></Options>
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      ></Feedback>
    </>
  );
};

export default App;
