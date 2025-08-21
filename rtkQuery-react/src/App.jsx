import Base from "./components/base"
import Specific from "./components/specific"
import AddNew from "./components/addNew"
import UpdateJsx from "./components/update"
import DeleteProduct from "./components/delete"
import Posts from "./components/posts"

function App() {
	//console.log(res, " Here")
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
			Content
			{/* <Base/> /*}
			{ /* <Specific/> */}
			{/*<AddNew />
			<UpdateJsx/>
			<DeleteProduct/> */}
			<Posts/> 
		</div>
   </>
  )
}

export default App
