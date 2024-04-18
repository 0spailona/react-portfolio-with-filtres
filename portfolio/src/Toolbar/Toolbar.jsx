import ToolbarButton from "../ToolbarButton/ToolbarButton.jsx";
import "./Toolbar.css";

export default function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div className={"toolbar"}>
            <ToolbarButton text="All" isSelected={!selected} onClick={() => onSelectFilter?.call(this, undefined)}/>
            {filters.map(f => <ToolbarButton key={f.value} text={f.name} isSelected={f.value === selected}
                                             onClick={() => onSelectFilter?.call(this, f.value)}/>)}
        </div>
    );
}