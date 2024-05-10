import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ResultScreen.css";

const ResultScreen = () => {
  const [predictionPercentage, setPredictionPercentage] = useState(0);
  const [animalType, setAnimalType] = useState("");
  const [labelColor, setLabelColor] = useState("");
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const image = location.state.preview;

    const handleClick = async () => {
      setIsTeamVisible(true);
    setTimeout(() => {
      navigate("/");
      }, 3000);
    };

  useEffect(() => {
    const randomPercentage = Math.floor(Math.random() * 100);
    const randomAnimalType = randomPercentage >= 80 ? "ANJING" : "KUCING";
    
    setPredictionPercentage(randomPercentage);
    setAnimalType(randomAnimalType);
    
    if (randomPercentage >= 80) {
      setLabelColor("color-green");
    } else if (randomPercentage >= 50) {
      setLabelColor("color-yellow");
    } else {
      setLabelColor("color-red");
    }
  }, []);

  return (
    <div className="container">
      <div className="container-result">
        <img
          className="image-result"
          src={image}
          alt="Uploaded"
        />
        <div className="container-label-result">
          <label className="label-result">Hasil</label>
          <div className="prediction-number">
            <label className={`label-prediction-number ${labelColor}`}>{predictionPercentage}%</label>
          </div>
          <label className="label-result">Hewan ini adalah {animalType}</label>
          <button onClick={handleClick} className="button-back">
            <a>Kembali</a>
          </button>
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

