'use client'
import { useEffect, useState } from "react";
import { getZenQuotes } from "./api/quotes";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  let today = new Date()
  let finalDate = new Date(2024, 6, 20);
  let differenceInMilliseconds = Number(finalDate) - Number(today);
  let differenceInDays = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );
  const [startDate, setStartDate] = useState<Value>(new Date());
  const [quoteOfTheDay, setQuoteOfTheDay] = useState<string>()

  // useEffect(() => {
  //   getZenQuotes().then((result) => {
  //     setQuoteOfTheDay(result?.q)
  //   })
  // }, [])


  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <h2>Today is: {today.toLocaleDateString()}</h2>
        <h2>{differenceInDays} days until Trip</h2>
        <h2>Motivational quote of the day: {quoteOfTheDay} </h2>
      </div>
      <Calendar onChange={setStartDate} value={startDate} />
    </div>
  ); 
}
