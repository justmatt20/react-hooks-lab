import React, { useState, useEffect } from "react";
import axios from "axios";
import '../components/facts.css';

export default function Facts() {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://swapi.dev/api/planets");
      console.log(response.data);
      const data = await response.data;
      const item = data.results;
      console.log(item);
      setPlanet(item);
    }
    fetchData();
  }, []);

  return (
    <>
      {planet.map((item, index) => {
        return <div className="planets" key={index.created}>{item.name}</div>;
      })}
    </>
  );
}
