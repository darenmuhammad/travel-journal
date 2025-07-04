import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data.js";

export default function App() {
    const entryElements = data.map((entry) => {
        return <Entry {...entry} />;
    });

    return (
        <>
            <Header />
            <main className="container">{entryElements}</main>
        </>
    );
}
