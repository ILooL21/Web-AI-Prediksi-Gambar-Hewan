import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import "../styles/Hero.css";

const Hero = () => {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setIsImageUploaded(true);
  };

  const handleClick = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", image);
    await axios.post("http://localhost:5000/predict", formData).then((res) => {
      console.log(res.data);
    });
    setTimeout(() => {
      setIsLoading(false);
      navigate("/result", { state: { preview } });
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
        {preview && (
          <img
            className="image-output"
            src={preview}
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
