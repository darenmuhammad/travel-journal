import globe from "../images/globe.png";

export default function Header() {
    return (
        <header>
            <div className="title">
                <img src={globe} alt="World Image" />
                <h1>my travel journal.</h1>
            </div>
        </header>
    );
}
