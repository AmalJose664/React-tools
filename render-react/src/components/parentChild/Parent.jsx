import {useState} from "react"
import {Child} from "./Child"

export const Parent = ()=>{
	const [count, setCount] = useState(0)
	console.log("Parent Re render")
	return (
	<div>
		<h2>Parent</h2>
		{count}<br/>
		
		<button onClick={()=>setCount(count+1)}>Increase</button>
		<button onClick={()=>setCount(0)}>Make 0</button>
		<button onClick={()=>setCount(5)}>Make 5</button>
		<br/>
		<Child/>
	</div>
 )

}
