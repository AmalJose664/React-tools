import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
//import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/products"
import Featured from "./components/Featured"
import New from "./components/New"
import User from "./components/users"
import UserDetails from "./components/UserDetails"
import Profile from "./components/Profile"
import Login from "./components/Login"
import {useAuth} from "./components/auth"
import RequireAuth from "./components/requireAuth"

import {lazy, Suspense} from "react"

const LazyAbout = lazy(()=>import ("./components/About"))


export default function App() {
	const auth = useAuth()
	return (
	
			
	<Router>
      <div className="p-4">
        {/* Navigation */}
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Products</Link>
          <Link to="/users">Users</Link>
          <Link to="/profile">Profile</Link>
			  { !auth.user && 
           <Link to="/login">Login</Link> 
				}
		  </nav>

        {/* Route Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" 
				 element={< Suspense 
					fallback="Loading about... "
				 ><LazyAbout/></Suspense>} />
			  <Route path="/product" element={<Product />}>
					<Route index element={<Featured/>}/>
				  <Route path="featured" element = {<Featured/>}/>
				  <Route path="new" element = {<New/>}/>
			  </Route>
			
			<Route path="/contact" element={<Contact />} />
			<Route path="/profile" element={
				<RequireAuth><Profile/></RequireAuth>  } />
		
			<Route path="/users" element={<User />}/>
		<Route path="/login" element={<Login />}/> 
			  <Route path="/users/:id" element={<UserDetails/>}/>

		  </Routes>
      </div>
	</Router>		

  );
}

