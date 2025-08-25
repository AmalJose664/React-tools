import {useMemo} from "react"
import {useTable,useFilters ,useGlobalFilter} from "react-table"
import {COLUMNS, GROUPED_COLUMNS} from "./columns"
import MOCK_DATA from "./mock_data.json"
import "./table.css"
import {GlobalFilter} from "./GlobalFilter"
import {ColumnFilter} from "./ColumnFilter"

export const FilteringTable = ()=>{
	const columns = useMemo(()=>COLUMNS, [])
	const data = useMemo(()=>MOCK_DATA, [])

	const defaultColumns = useMemo(()=>{
		return {
			Filter: ColumnFilter
		}
	},[])
	const tableInstance = useTable({
		columns: columns,
		data: data,
		defaultColumn: defaultColumns
	}, useFilters, useGlobalFilter)

	const { getTableProps, getTableBodyProps,
		headerGroups, rows, prepareRow,
		state, setGlobalFilter
	} = tableInstance
	const { globalFilter } = state

	return (<>Filtering Table
		<GlobalFilter filter={globalFilter} 
		setFilter={setGlobalFilter}/>
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((hGroup)=>(
					<tr key={hGroup.id} {...hGroup.getHeaderGroupProps()}>
						{
							hGroup.headers.map((column)=>(
								<th {...column.getHeaderProps()}>{column.render("Header")}
									<div>{column.canFilter ? 
											column.render("Filter") : null}</div>
								</th>
							))
						}
					</tr>
				))}	
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row)=>{
					prepareRow(row)
					return (
						<tr key={row.id} {...row.getRowProps()} >
							{
								row.cells.map((cell, j)=>(
									<td {...cell.getCellProps()} key={j}>
										{cell.render("Cell")}
									</td>
								))
							}
						</tr>
					)
				})}
			</tbody>
		</table></>
	)

}
