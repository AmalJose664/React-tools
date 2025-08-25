import {useMemo} from "react"
import {useTable, usePagination } from "react-table"
import {COLUMNS, GROUPED_COLUMNS} from "./columns"
import MOCK_DATA from "./mock_data.json"
import "./table.css"

export const PaginationTable = ()=>{
	const columns = useMemo(()=>COLUMNS, [])
	const data = useMemo(()=>MOCK_DATA, [])

	const tableInstance = useTable({
		columns: columns,
		data: data,
		initialState: {pageIndex: 3}
	}, usePagination)

	const { getTableProps, getTableBodyProps,
		headerGroups, page, prepareRow, nextPage,
		previousPage, canNextPage, canPreviousPage,
		pageOptions, state, gotoPage, pageCount,
		setPageSize
	} = tableInstance

	const {pageIndex, pageSize} = state
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
				{page.map((row)=>{
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
			<div>
				<span>
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</span>
				<span>
					| Go to Page: {" "}
					<input tupye="number" 
					defaultValue={pageIndex+1}
						onChange={(e)=>{
							const pageNumber = e.target.value?
								Number(e.target.value) - 1 : 0
							gotoPage(pageNumber)
						}} style={{width: "50px"}}
					/>
				</span>
				<button disabled={!canPreviousPage}
					onClick={()=>gotoPage(0)}>{"<<"}</button>
				<button disabled={!canPreviousPage}
				onClick={()=>previousPage()}>Previous</button>
				<button disabled={!canNextPage}
				onClick={()=>nextPage()}>Next</button>

				<button disabled={!canNextPage}
				onClick={()=>gotoPage(pageCount - 1)}
				>{">>"}
				</button>
				<select value={pageSize} 
					onChange={(e)=>setPageSize(Number(e.target.value))}>

					{[10,25,50].map((size, i)=>(
						<option key={i} value={size}>
							Show {size}
						</option>
					))}
				</select>
			</div>
		</>
	)

}
