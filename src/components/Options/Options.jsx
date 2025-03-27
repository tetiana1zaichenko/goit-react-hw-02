// import s from "./Options.module.css";

const Options = ({ onClick }) => {
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => onClick("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => onClick("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => onClick("bad")}>Bad</button>
        </li>
        <li>
          <button>Reset</button>
        </li>
      </ul>
    </div>
  );
};

export default Options;
