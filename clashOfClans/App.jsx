import React from "react";
import "./style.css";
import Arrow from "./component/Arrow";
import Card from "./component/Card/Card";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function App() {
  const [heroes, setHeroes] = useState([]);
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/heroes")
      .then((resp) => resp.json())
      .then((heroes) => setHeroes(heroes));
    // .then((heroes) => console.log(heroes))
  }, []);

  function handleNext() {
    if (cursor + 1 == heroes.length) {
      setCursor(0);
    } else {
      setCursor(cursor + 1);
    }
  }
  function handlePrev() {
    if (cursor - 1 == -1) {
      setCursor(heroes.length - 1);
    } else {
      setCursor(cursor - 1);
    }
  }

  return (
    <div className="slide-container">
      <div className="wrapper">
        {heroes.length ? (
          <>
            <Arrow dir="prev" handleClick={handlePrev} />

            <Card hero={heroes[cursor]} />

            <Arrow dir="next" handleClick={handleNext} />
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}
