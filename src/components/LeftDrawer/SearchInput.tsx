import React, { ReactEventHandler, useState } from "react";
// import "./LeftDrawer.scss";
import Loop from "../../icons/Loop";
import { BiSearchAlt } from "react-icons/bi";
import { createStyles } from "@material-ui/styles";
import { LeftDrawer__styles } from "../../styles/LeftDrawer__styles";

function SearchInput() {
  const classes = LeftDrawer__styles();

  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className={classes.search_input_container}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Recherche abonnement"
      />
      <button className="search_button">
        <BiSearchAlt />
      </button>
    </div>
  );
}

export default SearchInput;
