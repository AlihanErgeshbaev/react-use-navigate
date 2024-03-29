import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    if (!title || !price || !image) {
      alert("write something");
    } else {
      navigate("/");
    }
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <TextField
        value={title}
        label="Title"
        variant="outlined"
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        value={price}
        label="Price"
        variant="outlined"
        onChange={e => setPrice(e.target.value)}
      />
      <TextField
        value={image}
        label="Image"
        variant="outlined"
        onChange={e => setImage(e.target.value)}
      />
      <Button sx={{ m: 1 }} variant="contained" onClick={() => handleSave()}>
        Save
      </Button>
    </Box>
  );
};

export default AddProduct;
