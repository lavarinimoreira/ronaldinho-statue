import React from "react";
import SphereForm from "./components/SphereForm";
import Cylinder from "./components/Cylinder";
import Parallelepiped from "./components/Parallelepiped";

function App() {
  return (
    <div className="App">
      <div>
        <SphereForm />
        <Cylinder />
        <Parallelepiped />
      </div>
      <div className="right">
        <h1>Ronaldinho Statue</h1>
      </div>
    </div>
  );
}

export default App;
