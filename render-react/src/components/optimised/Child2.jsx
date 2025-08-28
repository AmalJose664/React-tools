import {memo} from "react"
export const Child2 = ()=>{
	console.log("Child Two Re render")
	return (
	<div>
		<h2>Child Two Optimised</h2>
	
	</div>
 )

}
export const MemoChild = memo(Child2)
