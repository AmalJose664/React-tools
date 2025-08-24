import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query"
import axios from "axios"

export const useSuperHeroesData = ()=>{
	return useQuery({
		queryKey: ["super-heroes"],
		queryFn: ()=>{
			return axios.get(
				//"https://jsonplaceholder.typicode.com/users"
				"http://localhost:4000/superheroes"
			)
		},
		/*select: (data)=>{
			console.log(data.data, "From select feidl")
			const newData =  data.data.map(d=>{
				return {...d, name: d.name +" !!!!!!@@@@"}
			})
			console.log(newData)
			return newData
		} */
		//enabled: false,
		//staleTime: 30 * 1000,
	   //refetchOnMount: false,
		//refetchOnWindowFocus: true,
		
	})

}

export const useAddSuperHero = ()=>{
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (hero)=>{
			console.log(hero, " From hook page")
			return axios.post("http://localhost:4000/superheroes", hero)
		},
	/*	onSuccess: (data)=>{
			console.log("Success to add hero")
		//queryClient.invalidateQueries(// key)

			queryClient.setQueryData(["super-heroes"],
				(oldData)=>{
					return {
						...oldData,
						data: [...oldData.data, data.data]
					}
				}
			)
		}
		*/
		onMutate: async(newHero)=>{
			await queryClient.cancelQueries(["super-heroes"])
			const prevoiusData = queryClient
			.getQueryData(["super-heroes"])
			queryClient.setQueryData(["super-heroes"],
				(oldData)=>{
				return {
					...oldData,
					data: [...oldData.data, 
					{
						id: oldData?.data?.length + 1,
						...newHero
						}]
				}
			})
			return {prevoiusData}
		},
		onError: (_er, _hero, context)=>{
			console.log("Some error happend")
			queryClient.setQueryData(["super-heroes"], 
				context.prevoiusData)
		},
		onSettled: ()=>{
			console.log("Done mutation")
			queryClient.invalidateQueries(["super-heroes"])
		},
	})
}

