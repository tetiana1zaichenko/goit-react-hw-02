import s from "./Options.module.css";

const Options = ({ onClick, total, onReset }) => {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <button className={s.item} onClick={() => onClick("good")}>
            Good
          </button>
        </li>
        <li>
          <button className={s.item} onClick={() => onClick("neutral")}>
            Neutral
          </button>
        </li>
        <li>
          <button className={s.item} onClick={() => onClick("bad")}>
            Bad
          </button>
        </li>
        {total > 0 && (
          <li>
            <button className={s.item} onClick={onReset}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
