import React from "react";
import { ImSphere } from "react-icons/im";

const SphereForm = () => {
  return (
    <form className="sphere">
      <h2>
        <ImSphere />
      </h2>
      <label>Sphere radio: </label>
      <input type="number" />
      <span>cm.</span>=
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
      <button>Add</button>
    </form>
  );
};

export default SphereForm;
