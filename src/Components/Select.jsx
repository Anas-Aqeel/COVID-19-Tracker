import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { countries } from "./Table";

export default function SelectLabels(props) {
  const [filter, setFilter] = React.useState("WorldWide");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Search</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          {props.children}

          {countries.map((e)=>(
            <MenuItem value={e.country}>{e.country}</MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}