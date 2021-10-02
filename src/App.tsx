import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Asset } from "./api/types";

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const loadMoreButton = useRef(null);

  // async function callAssets() {
  //   console.log("Loading assets");
  //   const result = await getAssets(10, offset);
  //   setAssets(result);
  // }

  // useEffect(() => {
  //   callAssets();
  //   setIsLoading(false);
  //   setOffset(offset + 10);
  // }, []);

  return (
    <>
      <p>Hello World</p>
    </>
  );
}

export default App;
