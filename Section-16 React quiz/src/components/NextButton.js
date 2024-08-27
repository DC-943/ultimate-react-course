function NextButton({ dispatch, answer, index, numQuestions }) {
  console.log(
    "button point 1, index is:  numQuestion is:",
    index,
    numQuestions
  );
  if (answer === null) return null;

  console.log(
    "button point 2, index is:  numQuestion is:",
    index,
    numQuestions
  );
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  console.log(
    "button point 3, index is:  numQuestion is:",
    index,
    numQuestions
  );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
