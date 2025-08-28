import {useState} from "react"
let outer=0
export const UseState = ()=>{
	const [count, setCount] = useState(0)
	console.log("Use State Re render")
	outer++
	return (
	<div>
		<h2>Use State</h2>
		{count}<br/>
		Outer counter = {outer}<br/>
		<button onClick={()=>setCount(count+1)}>Increase</button>
		<button onClick={()=>setCount(0)}>Make 0</button>
		<button onClick={()=>setCount(5)}>Make 5</button>


	</div>
 )

}
