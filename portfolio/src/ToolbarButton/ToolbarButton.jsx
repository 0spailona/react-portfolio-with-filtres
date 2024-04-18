import "./ToolbarBtn.css";

export default function ToolbarButton({text, isSelected, onClick}) {
    return (
        <a href="#" onClick={onClick} className={`toolbarBtn ${isSelected ? "selected" : ""}`}>{text}</a>
    );
}