import axios from "axios"
import {useQuery, useQueryClient} from "@tanstack/react-query"


export const useSuperHeroData = (id)=>{
	const queryClient = useQueryClient()
	return useQuery({
		queryKey: ['super-hero', id],
		queryFn: ({queryKey})=>{
			//const key = queryKey[1] //id also can be accesed here 
			return axios.get(
			"http://localhost:4000/superheroes/"+id)
		},
		initialData: ()=>{
			console.log("Trying to find from cache")
			const hero = queryClient.getQueryData("super-heroes")?.data?.find(hero=>hero.id === parseInt(id))
			if(hero){
				console.log("Data found from here")
				return {
					data:hero
			}
			}else{
				return undefined
			}
		}
		
	})

}
