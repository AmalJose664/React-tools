import {useState} from "react"
import {useAuth} from "./auth"
import {useNavigate, useLocation} from "react-router-dom"


const Login = ()=>{
	const [user, setUser ] = useState("")
	const auth = useAuth()
	const navigate = useNavigate()
	const location = useLocation()

	const redirectPath = location.state?.path || "/"

	const handleLogin = ()=>{
		if(!user) return
		auth.login(user)
		navigate(redirectPath, {replace: true})
	}
	return (
		<div>
			<h2>Login page</h2>
			UserName
			<input value={user} type= "text" onChange={(e)=>setUser(e.target.value)}/>
			<button onClick={handleLogin}>
				Login
			</button>
		</div>
	)

}
export default Login
