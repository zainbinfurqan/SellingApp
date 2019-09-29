import React, { useState, useEffect } from "react";

export default function Input(value) {
  let [text, setTxt] = useState("");

  setTxt((text = value));
  return text;
}
