import React, { useState, useEffect } from "react";

const User = (props) => {
  // hook has following :  
  // value 
  // function to update state
  const [planet, setPlanet] = useState("Earth");

  // change the state
  useEffect(() => {
    setPlanet("jupiter");
    console.log("Component Mounting");
  }, [])

  useEffect(() => {
    console.log("Planet Changes")
  }, [planet]) // if state already updated then it will avoid the useEffect function

  // const handlePlanet = () => {
  //   setPlanet("jupiter");
  //   console.log("Component Mounting");
  // }

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h2>{planet}</h2>
      <button onClick={() => setPlanet("pluto")}>{planet}</button>

    </div>
  );
};

export default User;


// // state => A set of data that individual components holds.
// export default User;

// // LIFE CYCLE COMPONENTS
// // 1.MOUNT -> The components is initially rendered in a DOM
// // a. Constructor, b.Render c.ComponentDidCount

// // 2.UPDATE -> Component is being updated.
// // a.Constructor
// // b.shouldComponentsUpdate(nextProps,nextState)
// // c.Update()
// // d.getSnapshotBeforeUpdate(prevProps, prevState);
// // e.componentDidUpdate(prevProps.prevState)

// // 3.UNMOUNT -> Component is removed from the DOM
// componentWillUnmount

// State
// React 16 introduces Hooks Concept
// Hooks : Power to your functional component
// useState()
