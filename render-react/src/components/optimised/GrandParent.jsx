import {useState} from "react"
import {Parent1} from "./Parent1"
import {Child1} from "./Child1"
export const GrandParent = () =>{
	const [count, setCount] = useState(0)
	console.log("Grand Parnt Re render")
	return (
		<div>
			<h2>Grand Parent Optimised</h2>
			<br/>
			{count} <br/>
			<button onClick={()=>setCount(count-1)}>Decrese</button>
			<Parent1 newCount = {count}>
				<Child1/>
			</Parent1>
		</div>
	)
}
