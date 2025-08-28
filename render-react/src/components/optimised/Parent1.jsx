import {useState} from "react"
//import {Child1} from "./Child1"

export const Parent1 = ({children}, props)=>{
	const [count, setCount] = useState(0)
	console.log("Parent One Re render")
	return (
	<div>
		<h2>Parent One Optimised</h2>
		{count}<br/>
		
		<button onClick={()=>setCount(count+1)}>Increase</button>
		<br/>
		{children}
		{/*<Child1/>*/}
	</div>
 )

}
