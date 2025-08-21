import {useParams} from "react-router-dom"


const UserDetails = ()=>{
	const params = useParams()
	const {id} = params
	
	return (
		<div>
			<h2>User Details</h2>
			User id = {id}
		</div>
	)

}
export default UserDetails
