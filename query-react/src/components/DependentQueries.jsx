import {useQuery} from "@tanstack/react-query"
import axios from "axios"
const fetchByEmail = (email)=>{
	console.log(email)		
	return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCourseByChannel = (channelId)=>{
	console.log(channelId)
	return axios.get(`http://localhost:4000/channels/${channelId}`)
}
export const DependantQueryPage =({email})=>{
	const {data: user} = useQuery({
		queryKey: ["user", email],
		queryFn: ()=>fetchByEmail(email)	
	})
	const channelId = user?.data.channelId
	const {data:courses} = useQuery({
		queryKey: ["courses", channelId],
		queryFn: ()=>fetchCourseByChannel(channelId),
		enabled: !!channelId
	})


	return (
	<div>
		Dependant Query Page <br/>
		Courses: <br/>
		{courses?.data.courses.map(c=>(
			<div key={c}>{c}</div>
		)) }
		</div>
	)


}
