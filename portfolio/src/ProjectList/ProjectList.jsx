import "./ProjectList.css";

export default function ProjectList({items, columnCount}) {

    const columns = [];

    for (let i = 0; i < columnCount; i++) {
        columns.push([]);
    }

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        columns[i % columns.length].push(<img key={i} src={item.img}/>);
    }

    return (
        <div className="projectList">
            {columns.map((images, index) => <div key={index} className="columnItems">
                {images}
            </div>)}
        </div>
    );
}