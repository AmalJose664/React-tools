import {	useAddNewProductMutation} from "../app/service/dummyData"

	const AddNew = ()=>{
		const [addNewProduct,{data, isError, isLoading} ] = useAddNewProductMutation()
		const handleAddProduct = async()=>{
			const pData = {
				id : 1,
				title: "Amazing T-Shirt",
				description: "This is one of the best and amazing t-shirt in the market"
			}
			try{
				await addNewProduct(pData)
			}
			catch (er){
				console.log("Error",er.message)
			}
		}
		return (
			<div>
				Add new Product Here
				{isError && "Some error ..."}
				{isLoading && "Loading ..."}
				<button onClick={handleAddProduct}
				disabled = {isLoading}
				>
					Add New Product
				</button>
				{data && <pre>{JSON.stringify(data)}</pre>}
			</div>
		)
	}
export default AddNew
