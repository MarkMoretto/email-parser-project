/* eslint-disable */

import { Cell, Column, Table2 } from "@blueprintjs/table"


const DataTable = () => {
    const dollarCellRenderer = (rowIndex) => <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    return (
        <Table2 numRows={4}>
            <Column name="USD" cellRenderer={dollarCellRenderer} />
            <Column />
            <Column />                        
        </Table2>
    )
}

export default DataTable