import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCart.css";
import { Link } from "react-router-dom";

const ProductCart = ({ product, handleAddProduct }) => {
  return (
    <Card sx={{ maxWidth: 190 }}>
      <CardMedia
        component="img"
        height="230"
        image={product.imgUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {product.productName}
        </Typography>

        <Typography gutterBottom variant="h7" component="div">
          Price:{product.price} DT
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Stock:{product.stock}
        </Typography>
      </CardContent>
      <CardActions className="buttonshop">
        <Button size="small" onClick={() => handleAddProduct(product)}>
          Add To Cart
        </Button>
        <Link to="/cart">
          <Button size="small">Buy Now</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCart;
