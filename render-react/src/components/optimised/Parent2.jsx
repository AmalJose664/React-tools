import {useState} from "react"
import {Child2, MemoChild} from "./Child2"

export const Parent2 = ()=>{
	const [count, setCount] = useState(0)
	const [name, setName] = useState("vishwas")
	console.log("Parent Two Re render")
	return (
	<div>
		<h2>Parent Two Optimised</h2>
		{count}<br/>
		
		<button onClick={()=>setCount(count+1)}>Increase</button>

		<button onClick={()=>setName("codeEvolution")}>{name}</button>
		<br/>
		<br/>
		
		<MemoChild name={name}/>
	</div>
 )

}
