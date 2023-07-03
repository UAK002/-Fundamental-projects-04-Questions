import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  //   const [showInfo, setShowInfo] = useState(true);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* <p>{info}</p> */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
