import React from "react"
import { Checkbox } from 'rsuite'


interface ListItemProps {
    listItem: ListItemStruct
}

const ListItem: React.FC<ListItemProps> = props => {
    return (
        <li>
            <Checkbox />
        </li>
    )
}

export default ListItem