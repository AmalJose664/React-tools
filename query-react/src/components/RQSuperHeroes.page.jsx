import {useSuperHeroesData, useAddSuperHero} from "../hooks/useSuperHeroesData"
import {Link} from "react-router-dom"
import {useState} from "react"


export const RQSuperHeroesPage = ()=>{
	const [name, setName] = useState("")
	const [ego, setEgo] = useState("")
	const {data, isLoading, isError, refetch, isFetching} = useSuperHeroesData()
	
	const {mutate} = useAddSuperHero()

	const handleAddHero = ()=>{
		if(!name || !ego) return console.log("Some fields are missing !!")
		mutate({name,alterEgo: ego})
	}

	if(isLoading || isFetching) return (
		<h2>Loading....</h2>
	)
	if(isError) {
		return (
		<h2>Some Error....</h2>

	)}
	
	return (
		<div>
			<h2>RQ Super Heores Page</h2>
			Add New Here 
			<div>
				<input type="text" value={name}
					onChange={(e)=>setName(e.target.value)}
					placeholder="Enter New Name.."
				/>
			<input type="text" value={ego}
					onChange={(e)=>setEgo(e.target.value)}
					placeholder="Enter New alter ego.."
				/>
				<button onClick={handleAddHero}>Add Hero</button>
			</div>
			<button onClick={refetch}>
				Fetch Hero s
			</button>
			{data?.data.map(sh=>{
				return (
					<div key={sh.name}>{sh.name} 
						Go To the page 
						<Link to={"/rq-super-heroes/"+sh.id}>{sh.name}</Link>
					</div>
				)
			}) }
		</div>

	)


}

