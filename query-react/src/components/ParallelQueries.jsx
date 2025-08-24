import {useQuery} from "@tanstack/react-query"
import axios from "axios"
export const ParallelQueriesPage = ()=>{
	const {data: heroData} = useQuery({
		queryKey:['super-heroes'],
		queryFn: ()=>{
			return axios.get("http://localhost:4000/superheroes")
		}
	})
	const {data} = useQuery({
		queryKey:['friends'],
		queryFn: ()=>{
			return axios.get("http://localhost:4000/friends")
		}
	})
	return (
		<div>
			<h1>Parallel Queries Page</h1>
			{JSON.stringify(heroData?.data, null, 2)} <br/>
				{JSON.stringify(data?.data, null, 2)}
		</div>
	)

}
