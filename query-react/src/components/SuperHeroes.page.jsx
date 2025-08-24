import {useState, useEffect} from "react"
import axios from "axios"
export const SuperHeroesPage = ()=>{
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState()

	useEffect(()=>{
		axios.get("http://localhost:4000/superheroes").then(
		(res)=>{
			console.log(res.data)
			setData(res.data)
			setIsLoading(false)
		}
		).catch(e=>{
			console.log(e.message)
			setIsLoading(false)
		})
	}, [])
	if(isLoading){
		return (<h3>Loading...</h3>)
	}
	return (
		<div>
			<h2>Super Heroes Page</h2>

			{data.map(d=>{
				return (
					<div key={d.name}>
						{d.name}
					</div>
				)
			})}
		</div>

	)


}

