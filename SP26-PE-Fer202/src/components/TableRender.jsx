import { NavLink } from "react-router-dom";
function TableRender({data}) {
  return (
    <>
        <tr>
            <td><NavLink to={`/SE183894/game/${data.id}`}><img src={data.gameImage} alt="unknow person"/></NavLink></td>
            <td>{data.gameTitle}</td>
            <td>{data.playTime}</td>
            <td>{data.complexity}</td>
        </tr>
    </>
  );
}

export default TableRender;
