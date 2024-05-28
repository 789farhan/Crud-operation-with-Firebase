"use client";
import React, { useState } from "react";

export default function TextToImg() {
  let [text, setext] = useState("");
  let [url, seturl] = useState("");

  const query = async (data: any) => {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      // console.log("RESULT:", result);
      const output = URL.createObjectURL(result);
      console.log('out-put',output);
      
      return output;
    } catch (error) {
      return error;
    }
  };

  const onCLickHandler = async () => {
    try {
      const resultedata = await query({ inputs: text });
      // console.log("n data from the function", resultedata);
      seturl(resultedata);
      // if (resultedata) {
      //   const details = await imgDetails(resultedata);
      //   console.log("response from API", JSON.stringify(details));
      // }
    } catch (error) {
      console.log(error);
    }
  };

  // const imgDetails = async (data:any) => {
  //   try {
  //     console.log('source from the img', data);
      
  //     const fetchDetails = await fetch(
  //       "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large",
  //       {
  //         headers: {
  //           Authorization: "Bearer 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",
  //         },
  //         method: "POST",
  //         body: data,
  //       }
  //     );
  //     const result = await fetchDetails.json();
  //     console.log('resut from the img details',result);
      
  //     return result;
  //   } catch (error) {
  //     console.log('error from the img details',error);
  //     return error;
  //   }
  // };
  
  return (
    <div>
      <label>Search here</label>
      <br />
      <input
        onChange={(evt) => {
          setext(evt.target.value);
        }}
        title="data"
      />
      <button onClick={onCLickHandler}>Generate Img here</button>
      <h1>{text}</h1>
      <img src={url} width={200} height={200} title="pic " />
    </div>
  );
}
