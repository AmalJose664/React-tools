
import {useUpdateProductMutation} from "../app/service/dummyData"

const UpdateJsx = ()=>{
	const [updatedProd, {data, isError, isLoading}] = useUpdateProductMutation()
	const handleUpdate = async()=>{
		try{
			const obj = {
				title: "Hey guys...."
			}
			await updatedProd({
				id: 4,
				updatedProd: obj
			})
		}catch(er){
			console.log("Error ..",er.message)
		}
	}
	return (
		<div>
			Update Product Here
			{isError && "Some error ..."}
			{isLoading && "Loading data.."}
			<button
			onClick={handleUpdate}
			disabled= {isLoading}
			>
				Update Product
			</button>
			{data && <pre>{JSON.stringify(data, null, 2)}</pre>}

		</div>
	)

}

export default UpdateJsx
