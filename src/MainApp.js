import React, { useContext } from "react";
import { TreesContext, useTrees } from "./pages";

function MainApp() {
  // const {trees} = useContext(TreesContext);
  const {trees} = useTrees();
  console.log("trees");
  console.log(trees);
  return (
    <div>
      <h1>Trees I've heard of:</h1>
      <ul>
        {trees.map( tree => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  )
}

export default MainApp;