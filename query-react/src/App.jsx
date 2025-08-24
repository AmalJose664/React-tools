import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './components/Home.page'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import {RQSuperHeroPage} from "./components/RQSuperHero.page"

import {QueryClientProvider, QueryClient,} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {ParallelQueriesPage} from "./components/ParallelQueries"
import {DynamicParallelPage} from "./components/DynamicQueries"
import {DependantQueryPage} from "./components/DependentQueries"

import {PaginationPage} from "./components/Pagination"
import {InfiniteQueriesPage} from "./components/InfiniteQuery"

const queryClient = new QueryClient()
function App() {
	const  getRandom = ()=>{
		const times = Math.floor(Math.random() * 5) + 1
		const arr= []
		for(let i=0; i<=times; i++){
			arr.push(Math.floor(Math.random() * 20) + 1)
		}
		return arr
}
  return (
	  <QueryClientProvider client={queryClient}>
		<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
				</li>
				<li>
              <Link to='/rq-parallel'>RQ Parallel Q</Link>

				</li>
				<li>
              <Link to='/rq-dynamic'>RQ Dynamic Q</Link>

				</li>
				 <br/>
				<li>
              <Link to='/rq-depandant'>RQ Dependant Q</Link>

				</li>
				<li>
              <Link to='/rq-pagination'>RQ Pagination Q</Link>

				</li>
				<li>
              <Link to='/rq-infinite'>RQ Infinite Queries</Link>

				</li>



          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/rq-super-heroes/:id' element={<RQSuperHeroPage/>} />
			  <Route path='/super-heroes' element={<SuperHeroesPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
          <Route path='/rq-parallel' element={<ParallelQueriesPage />} />

			 <Route path='/rq-dynamic' element={<DynamicParallelPage heroIds={getRandom()}/>} />

			 <Route path='/rq-depandant' element={<DependantQueryPage email={"vishwas@example.com"} /> } />

			  <Route path='/rq-pagination' element={<PaginationPage /> } />

			  <Route path='/rq-infinite' 
			  element={<InfiniteQueriesPage /> } />


		  </Routes>
      </div>
    </Router>
		  <ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>

  )
}

export default App

