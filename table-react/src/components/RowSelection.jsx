import {useMemo} from "react"
import {useTable, useRowSelect} from "react-table"
import {COLUMNS, GROUPED_COLUMNS} from "./columns"
import MOCK_DATA from "./mock_data.json"
import "./table.css"
import {Checkbox} from "./CheckBox"

export const RowSelection = ()=>{
	const columns = useMemo(()=>COLUMNS, [])
	const data = useMemo(()=>MOCK_DATA, [])

	const tableInstance = useTable({
		columns: columns,
		data: data
	}, useRowSelect, (hooks)=>{
		hooks.visibleColumns.push((columns)=>{
			return [
				{
					id: "selection",
					Header:({getToggleAllRowsSelectedProps})=>{
					return <Checkbox {...getToggleAllRowsSelectedProps()} />
					},
					Cell: ({row})=>(
						<Checkbox {...row.getToggleRowSelectedProps()}/>
					),
				},
				...columns
			]
		})
	})

	const { getTableProps, getTableBodyProps,
		headerGroups, rows, prepareRow, 
		selectedFlatRows
	} = tableInstance

	const firstPageRows = rows.slice(0, 10)
	return (
		<>
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
				{firstPageRows.map((row)=>{
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
			<pre><code>
				{JSON.stringify({
					selectedFlatRows: selectedFlatRows.map(
						r=>{
							return r.original
						})
				}, null, 2) }
			</code></pre>
		</>
	)

}
