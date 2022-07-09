import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function ProductCard({product,handleAddProducts}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
        sx={{objectFit:"contain"}}
      />
      <CardContent sx={{display:"flex", justifyContent:"space-between"}}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price +"$"}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
      <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
       <IconButton onClick={()=>(handleAddProducts({
        title : product.title,
        id:product.id,
        image:product.image,
        price:product.price

       }, 1 ))} >
       <AddShoppingCartIcon/>
       </IconButton>
      </CardActions>
    </Card>
  );
}