
import {useGetProductByIdQuery} from "../app/service/dummyData"

const Specific = ()=>{
	const {data, isError, isLoading} = useGetProductByIdQuery(2)
	console.log(data)
	return (
		<div>
			{isError && "Some errorr..."}
			{isLoading && "Loading..."}
			{data && <>
				<pre>{JSON.stringify(data,null, 2)}</pre>
				</>
			}
		</div>
	)
}

export default Specific
