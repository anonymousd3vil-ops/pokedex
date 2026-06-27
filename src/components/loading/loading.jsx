import pikachu from "../../assets/pikachu-running.gif";
import './loading.css'

function Loading() {
    return <img className="loading-animation" src={pikachu} alt="Loading..." />;
}

export default Loading;