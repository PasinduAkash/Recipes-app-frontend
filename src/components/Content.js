import React from "react";
import "./Content.css";
import Card from "./Card";

export default function Content({ data }) {
  return (
    <div className="content-container">
      {data.map((item, index) => {
        return <Card key={index} info={item} />;
      })}
    </div>
  );
}
