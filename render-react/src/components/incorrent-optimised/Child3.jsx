import {memo} from "react"
export const Child3 = ({children, name})=>{
	console.log("Child Three Re render")
	return (
	<div>
		<h2>Child Three inCorect -Optimised</h2>
		<p>Child 3 COntents</p>
		{children} {name}
	</div>
 )

}
export const MemoChild = memo(Child3)
