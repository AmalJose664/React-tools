import {useState, createContext} from "react"
import {ChildA} from "./ContextChild"

export const CountContext = createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children})=>{
	console.log("Parent re render")
	const [count, setCount] = useState(0)
	return (
		<div>
			<h2>Context Parent</h2>
			<p>{count}</p>
			<button onClick={()=>setCount(c=>c+1)}>Increase</button>
			<CountProvider value={count}> 
				{/*<MemoChildA/>*/}
				{children}
			</CountProvider>
		</div>
	)
}
