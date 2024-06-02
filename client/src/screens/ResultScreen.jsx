import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ResultScreen.css";

const ResultScreen = () => {
  const [labelColor, setLabelColor] = useState("");
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const image = location.state?.preview;
  const animalType = location.state?.animalType;
  const predictionPercentage = location.state?.predictionPercentage;

  const handleClick = async () => {
    setIsTeamVisible(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    } else {
      if (predictionPercentage >= 80) {
        setLabelColor("color-green");
      } else if (predictionPercentage >= 50) {
        setLabelColor("color-yellow");
      } else {
        setLabelColor("color-red");
      }
    }
  }, [predictionPercentage, location.state, navigate]);

  return (
    <div className="container">
      <div className="container-result">
        <div className="container-result-main">
          <img
            className="image-result"
            src={image}
            alt="Uploaded"
          />
          <div className="container-label-result">
            <label className="label-result">Result</label>
            <div className="prediction-number">
              <label className={`label-prediction-number ${labelColor}`}>{predictionPercentage}%</label>
            </div>
            <label className="label-result">
              This image most likely belongs to the <span className="animal-name">{animalType}</span>
            </label>
            <button
              onClick={handleClick}
              className="button-back">
              <a>Back</a>
            </button>
          </div>
        </div>
      </div>
      {isTeamVisible && (
        <div className="container-team">
          <div className="team-member">
            <label>Team Furry</label>
            <label>Muhammad Kholilur Rohman (3122521002)</label>
            <label>Muhammad Fariz Ath Thoriq (3122521011)</label>
            <label>Bariq Abrar Ramadhan (3122521021)</label>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultScreen;
