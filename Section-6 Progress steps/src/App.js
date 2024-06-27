import { useState } from "react"

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Keep fit and healthy 🏋️‍♂️",
  "Get your job interviews",
]

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}

      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>😇</p>
      </StepMessage>

      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>👨‍❤️‍💋‍👨</p>
      </StepMessage>
    </div>
  )
}

function Steps() {
  // const step = 1;

  const [step, setStep] = useState(1)

  const [isOpen, setIsOpen] = useState(true)

  //const[test, setTest]=useState({ name: "Jonas" });

  //console.log(arr);

  function handlePrevious() {
    //alert("Previous");
    if (step > 1) setStep((step) => step - 1)
    update(step)
  }

  function handleNext() {
    // alert("Previous");
    if (step < 5) setStep((step) => step + 1)

    //  setTest({ name: "Fred" });
    update(step)
  }

  function update(step) {
    const actives = document.querySelectorAll(".active")
    const progress = document.querySelector(".progress")
    console.log(actives.length)
    console.log(actives.length / (messages.length - 1))

    progress.style.width = (actives.length / (messages.length - 1)) * 100 + "%"

    if (step === 1) progress.style.width = 0 + "%"

    console.log("change width is:", progress.style.width)
  }

  //&times
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className="progress"></div>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
            <div className={step >= 4 ? "active" : ""}>4</div>
            <div className={step === 5 ? "active" : ""}>5</div>
          </div>

          {/* <p className="message">
            Step {step}:{messages[step - 1]}
          </p> */}

          <StepMessage step={step}>
            {messages[step - 1]}
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={() => alert(`learn how to ${messages}`)}
            >
              learn how
            </Button>
          </StepMessage>

          <div className="buttons">
            <Button
              step={step}
              bgColor={`${step === 1 ? "#fff" : "#7950f2"}`}
              textColor={`${step === 1 ? "#000" : "#fff"}`}
              onClick={handlePrevious}
            >
              <span>👨‍🍼</span>
              <span>Previous</span>
            </Button>
            <Button
              step={step}
              bgColor={`${step === 5 ? "#fff" : "#7950f2"}`}
              textColor={`${step === 5 ? "#000" : "#fff"}`}
              onClick={handleNext}
            >
              Next <span>👉</span>
              <span>😙</span>
            </Button>

            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handlePrevious()}
            >
              Previous
            </button> */}
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleNext()}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </div>
  )
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  )
}

function Button({ bgColor, textColor, onClick, step, children }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
