import React from "react";
import "../style.css";
export default function MainContent() {
  const styles = {
    fontSize: "24px"
  };
  const date = new Date(2013, 12, 12, 15);
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning";
    styles.backgroundColor = "#ffbf00";
  } else if (hours === 12 ||  hours < 17) {
    timeOfDay = "Afternoon";
    styles.backgroundColor = "#ff4000";
  } else {
    timeOfDay = "Evening";
    styles.backgroundColor = "#002db3";
  }

  return (
    <main>
      <h1 className="greeting" style={styles}>
        Good {timeOfDay}
      </h1>
      <p>this is the main content</p>
    </main>
  );
}
