import {useContext, memo} from "react"
import {CountContext} from "./ContextParent"
export const ChildA = ()=>{
	console.log("Child A re render")
	return (
		<div> 
			<h2>Conetxt Child A</h2>
			<ChildB/>
		</div>
	)
}
export const ChildB = ()=>{
	console.log("Child B re render")
	return (
		<div> 
			<h2>Conetxt Child B</h2>
			<ChildC/>
		</div>
	)
}
export const ChildC = ()=>{
	const count = useContext(CountContext)
	console.log("Child C re render")
	return (
		<div> 
			<h2>Conetxt Child C</h2>
			count = {count}
		</div>
	)
}
export const MemoChildA = memo(ChildA) 
