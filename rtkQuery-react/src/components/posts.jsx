import {useGetPostsQuery, 
	useCreatePostMutation
} from "../state/posts/postsApiSlice"
const Posts = () =>{
	const {data} = useGetPostsQuery({limit: 1, offset: 0})
	const [createPost, {data: added, isError, isLoading}] = useCreatePostMutation()
	const handleClick = ()=>{
		createPost({
			title: "My new Posts",

		})
	}
	return (
		<div>
			Posts Here
			<ul>	
			{data && data.map(d=>(
				<li>
					{d.title}
					<hr/>
					{d.body}
				</li>	
			)) }
			</ul>
			Add Post Here 
			<button onClick={handleClick}>
				Add Posts
			</button>
			{isError && "Post creation error"}
			{isLoading && "Post Creating..."}
			{added && JSON.stringify(added, null, 2)}
		</div>
	)
}

export default Posts
