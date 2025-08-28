import {useState} from "react"
const initState = {
	name: "Bruce",
	lname: "Wayne"
}

export const ObjectUseState= ()=>{
	console.log("Obejct usestate render")
	const [person, setPerson] = useState(initState)
	return (
		<div>
			<h2>Object Use State</h2>
			<br/>
			{person.name} {person.lname}
			<button onClick={()=>{
				const newP = {...person}
				newP.name = "Clark"
				newP.lname = "Kent"
				setPerson(newP)
			}}>Change Name</button>
		</div>
	)
}
