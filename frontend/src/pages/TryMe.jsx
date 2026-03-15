import { useState } from "react";
import API from "../api";

function TryMe() {

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
  };


  const tryOn = async () => {

    if (!image) {
      alert("Upload image first");
      return;
    }

    try {

      setLoading(true);

      const res = await API.post("/tryon", {
        image: "demo"
      });

      console.log("TRYON:", res.data);

      // fake result image for demo
      setResult("https://via.placeholder.com/250");

    } catch (err) {

      console.log("TRYON ERROR", err);

      // still show result for demo
      setResult("https://via.placeholder.com/250");

    } finally {
      setLoading(false);
    }
  };


  return (
    <div style={{ padding: 20 }}>

      <h2>AI Virtual Try-On</h2>

      <input
        type="file"
        onChange={handleImage}
      />

      <br /><br />

      {preview && (
        <div>
          <h3>Your Image</h3>

          <img
            src={preview}
            alt="preview"
            width="200"
          />

        </div>
      )}

      <br />

      <button onClick={tryOn}>
        {loading ? "Processing..." : "Try Outfit"}
      </button>

      <br /><br />

      {result && (
        <div>

          <h3>Result</h3>

          <img
            src={result}
            alt="result"
            width="250"
          />

        </div>
      )}

    </div>
  );
}

export default TryMe;