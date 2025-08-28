import {useState, useMemo, useCallback} from "react"
import {Child5, MemoChild} from "./Child5"

export const Parent4 = ()=>{
	const [count, setCount] = useState(0)
	const [name, setName] = useState("vishwas")
	console.log("Parent Four Re render")
	const pers = {
		fname: "Bruce",
		lname: "Wayne"
	}
	const memoPers = useMemo(()=>pers,[])
	const handleClick = ()=>"Button Clicked"
	const memoHandleClick = useCallback(handleClick, [])
	return (
	<div>
		<h2>Parent Four Optimised</h2>
		{count}<br/>
		
		<button onClick={()=>setCount(count+1)}>Increase</button>

		<button onClick={()=>setName("codeEvolution")}>{name}</button>
		<br/>
		<br/>
		
		<MemoChild name={name} pers = {memoPers} 
			handleClick={memoHandleClick}
		/>

		{/*<MemoChild name={name} >
			<strong> Hello people </strong>
		</MemoChild> */}
	</div>
 )

}
