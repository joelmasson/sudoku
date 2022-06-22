import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <nav>
                <Link to="/">Game</Link>
                <Link to="scores">Scoreboard</Link>
            </nav>
        </div>
    );
}
export default Navigation