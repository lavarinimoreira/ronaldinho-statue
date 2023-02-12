import React from "react";
import { BiCylinder } from "react-icons/bi";
import "./Form.css";

const Triangle = () => {
  return (
    <form className="form">
      <h3>Cylinder</h3>
      <h2>
        <BiCylinder />
      </h2>
      <label>Radius (cm): </label>

      <input type="number" />

      <label>Heigth (cm): </label>
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
        <label>Units:</label>
        <input type="number" />
        <button>Add</button>
      </div>
    </form>
  );
};

export default Triangle;
