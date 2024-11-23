import React from "react";
import loadingGif from "../assets/loading.gif";

const Loading = () => {
  return (
    <main className="loading-container">
      <div style={{ margin: "auto" }}>
        <img src={loadingGif} /> <br />
        <p>Loading...</p>
      </div>
    </main>
  );
};

export default Loading;
