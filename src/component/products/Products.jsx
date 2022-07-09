import React from "react";
import Categories from "../categories/Categories";
import { Container,Grid } from "@mui/material";
import ProductCard from "./ProductCard"
const Products = ({ products , handleAddProducts }) => {
  return (
    <div>
      <Container >
        <Categories  />
        <Grid container justifyContent="center"  spacing={4} sx={{mt:1}}>
         {
            products.map((product)=>(
            <Grid item>
                <ProductCard product={product}/>
            </Grid>
            ))
         }
        </Grid>
      </Container>
    </div>
  );
};
export default Products