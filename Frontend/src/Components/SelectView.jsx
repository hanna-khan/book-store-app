import * as React from "react";
import BookStoreGridView from "./BookStoreGridView";
import BookStoreCardView from "./BookStoreCardView";
import Navbar from "./Navbar";

export default function SelectView() {
  const [view, setView] = React.useState("tableView");

  const handleChange = (event) => {
    setView(event.target.checked ? "cardView" : "tableView");
  };

  return (
    <>
      <Navbar handleChange={handleChange} />
      <div className="mx-10">
        {view === "tableView" ? <BookStoreGridView /> : <BookStoreCardView />}
      </div>
    </>
  );
}
