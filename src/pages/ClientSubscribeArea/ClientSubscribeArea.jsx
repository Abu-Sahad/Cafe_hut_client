import { Link } from "react-router-dom";
import './ClientSubscribeArea.css'
const ClientSubscribeArea = () => {
    return (
        <div className="client-content">
            <div>
                <h1 className="mb-3">Subscribe Our CafeHut</h1>
                <p>Be the first to know. Sign Up for CafeHut</p>
            </div>
            <div>
                <Link to="/register"><button className="client-content-button">Sign Up</button></Link>
            </div>
        </div>
    );
};

export default ClientSubscribeArea;