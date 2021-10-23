import { Button, IconButton, Table } from "rsuite"
import { Icon } from "@rsuite/icons"
import { useEffect, useState } from "react"
import ArrowUpLineIcon from "@rsuite/icons/ArrowUpLine"
import ArrowDownLineIcon from "@rsuite/icons/ArrowDownLine"
import * as faDollarSign from "@fortawesome/free-solid-svg-icons/faDollarSign"
import * as faPercent from "@fortawesome/free-solid-svg-icons/faPercent"

import { sortNumAsc, sortDictDesc, sortDictAsc } from "../../lib/sorters"
import "./styles.css"


// Datakey icon mapping
const iconMap = {
    securityPrice: faDollarSign,
    securityRatio: faPercent
}

// Icon helper function; ripped directly from rsuite.
const FaSvgIcon = ({ faIcon, ...rest }) => {
    const { width, height, svgPathData } = faIcon;
    return (
        <svg {...rest} viewBox={`0 0 ${width} ${height}`} width="1.5rem" height="1.4rem" fill="#007d0c">
            <path d={svgPathData}></path>
        </svg>
    )
}


// Cells within row to edit.
const EditableCell = ({ rowData, dataKey, funcOnChange, ...props }) => {
    const editing = rowData.status === "EDIT"
    return (
        <Table.Cell {...props} className={editing ? "table-content-editing" : ""}>
            {editing ? (
                <input
                    className="rs-input"
                    defaultValue={rowData[dataKey]}
                    onChange={event => {
                        funcOnChange && funcOnChange(rowData.rowId, dataKey, event.target.value)
                    }}
                />
            ) : (
                iconMap[dataKey] ? (
                    <span className="table-content-edit-span">
                        {rowData[dataKey]}{" "}
                        <Icon as={FaSvgIcon} faIcon={iconMap[dataKey]} style={{ padding: "0", maring: "0" }} />
                    </span>
                ) : (
                    <span className="table-content-edit-span">{rowData[dataKey]}</span>
                )
            )}
        </Table.Cell>
    )
}

// Cell on far right of row to house "actions."
const ActionCell = ({ rowData, dataKey, onEditClick, onDeleteClick, onMoveRow, ...props }) => {
    return (
        <Table.Cell {...props}>
            {/* 
                Edit row.
            */}
            <Button
                color="green"
                size="sm"
                appearance="ghost"
                onClick={() => {
                    onEditClick && onEditClick(rowData.rowId)
                }}
            >   
                {rowData.status === "EDIT" ? "Save" : "Edit"}
            </Button>            

            {/*
                Delete row
            */}
            <Button
                color="red"
                size="sm"
                appearance="ghost"
                onClick={() => {
                    onDeleteClick && onDeleteClick(rowData.rowId)
                }}
            >   
                {"DEL"}
            </Button>
            {/* 
                Move row up
            */}
            <IconButton
                icon={<ArrowUpLineIcon />}
                color="orange"
                size="sm"
                appearance="ghost"
                onClick={() => {
                    onMoveRow && onMoveRow(rowData.rowId, "UP")
                }}
            />
            {/* 
                Move row down
            */}
            <IconButton
                icon={<ArrowDownLineIcon />}
                color="blue"
                size="sm"
                appearance="ghost"
                onClick={() => {
                    onMoveRow && onMoveRow(rowData.rowId, "DOWN")
                }}                
            />            
        </Table.Cell>
    )
}

// Initial filler data.
const initialTableData = [
    {rowId: 0, securityName: "ABC, Inc.", securityPrice: "0.00", securityRatio: "0.00"},
    {rowId: 1, securityName: "XYZ, Inc.", securityPrice: "1.00", securityRatio: "0.25"},
    {rowId: 2, securityName: "QRS Ltd.", securityPrice: "0.75", securityRatio: "0.50"},    
]



