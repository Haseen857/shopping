import React, { useState, useEffect } from "react";
import axios from "axios";

const MyPractice = () => {
  const [manual, setManuals] = useState("");

  const loadManuals = async () => {
    const result = await axios.get(
      "https://randomuser.me/api/?page=0&results=20"
    );
    setManuals(result.data.results);
    console.log(result.data.results);
  };

  useEffect(() => {
    // debugger;
    loadManuals();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {manual.length &&
            manual.map((e) => {
              return (
                <div className="col-md-4" style={{ marginBottom: "60px" }}>
                  <div className="cards">
                    <img src={e.picture.large} />
                    <img src={e.picture.medium} />
                    <h5>{`Name: ${e.name.title} ${e.name.first} ${e.name.last}`}</h5>
                    <h5>{`Gender: ${e.gender}`}</h5>
                    <h5>{`Dob: ${e.dob.date}`}</h5>
                    <h5>{`Age: ${e.dob.age}`}</h5>
                    <h5>{`Email: ${e.email}`}</h5>
                    <h5>{`Phone: ${e.phone}`}</h5>
                    <h5>{`Country: ${e.location.country}  , City: ${e.location.city} , State: ${e.location.state} , Street: ${e.location.street.number} , Name ${e.location.street.name}`}</h5>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default MyPractice;
