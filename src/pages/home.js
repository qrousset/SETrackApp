import React, { useState } from "react";
import SummaryCard from "../components/SummaryCard";

const summary = [
  {
    application_id: 1,
    company_id: 1,
    company_name: "Google",
    user_id: 1,
    job_listing: "https://www.google.com",
    submission_date: "2021-11-02",
    status_name: "sent",
    next_status: "sifted",
    date: "",
  },
  {
    application_id: 2,
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
    application_id: 3,
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
    application_id: 4,
    company_id: 1,
    company_name: "Google",
    user_id: 1,
    job_listing: "www.google.com",
    submission_date: "2021-11-02",
    status_name: "phone_interview",
    next_status: "interview1",
    date: "",
  },
  {
    application_id: 5,
    company_id: 2,
    company_name: "Amazon",
    user_id: 1,
    job_listing: "www.amazon.com",
    submission_date: "2021-11-03",
    status_name: "interview1",
    next_status: "interview2",
    date: "",
  },
];

const Home = (props) => {
  const [cards, setCards] = useState(summary);
  let testArr = [];
  cards.forEach((el) => {
    testArr.push(<SummaryCard data={el} key={el.application_id}/>);
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
