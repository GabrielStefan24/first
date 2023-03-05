import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";

function App() {
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container"></div>;
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  );
}

export default App;
