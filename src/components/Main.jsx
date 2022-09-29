import { useState } from "react";
import AnswersItem from "./AnswersItem";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [state, setState] = useState({
    color: "",
    timeSpent: "",
    thoughtsAboutTheDuck: "",
    name: "",
    email: "",
  });
  const [answersList, setAnswerList] = useState([])
   
  const submitForm = (event) => {
    event.preventDefault();
    setAnswerList([state])
    event.target.reset()
    setState({...state, name: '', email: '', thoughtsAboutTheDuck: ''})
    console.log("answer",answersList)
    console.log("stae",state)

  };

  // const handleChange = (event) => {
  //   if (event.target.name === "review") {
  //     setReviewText(event.target.value);
  //   } else if (event.target.name === "username") {
  //     console.log("todo: update username state");
  //   }
  // };

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
      </section>
      <section className="main__form">
        <form className="form" onSubmit={(e)=> {
          submitForm(e)
          }}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input
                  id="color-one"
                  type="radio"
                  name="color"
                  value="1"
                  onClick={(e) => setState({ ...state, color: e.target.value })}
                />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input
                  id="color-two"
                  type="radio"
                  name="color"
                  value="2"
                  onClick={(e) => setState({ ...state, color: e.target.value })}
                />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input
                  id="color-three"
                  type="radio"
                  name="color"
                  value="3"
                  onClick={(e) => setState({ ...state, color: e.target.value })}
                />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input
                  id="color-four"
                  type="radio"
                  name="color"
                  value="4"
                  onClick={(e) => setState({ ...state, color: e.target.value })}
                />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onClick={(e) =>
                      setState({
                        ...state,
                        timeSpent: e.target.value,
                      })
                    }
                  />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="bathing"
                    onClick={(e) =>
                      setState({
                        ...state,
                        timeSpent: e.target.value,
                      })
                    }
                  />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onClick={(e) =>
                      setState({
                        ...state,
                        timeSpent: e.target.value,
                      })
                    }
                  />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="spend-time"
                    type="checkbox"
                    value="noTime"
                    onClick={(e) =>
                      setState({
                        ...state,
                        timeSpent: e.target.value,
                      })
                    }
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="review"
              cols="30"
              rows="10"
              value={state.complain}
              onChange={(event) =>
                setState({ ...state, thoughtsAboutTheDuck: event.target.value })
              }
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="text"
              name="username"
              value={state.name}
              onChange={(element) =>
                setState({ ...state, name: element.target.value })
              }
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={(element) =>
                setState({ ...state, email: element.target.value })
              }
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
