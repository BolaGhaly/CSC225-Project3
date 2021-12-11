import React from "react";

const LoadingScreen = () => {
  return (
    <div>
      <div className="loading-screen-container d-flex justify-content-center align-items-center h-100">
        <p className="animate__animated animate__shakeX">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
