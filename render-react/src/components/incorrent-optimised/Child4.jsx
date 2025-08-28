import {memo} from "react"
export const Child4 = ({name})=>{
	const date = new Date()
	console.log("Child FOur re rendered")
	return (
		<div>
			<h2>Child Four incorrect Optimised</h2>
			<p>Contents </p>
			hello {name} its currently {date.getHours()} {date.getMinutes()} {date.getSeconds()}
		</div>
	)
}
export const MemoChild = memo(Child4)
