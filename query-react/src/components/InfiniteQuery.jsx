import { Fragment } from 'react'
import {useInfiniteQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

export const InfiniteQueriesPage = () => {
	const {data, isLoading, isError, error,
		hasNextPage, fetchNextPage, isFetching, 
		isFetchingNextPage
	}= useInfiniteQuery({
		queryKey: ["colors"],
		queryFn: fetchColors,
		getNextPageParam: (_lastPage, pages) => {
			if(pages.length < 4){
				return pages.length + 1
			}else{
				return undefined
			}

		}
	})
	 if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  
  return (
    <>
      <div> 
			Infinite Pagess
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map(color => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ))}
            </Fragment>
          )
        })}
      </div>
      <div>
			<button onClick={fetchNextPage}
			disabled= {!hasNextPage}
			> Load More
			</button>
      </div>

      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null
			}</div>
    </>
  )
}
