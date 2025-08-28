import {useState} from "react"
const initState = ["Bruce", "wayne"]

export const ArrayUseState= ()=>{
	console.log("Array usestate render")
	const [persons, setPersons] = useState(initState)
	return (
		<div>
			<h2>Array[] Use State</h2>
			<br/>
			{persons.map((p,i)=>(
				<div key={i}>
					{p}
				</div>
			))}
			<br/>
			<button onClick={()=>{
				const newP = [...persons]
				newP.push("Clark")
				newP.push("Kent")
				setPersons(newP)
			}}>Change Data</button>
		</div>
	)
}
