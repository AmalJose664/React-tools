import { useQueries } from '@tanstack/react-query'
import axios from 'axios'

const fetchSuperHero = heroId => {
  const url = `http://localhost:4000/superheroes/${heroId}`
	return axios.get(url)
}

export const DynamicParallelPage = ({ heroIds }) => {
	heroIds = Array.from(new Set(heroIds))
	console.log("Random numbers = ", heroIds)

	
	const queryResults = useQueries({
		queries: heroIds.map(id=>{
			
			return {
				queryKey: ['super-heroes', id],
				queryFn: ()=>fetchSuperHero(id)
			}
		})
	})
  
	//const [one] = queryResults
	//console.log(">>>>>>>>>>",one.data.data, "<<<<<<<<<<<")
  return <div>Dynamic Parallel Queries
	  {queryResults.map(({data}, i)=>{
			
		  return (<div key={i}>
			  <br/>
			  {data &&
			  data.data?.name} || 
			  {data && data.data?.alterEgo}
			  <hr/>
			  </div>)
	  })}
		</div>
}