const FlexTable = ({ tableData, ...tableProps }) => {
    const [data, setData] = useState(initialTableData)
    const [maxId, setMaxId] = useState(0)
    const [loading, setLoading] = useState(false)

    // Default data for a given row.
    const defaultDataRow = {rowId: 0, securityName: "", securityPrice: "0.00", securityRatio: "0.00"}

    // Load initial data.
    const loadData = () => {
        setData(initialTableData)
        nextRowId() // Increment max row ID by 1 at the start.
    }
    useEffect(() => { loadData() }, [])
    
    /**
     * Update rowId to latest row ID given.
    */
    const nextRowId = () => {
        const tmpId = data.map(el => el["rowId"]).reduce(function(a, b) {
                return Math.max(a, b) + 1;
        })
        setMaxId(tmpId)
    }

    // Sorting rows
    const getData = () => {
        return data.sort((a, b) => {
            let x = a["rowId"]
            let y = b["rowId"]
            return x - y
        })
    }

    /**
     * Add new row to table.
    */
    const addNewRowRow = () => {
        nextRowId()
        const nextData = defaultDataRow
        nextData.rowId = maxId
        setData([...data, nextData])
        console.log(`Max ID: ${maxId}`)
    }
    // useEffect(() => nextRowId(), [maxId])

    /**
     * Move row up one spot.
    */
     const moveRowUpDown = (rowId, direction) => {
        // If the current row less 1 is greater than or equal to zero (the baseline row)
        // set previous row to that value.

        // Check if next rowId valid.
        if ((direction === "UP" && rowId - 1 >= 0) || (direction !== "UP"  && rowId + 1 < maxId)) {

            const nextData = Object.assign([], data)
            const newRowId = direction === "UP" ? rowId - 1 : rowId + 1
            const swapRow = nextData.find(item => item.rowId === newRowId)
            const currItem = nextData.find(item => item.rowId === rowId)
            swapRow.rowId = rowId
            currItem.rowId = newRowId

            setData(sortDictAsc(nextData, "rowId"))
            // setLoading(true)
            // setTimeout(() => {
            //     setLoading(false)
            //     setData(sortDictAsc(nextData, "rowId"))
            // }, 150)

            console.log(`Updated rowId: ${swapRow.rowId}\tMax ID ${maxId}`)
        }
    }    


    /*
     * Remove row from data table.
    */
    const handleDeleteRow = rowId => {
        const nextData = Object.assign([], data)
        const remainingData = nextData.filter(item => item.rowId !== rowId)
        setData(remainingData)
    }    

    /*
     * Update cell value.
    */
    const handleChange = (rowId, key, value) => {
        const nextData = Object.assign([], data)
        nextData.find(item => item.rowId === rowId)[key] = value
        setData(nextData)
    }

    /**
     * Switch between edit and normal modes.
    */
    const handleEditState = rowId => {
        const nextData = Object.assign([], data)
        const activeItem = nextData.find(item => item.rowId === rowId)
        activeItem.status = activeItem.status ? null : "EDIT"
        setData(nextData)
    }

    return (
        <>
        <div className="table-btn">
            <Button sz="lg" color="green" appearance="ghost" onClick={addNewRowRow}>Add Row</Button>    
        </div>
        <div>
            <Table 
                height={250}
                data={getData}
                loading={loading}
                onRowClick={data => {
                    console.log(data)
                }}                
                {...tableProps}>

                <Table.Column width={0}  sortable>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <EditableCell dataKey="rowId" />
                </Table.Column> 

                <Table.Column flexGrow={4} align="center">
                    <Table.HeaderCell>Security Name</Table.HeaderCell>
                    <EditableCell dataKey="securityName" funcOnChange={handleChange} />
                </Table.Column>
        
                <Table.Column flexGrow={1} align="center">
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <EditableCell dataKey="securityPrice" funcOnChange={handleChange} />
                </Table.Column>
        
                <Table.Column flexGrow={1} align="center">
                    <Table.HeaderCell>Ratio</Table.HeaderCell>
                    <EditableCell dataKey="securityRatio" funcOnChange={handleChange} />
                </Table.Column>
        
                <Table.Column flexGrow={2} align="center">
                    <Table.HeaderCell>Action</Table.HeaderCell>
                    <ActionCell 
                        dataKey="rowId"
                        onEditClick={handleEditState}
                        onDeleteClick={handleDeleteRow}
                        onMoveRow={moveRowUpDown}
                    />
                </Table.Column>
            </Table>
        </div>
        </>        
    )
}

export default FlexTable
