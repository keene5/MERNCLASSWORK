import logo from "./logo.svg";
import "./index.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import { Fragment } from "react";
import { useState } from "react";
import FeedbackData from './data/FeedbackData'

function App() {
  const[feedback, setFeedBack] = useState(FeedbackData);
  return (
    <>
    <Header/>
      <div className="container">
        <FeedbackList feedback={feedback}/>
        console.log('app feedback'+feedback);
      </div>
    </>
  );
}

export default App;
