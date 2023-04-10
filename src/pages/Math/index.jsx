import React, { useEffect, useState } from "react";
import { FetchMath } from "../../redux/Math/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Math = () => {
  const dispatch = useDispatch();
  const { Questions, loading } = useSelector((state) => state.mathReducer);
  const [answers, setAnswers] = useState(
    Questions.reduce((acc, question) => ({ ...acc, [question.id]: "" }), {})
  );
  const [mark, setMark] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
    console.log(Questions);
    let newMark = 0;
    Questions.forEach((question) => {
      if (answers[question.id] === question.rightanswer) {
        newMark++;
      }
    });
    setMark(newMark);
    setIsDone(true);
  };

  function handleRetakeQuiz() {
    setIsRefresh(true);
  }
  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevState) => ({ ...prevState, [questionId]: answer }));
  };

  useEffect(() => {
    dispatch(FetchMath());
    setIsDone(false);
    setIsRefresh(false);
    setMark(0);
    setAnswers([]);
  }, [isRefresh]);
  if (loading)
    return (
      <>
        <div>
          <p className={styles.title}>Math Quiz</p>
        </div>
        <p>Loading Quiz...</p>
      </>
    );
  return (
    <div>      <Link to={'/'}> <button>Back</button></Link>

      <div className={styles.topDiv}>
      <p className={styles.title}>Math Quiz</p>
      </div>
      <form className={styles.mathForm} onSubmit={handleSubmit}>
        {isDone ? (
          <>
            <p className={styles.mark}>Mark : {mark} / 10 </p>
            <button type="button" onClick={handleRetakeQuiz}>
              Retake Quiz
            </button>
          </>
        ) : (
          <>
            <div className={styles.questionContainer}>
              {Questions?.map((question) => {
                return (
                  <div className={styles.divQuestion} key={question.id}>
                    <p className={styles.question}>{question.question}</p>
                    {question.choices.map((choice) => {
                      return (
                        <div>
                          <input
                            type="radio"
                            id={choice}
                            name={question.id}
                            value={choice}
                            checked={answers[question.id] === choice}
                            onChange={(e) =>
                              handleAnswerChange(question.id, e.target.value)
                            }
                            required
                          />
                          <label htmlFor="choice">{choice}</label>
                          <br></br>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Math;
