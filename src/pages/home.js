import React, { useState } from "react";
import SummaryCard from "../components/SummaryCard";

const summary = [
  {
    application_id: 1,
    company_id: 1,
    company_name: "Google",
    user_id: 1,
    job_listing: "www.google.com",
    submission_date: "2021-11-02",
    status_name: "sent",
    next_status: "sifted",
    date: "",
  },
  {
    application_id: 1,
    company_id: 1,
    company_name: "Google",
    user_id: 1,
    job_listing: "www.google.com",
    submission_date: "2021-11-02",
    status_name: "sifted",
    next_status: "phone_interview",
    date: "",
  },
  {
    application_id: 1,
    company_id: 1,
    company_name: "Google",
    user_id: 1,
    job_listing: "www.google.com",
    submission_date: "2021-11-02",
    status_name: "sifted",
    next_status: "phone_interview",
    date: "",
  },
  {
    application_id: 1,
    company_id: 1,
    company_name: "Google",
    user_id: 1,
    job_listing: "www.google.com",
    submission_date: "2021-11-02",
    status_name: "phone_interview",
    next_status: "interview1",
    date: "",
  },
];

const Home = (props) => {
  const [cards, setCards] = useState(summary);
  let testArr = [];
  console.log(cards);
  cards.forEach((el) => {
    testArr.push(<SummaryCard data={el} />);
  });

  return (
    <div id="home">
      <h1>SUMMARY</h1>
      <div
        id="cards"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 18vw)",
          gap: "2em",
        }}
      >
        {testArr}
      </div>
    </div>
  );
};

export default Home;
