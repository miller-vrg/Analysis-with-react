import "./css/content__table.css";
const Table = (props)=>{
    return(
        <>
            <table className="content__tabla">
                <h2 className="tabla__title">{props.title}</h2>
                <tr>
                <th>Promedio</th>
                <td>{(props.promedio/3).toFixed(2)}</td>
                </tr>
                <tr>
                <th>Media</th>
                <td>{(props.media/2).toFixed(2)}</td>
                </tr>
                <tr>
                <th>Moda</th>
                <td>{props.moda}</td>
                </tr>
            </table>
        </>
    );
};

export default Table;