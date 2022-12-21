import React, {useState}  from "react";
import BeforeSubmit from "./components/BeforeSubmit";
import AfterSubmit from "./components/AfterSubmit";
import GlobalStyles from "./components/styles/Global";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratingResult, setRatingResult] = useState("")

  const handleClick = (result) => {
    setRatingResult(result);
  }

  return (
    <>
      <GlobalStyles />

      {!isSubmitted ? (
        <BeforeSubmit 
          onSubmit={() => setIsSubmitted(true)} 
          onClick={handleClick}   
        />
      ) : (
        <AfterSubmit ratingResult={ratingResult} />
      )}

    </>
  );
}

export default App;
