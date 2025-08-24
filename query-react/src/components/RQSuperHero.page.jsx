import {useParams} from "react-router-dom"
import {useSuperHeroData} from "../hooks/useSuperHeroData"
export const RQSuperHeroPage = ()=>{
	const {id} = useParams()
	const {data, isLoading, isError} = useSuperHeroData(id)
	if(isLoading){
		return (
			<h2>Loading...</h2>
		)
	}
	if(isError){
		<h2>Some Error...</h2>
	}
	return (
		<div>
			Single Super Hero Page
				<br/>
			Render <br/> <hr/>
			{data?.data.name} <br/> 
			{data?.data.alterEgo}
		</div>

	)

}
