import { useTable } from 'react-table'
import * as React from 'react'
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import data from '../database/PostGres'
import jsonData from '../database/PostGres'
import PaginationTable from "../components/PaginationTable";

 export default function App() {
  const [cells, setCells] = useState([]);

  const getData = async () => {
    const resp = await fetch("http://localhost:9000/transaction");
    const data = await resp.json();
    console.log(resp)
    setCells(data);
  };


  
  useEffect(() => {
    getData();
  }, []);
  const data = React.useMemo(() => cells, []);
 

   const columns = React.useMemo(
     () => [
       {
         Header: 'Name',
         accessor: 'name', // accessor is the "key" in the data
       },
       {
         Header: 'Create Time',
         accessor: 'create_time',
       },
       {
        Header: 'Value',
        accessor: 'value',
      },
      {
        Header: 'ID',
        accessor: 'user_id',
      },
     ],
     []
   )


   return <>{cells && <PaginationTable columns={columns} data={data} />}</>;}