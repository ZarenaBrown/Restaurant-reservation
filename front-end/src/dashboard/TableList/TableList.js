import React from "react";
import TableInfo from "../TableList/TableInfo";

function TableList({ tables, loadDashboard }) {
    if(!tables) {
        return null;
    }

    const formatted = tables.map((table) => {
        return(
            <TableInfo 
                key={table.table_id}
                table={table}
                loadDashboard={loadDashboard}
            />
        );
    });


    return (
        <table className="table table-sm table-striped table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Table</th>
                <th scope="col">Capacity</th>
                <th scope="col">Status</th>
                <th scope="col">Finish</th>
            </tr>
            </thead>
            <tbody>
                {tables.map((table) => {
                return(
                    <tr key={table.table_id}>
                    <td>{table.table_name}</td>
                    <td>{table.status}</td>
                    <td>{table.capacity}</td>
                    <td>{table.status === "occupied" ? <button data-table-id-finish={table.table_id} type="button" className="btn btn-primary" onClick={finishHandler} value={table.table_id}>Finish</button> : null}</td>
                    </tr>
                )
                })}
            </tbody>
        </table>
    );
}

export default TableList;