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
            <tbody>{formatted}</tbody>
        </table>
    );
}

export default TableList;