import {useGetAllProductsQuery} from "../app/service/dummyData"

const Base = ()=>{
	   const {data, isLoading, isError} = useGetAllProductsQuery()
	return (
		<div>

			{isError && "Some error...."}
			{isLoading && "Loading ...."}
			{data?.products.map(p=>(
				<div key={p.id}>
					{p.title}
					{p.images && <img height="60px" src={p.images[0]}/>}
				</div>
			))}

			<pre>
				{data && "" //JSON.stringify(data, null, 1)
				}
			</pre>
		</div>	
	)
}
export default Base;


