import {useSearchParams} from "react-router-dom"
const User = ()=>{
	const [searchParams, setSearchParams] = useSearchParams()
	const showActive = searchParams.get("filter") === "active"
	console.log(useSearchParams())
	return (
	<div>
		<h3>Users</h3>
		<h5>User 1</h5>
		<h5>User 2</h5>
		<h5>User 3</h5>
		<h5>User 4</h5>
		<h5>User 5</h5>
		<button onClick={()=>setSearchParams(
			{filter:"active"})}>
				Active
			</button>
		<button onClick={()=>setSearchParams(
			{})} >
				Reset 
			</button>
		{showActive ? <>Showing Actives</>: <>Showing All Users</>}
	</div>
)
}

export default User
