import React from "react";
import Person from "../components/Person";
import { useState } from "react";
const Home = () => {
  // const [showPerson, setShowPerson] = useState(false);
  // function togglePerson() {
  //   setShowPerson((x) => !x);
  // }




  return (
    <>
      {/* {showPerson && ( */}
      <Person name="afnaan" age={20} isAlive={true} />
      <Person name="John" age={30} isAlive={true} />
      <Person name="Jane" age={25} isAlive={false} /> {/* )} */}
      {/* <button onClick={togglePerson}>{showPerson ? "Hide Person" : "Show Person"}</button> */}
    </>
  );
};

export default Home;
