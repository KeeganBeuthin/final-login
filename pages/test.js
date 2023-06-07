import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import {useMemo} from 'react'
import { useTable, usePagination } from "react-table";
import  styles from '../styles/app.module.css'
import { end } from "@popperjs/core";

export default function Table(){
  const [data, setData] = useState([]);


  

  useEffect(() => {
    axios
      .get('http://localhost:9000/transaction')
      .then(response => setData(response.data))
    }, [])


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
       accessor: 'id',
     },
     {
      Header: 'Description',
      accessor: 'information'
     }
    ],
    []
  )

  
  
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    page, // fetch the current page
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    rows,
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 7},
      autoResetPage: false
    },
    usePagination
  )
  return (
    <div>
      <table className={styles.table}{...getTableProps()}>
        <thead className={styles.thead}>
          {headerGroups.map((headerGroup) => (
            <tr className={styles.trHead}{...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th className={styles.th} {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tbody}{...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr className={styles.trBody}{...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td className={styles.td}{...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="pr-8"  onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous page{" "}
      </button>
      <button  className=" pl-8" onClick={() => nextPage()} disabled={!canNextPage}>
        Next page{" "}
      </button>
    </div>
  );}