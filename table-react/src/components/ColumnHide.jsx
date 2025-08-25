import {useMemo} from "react"
import {useTable, } from "react-table"
import {COLUMNS, GROUPED_COLUMNS} from "./columns"
import MOCK_DATA from "./mock_data.json"
import "./table.css"
import {Checkbox} from "./CheckBox"


export const ColumnHide = ()=>{
	const columns = useMemo(()=>COLUMNS, [])
	const data = useMemo(()=>MOCK_DATA, [])

	const tableInstance = useTable({
		columns: columns,
		data: data
	})

	const { getTableProps, getTableBodyProps,
		headerGroups, rows, prepareRow,
		allColumns, getToggleHideAllColumnsProps
	} = tableInstance

	return (
		<>
			<div> 
				<div>
				<Checkbox {...getToggleHideAllColumnsProps()}/> Toggle All
				</div>
				{
					allColumns.map((col)=>(
						<div key={col.id}>
							<label>
					<input type="checkbox" 
					{...col.getToggleHiddenProps()} />
								{col.Header}
							</label>
						</div>
					))
				}
			</div>

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
		</table> </>
	)

}
