import s from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad }) => {
  return (
    <div>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total</li>
        <li>Positive</li>
      </ul>
    </div>
  );
};

export default Feedback;
