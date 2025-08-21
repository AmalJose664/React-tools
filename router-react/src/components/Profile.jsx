import {useAuth} from "./auth"
import {useNavigate} from "react-router-dom"
const Profile = ()=>{
	const auth = useAuth()
	const navigate = useNavigate()
	return (
		<div>
			<h2>Profile Page</h2>
			Welcome {auth.user}
			<button onClick={
			()=>{
				auth.logout()
				navigate()
				}
			}>Logout</button>
		</div>
	)
}

export default Profile
