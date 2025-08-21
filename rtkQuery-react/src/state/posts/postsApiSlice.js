import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const postsApiSlice = createApi({
	reducerPath: "posts",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com",
	}),
	endpoints: (builder)=> ({
		getPosts: builder.query({
			query: ({limit, offset})=>"/posts?_limit="+limit+"&_offset="+offset,		
		}),
		createPost: builder.mutation({
			query: (posts)=>({
				url:"/posts",
				method: "POST",
				body: posts
			})
		})
	})
})

export const {useGetPostsQuery, useCreatePostMutation} = postsApiSlice
