import {memo}from "react"
export const Child5 = ({name, pers})=>{
	console.log("Child Five re rendered")
	return (
		<div>
			<h2>Child Five incorrect Optimised</h2>
			<p>Contents </p>
			hello {name} {pers.fname} {pers.lname}
		</div>
	)
}
export const MemoChild = memo(Child5)
