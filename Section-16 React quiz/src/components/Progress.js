function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  console.log("index, numQuestions, points, maxPossiblePoints, answer:");

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + (answer !== null ? 1 : 0)} />
      {/* <progress max={numQuestions} value={index} /> */}
      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>

      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
