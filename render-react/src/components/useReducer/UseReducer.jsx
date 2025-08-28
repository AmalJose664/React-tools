import {useReducer} from "react"
const initialState = 0
const reducer = (state, action)=>{
	switch (action){
		case "incre": return state + 1;
		case "decre": return state -1;
		case "reset": return initialState
		default: return state
	}
}
export const UseReducer = ()=>{
	console.log("user reducer render")
	const [count, dispatch]= useReducer(reducer, initialState)
	return (
		<div>
			<h2>Use Reducer</h2>
			<br/>
			{count}<br/>
			<button onClick={()=>dispatch("incre")}>Incresae</button>
	
		<button onClick={()=>dispatch("decre")}>Decrease</button>

			<button onClick={()=>dispatch("reset")}>Reset</button>
		
		</div>
	)
}
