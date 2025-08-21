import {Link, Outlet} from "react-router-dom"
const Product = ()=>{


	return (
		<>
			<div>
				Products here 
				<input type="search" placeholder="Search.."/>
			</div>
			<nav>
				<Link to="featured">Featured</Link>
				<Link to="new">New</Link>

			</nav>
			<Outlet/>
		</>
	)
}
export default Product
