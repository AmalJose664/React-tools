import {useState} from "react"
import {useAsyncDebounce} from "react-table"

export const GlobalFilter = ({filter, setFilter})=>{
	const [value, setValue] = useState(filter)
	console.log(setFilter)
//	const debounce = useAsyncDebounce(val=> {
//		setFilter(val || undefined)
//	}, 1000)
	//	this function is error 
	return (
		<span>
			Search: {" "}
			<input value={value || ""} onChange={
			(e)=>{
				setValue(e.target.value)
//				debounce(e.target.value)
				}
			}/>
		</span>
	)

}
