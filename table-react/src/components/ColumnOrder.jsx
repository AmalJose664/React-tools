import {useMemo} from "react"
import {useTable, useColumnOrder} from "react-table"
import {COLUMNS, GROUPED_COLUMNS} from "./columns"
import MOCK_DATA from "./mock_data.json"
import "./table.css"

export const ColumnOrder = ()=>{
	const columns = useMemo(()=>COLUMNS, [])
	const data = useMemo(()=>MOCK_DATA, [])

	const tableInstance = useTable({
		columns: columns,
		data: data
	}, useColumnOrder)

	const { getTableProps, getTableBodyProps,
		headerGroups, rows,setColumnOrder,  prepareRow
	} = tableInstance

	const changeOrder = ()=>{
		setColumnOrder(["id", "first_name", "last_name", 
			"phone ", "country", "date_of_birth"])
	}
	return (
		<>
			<button onClick={changeOrder}>Change Order</button>
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((hGroup)=>(
					<tr key={hGroup.id} {...hGroup.getHeaderGroupProps()}>
						{
							hGroup.headers.map((column)=>(
								<th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
		</table>
		
		</>
	)

}
