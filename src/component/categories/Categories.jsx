import { React, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";

const Categories = ({ getProducts }) => {
  const [category, setCategory] = useState([]);
  const baseUrl = "https://fakestoreapi.com/products/categories";
  const getCategories = () => {
    axios.get(baseUrl).then((res) => {
      console.log(res.data);
      setCategory(res.data);
    });
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <FormControl just sx={{ width: "100vw", m: 1 }}>
        <RadioGroup
          row
          sx={{ justifyContent: "center" }}
          name="row-radio-buttons-group"
          onChange={(e) =>
            getProducts(e.target.value && `/category/${e.target.value}`)
          }
        >
          <FormControlLabel value="" control={<Radio />} label="All" />
          {category.map((item, i) => (
            <FormControlLabel
              key={i}
              value={item}
              sx={{ textTransform: "capitalize" }}
              control={<Radio />}
              label={item}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Categories;
