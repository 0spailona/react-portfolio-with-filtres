import {Component} from "react";
import Toolbar from "../Toolbar/Toolbar.jsx";
import ProjectList from "../ProjectList/ProjectList.jsx";
import "./Portfolio.css";

export default class Portfolio extends Component {
    state = {filter: undefined};

    render() {
        let arrToDraw = this.props.data;
        if (this.state.filter) {
            arrToDraw = arrToDraw.filter(x => x[this.props.filterField] === this.state.filter);
        }

        return <div className={"portfolio"}>
            <Toolbar
                filters={this.props.filters}
                selected={this.state.filter}
                onSelectFilter={filter => this.setState({filter})}
            />
            <ProjectList items={arrToDraw}
                         columnCount={3}></ProjectList>
        </div>;
    }
}