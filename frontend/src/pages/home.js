import { useState, useEffect, memo } from "react"
import { FixedSizeList as List, areEqual  } from 'react-window';
import { v4 as uuidv4 } from "uuid"
import { Link } from 'react-router-dom';
import { GenerateRandomNumberNoId } from "../lib/generator"


import "./styles.css"


const Row = memo(({ data, index, style }) => {
    const item = data[index];
    return (
        <div
            onClick={() => console.log(`List value: ${item}`)}
            style={style}
        >
            <Link id={uuidv4()} to={`/tracker/${item}`}>
                {`#${item}`}                
            </Link>
        </div>
    );
}, areEqual);


const Home = () => {

	const [fakeData, setFakeData] = useState([])

    useEffect(() => {
        async function getNewData() {
            const newData = await GenerateRandomNumberNoId({ totalCount: 10000, minValue: 1000, maxValue: 10000})
            setFakeData(newData)
        }
        getNewData()
    }, [])

    return (
        <div className="list-container center">
            <List
                className="number-list"
                innerElementType="ul"
                itemData={fakeData}
                itemCount={fakeData.length}
                itemKey={() => uuidv4()}
                itemSize={25}
                height={600}
            >
            {Row}
            </List>
        </div>
    )
}

export default Home