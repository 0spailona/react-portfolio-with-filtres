import "./App.css";
import Portfolio from "./Portfolio/Portfolio.jsx";
import {dataForDraw, filterField, filters} from "./DataForDraw.js";

function App() {

    return (
        <Portfolio data={dataForDraw}
                   filters={filters}
                   filterField={filterField}/>
    );
}

export default App;
