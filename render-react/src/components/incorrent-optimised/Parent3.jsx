import {useState} from "react"
//import {Child3, MemoChild} from "./Child3"
import {Child4, MemoChild} from "./Child4"

export const Parent3 = ()=>{
	const [count, setCount] = useState(0)
	const [name, setName] = useState("vishwas")
	console.log("Parent Three Re render")
	return (
	<div>
		<h2>Parent Three Optimised</h2>
		{count}<br/>
		
		<button onClick={()=>setCount(count+1)}>Increase</button>

		<button onClick={()=>setName("codeEvolution")}>{name}</button>
		<br/>
		<br/>
		
		<MemoChild name={name} />

		{/*<MemoChild name={name} >
			<strong> Hello people </strong>
		</MemoChild> */}
	</div>
 )

}
