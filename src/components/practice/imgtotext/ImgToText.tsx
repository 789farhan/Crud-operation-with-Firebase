"use client";
import axios from "axios";
import React, { useState } from "react";



export default function ImgToText() {
  let [text, setext] = useState("");

  const NextGen = async () => {
    try {
      const Getdata = axios
        .get(
          "https://api.imgbun.com/png?key={784ecb745eb83df79b0d16791627ef06}&text=You are having a laugh&color=FF0000&size=16"
        )
        .then((res) => {
          res.data();
          console.log(res.data);
        });
    } catch (error) {
      return error;
    }
  };

  const onCLickHandler = async () => {};

  return (
    <div>
      <label>Search here</label>
      <br />
      <button onClick={onCLickHandler}>Generate Img here</button>
      <h1>{text}</h1>
    </div>
  );
}
