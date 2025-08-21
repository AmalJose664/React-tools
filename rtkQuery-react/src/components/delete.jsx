
import {useDeleteProductMutation} from "../app/service/dummyData"

const DeleteProduct = ()=>{
	const [deleteProd, {data, isError, isLoading}] = useDeleteProductMutation()
	const handleDelete = async()=>{
		try{
			const result = await deleteProd(5).unwrap()
			console.log("Deleted:", result)
		}catch(er){
			console.log(er.message, er, "Here is it")
			
		}
	}
	return (
		<div>
			Delete prodcuct here
			{isError && "Some Error..."}
			{isLoading && "Loading ...."}
			<button 
				onClick={handleDelete}
				disabled = {isLoading}
			>
				Delete Product
			</button>
			{data && <pre>{JSON.stringify(data,null, 2)}</pre>}
		</div>
	)

}

export default DeleteProduct
