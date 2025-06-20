import globe from "../assets/globe.png";

export default function Header() {
    return (
        <header>
            <div className="title">
                <img src={globe} alt="World Image" />
                <p>my travel journal</p>
            </div>
        </header>
    );
}
