import "../styles/ResultScreen.css";
import { useLocation } from "react-router-dom";

const ResultScreen = () => {
  const location = useLocation();
  const image = location.state.preview;

  return (
    <div className="container">
      <div className="container-result">
        <img
          className="image-result"
          src={image}
          alt="Uploaded"
        />
        <div className="container-label-result">
          <label className="label-1">Result</label>
          <label className="label-2">The Animal is 100 % dog</label>
        </div>
      </div>
    </div>
  );
};
export default ResultScreen;
