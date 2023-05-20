import DataTable from 'react-data-table-component';
import React, {useEffect, useState} from "react"
import axios from "axios"
const columns = [
    {
        name: 'id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'body',
        selector: row => row.body,
        sortable: true,
    },
    {
        name: 'title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'userId',
        selector: row => row.userId,
        sortable: true,
    },
];


function MyComponent() {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          console.log(res)
          setData(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }, []);
    return (
        <DataTable
            columns={columns}
            data={data}
            fixedHeader
        />
    );
};

export default MyComponent