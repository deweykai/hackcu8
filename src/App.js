import { StockGame } from "./StockGame";
import "./App.css";

function App() {
    return (
        <div style={{ height: "90vh" }}>
            <img src="/hackcu8/Logo.png" alt="stock game" width={"400px"}></img>
            <StockGame />
        </div>
    );
}

export default App;
