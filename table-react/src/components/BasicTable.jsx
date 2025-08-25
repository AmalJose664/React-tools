import {useMemo} from "react"
import {useTable} from "react-table"
import {COLUMNS, GROUPED_COLUMNS} from "./columns"
import MOCK_DATA from "./mock_data.json"
import "./table.css"

export const BasicTable = ()=>{
	const columns = useMemo(()=>GROUPED_COLUMNS, [])
	const data = useMemo(()=>MOCK_DATA, [])

	const tableInstance = useTable({
		columns: columns,
		data: data
	})

	const { getTableProps, getTableBodyProps,
		headerGroups, rows, prepareRow, footerGroups
	} = tableInstance

	return (
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
			<tfoot>
				{footerGroups.map(fGroup => (
					<tr {...fGroup.getFooterGroupProps()}>
						{fGroup.headers.map(column=> (
							<td {...column.getFooterProps()}>
								{column.render("Footer")}
							</td>
						))}
					</tr>
				))}
			</tfoot>
		</table>
	)

}
