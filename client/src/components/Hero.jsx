import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import "../styles/Hero.css";

const Hero = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    setIsImageUploaded(true);
  };

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/result", { state: { image } });
    }, 2000);
  };

  return (
    <div className="container">
      <div className={`container-output-image ${isImageUploaded ? "output-berubah" : ""}`}>
        <form className={`container-input-image ${isImageUploaded ? "input-berubah" : ""}`}>
          <input
            className="image-input"
            title="hehe"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
          <div className="container-label">
            <UploadOutlined className="upload-icon" />
            <label className="label-1">Drag & Drop</label>
            <label className="label-1">Or</label>
            <label className="label-1">Upload Image</label>
          </div>
        </form>
        {image && (
          <img
            className="image-output"
            src={image}
            alt="Uploaded"
          />
        )}
        <button
          className={`button-upload ${isImageUploaded ? "button-berubah" : ""}`}
          onClick={handleClick}
          disabled={isLoading}>
          <a href="">{isLoading ? "Uploading..." : "Predict"}</a>
        </button>
        <div className={`a-opacity ${isLoading ? "b-opacity" : ""}`}>{isLoading && <div className="loader"></div>}</div>
      </div>
    </div>
  );
};

export default Hero;
