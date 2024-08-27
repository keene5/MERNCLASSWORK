import logo from "./logo.svg";
import "./index.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import { Fragment } from "react";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);
  //delete an item by filtering to a new array
  const deleteFeedback = (id) => {
    console.log("app", id);
    if (window.confirm("Are you sure")) {
      setFeedBack(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedback])
    console.log(newFeedback );
    
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd = {addFeedback} />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
