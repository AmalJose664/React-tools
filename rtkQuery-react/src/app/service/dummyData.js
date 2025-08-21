import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productApi = createApi({
	reducerPath: "products",
	baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com"}),
	endpoints: (builder)=>{
		return {
			getAllProducts: builder.query({
				query: ()=>"/products"
			}),
			getProductById: builder.query({
				query: (id)=> `/products/${id}`
			}),
			addNewProduct: builder.mutation({
				query: (newPro)=>({
					url: "/products/add",
					method: "POST",
					headers: {
						"Content-Type":"application/json"
					},
					body: newPro
				})
			}),
			updateProduct: builder.mutation({
				query:({id, updatedProd})=>({
					url: "/products/"+id,
					method: "PUT",
					headers: {
						"Content-Type":"application/json"
					},
					body: updatedProd
				})
			}),
			deleteProduct: builder.mutation({
				query: (id)=>({
					url: "/products/"+id,
					method: "DELETE"
				})
			})
		}
	}
})

export const { 
	useGetAllProductsQuery, 
	useGetProductByIdQuery,
	useAddNewProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation
} = productApi
