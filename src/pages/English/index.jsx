import React, { useEffect, useState } from "react";
import { FetchEnglish } from "../../redux/English/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const English = () => {
  const dispatch = useDispatch();
  const { Questions, loading } = useSelector((state) => state.englishReducer);
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

  useEffect(() => {
    dispatch(FetchEnglish());
    setIsDone(false);
    setIsRefresh(false);
    setMark(0);
    setAnswers({});
  }, [isRefresh]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevState) => ({ ...prevState, [questionId]: answer }));
  };
  if (loading)
    return (
      <>
        <div>
          <p className={styles.title}>English Quiz</p>
        </div>
        <p>Loading Quiz...</p>
      </>
    );
  return (
    <div>
      <div className={styles.topDiv}>
      <Link to={'/'}> <button>Back</button></Link>
        <p className={styles.title}>English Quiz</p>
      </div>
      <form className={styles.englishForm} onSubmit={handleSubmit}>
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
                        <div key={choice}>
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
                          <label htmlFor={choice}>{choice}</label>
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

export default English;
