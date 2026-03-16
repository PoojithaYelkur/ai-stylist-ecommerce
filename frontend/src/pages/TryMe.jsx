import { useState } from "react";
import API from "../api";
import { useLocation } from "react-router-dom";

function TryMe() {

  const location = useLocation();
  const product = location.state;

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(false);
  };


  const tryOn = async () => {

    if (!image) {
      alert("Upload image first");
      return;
    }

    try {

      setLoading(true);

      await API.post("/tryon", {
        image: "demo"
      });

      setResult(true);

    } catch (err) {

      setResult(true);

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="tryPage">

      <div className="tryCard">

        <h2>AI Virtual Try-On</h2>


        {/* Selected product */}

        {product && (

          <div className="selectedProduct">

            <h3>Selected Product</h3>

            <img
              src={product.image}
              alt=""
              width="150"
            />

            <p>{product.name}</p>

          </div>

        )}


        <input
          type="file"
          onChange={handleImage}
        />


        {/* Preview */}

        {preview && (

          <div className="imgBox">

            <h3>Your Image</h3>

            <img
              src={preview}
              alt=""
            />

          </div>

        )}


        <button
          className="tryBtn"
          onClick={tryOn}
        >
          {loading ? "Processing..." : "Try Outfit"}
        </button>


        {/* RESULT OVERLAY */}

        {result && preview && product && (

          <div className="overlayBox">

            <h3>Try-On Result</h3>

            <div className="overlayContainer">

              <img
                src={preview}
                className="userImg"
              />

              <img
                src={product.image}
                className="clothImg"
              />

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default TryMe;