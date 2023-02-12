import React from "react";
import { ImSphere } from "react-icons/im";
import "./Form.css";

const SphereForm = () => {
  return (
    <form className="form">
      <h3>Sphere</h3>
      <h2>
        <ImSphere />
      </h2>

      <label>Radius (cm): </label>
      <input type="number" />

      <select name="material">
        <option disabled selected>
          -- select the material --
        </option>
        <option key="steel" value="steel">
          Steel
        </option>
        <option key="aluminium" value="aluminium">
          Aluminum
        </option>
        <option key="copper" value="copper">
          Copper
        </option>
      </select>
      <div>
        <label>Units: </label>
        <input type="number" />
        <button>Add</button>
      </div>
    </form>
  );
};

export default SphereForm;
