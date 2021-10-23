
import { Container, Table } from "rsuite"

const VirutalTable = ({ tableData }) => {
    
    const getValue = (d, keyName="idValue") => {
        return d[`${keyName}`]
    }

    const sortHandler = ({ oldIndex, newIndex }) => {
        
    }

    return (
        <div>
            <Table
                virtualized
                bordered={true}
                cellBordered={true}
                height={600}
                width={400}
                loading={false}
                data={tableData}
                onRowClick={data => {
                    console.log(`Table clicked!\tValue: ${getValue(data)}`)
                }}            
            >
                <Table.Column align="center" width={100}>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.Cell dataKey="idValue" />                    
                </Table.Column>        
            </Table>
        </div>
    )
}

export default VirutalTable