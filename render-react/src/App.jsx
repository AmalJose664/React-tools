// App.jsx
import {UseReducer} from "./components/useReducer/UseReducer"
import {UseState} from "./components/useState/UseState"
import {ObjectUseState} from "./components/immutable/ObjectUseState"

import {ArrayUseState} from "./components/immutable/ArrayUseState"
import {Parent} from "./components/parentChild/Parent"

import {GrandParent} from "./components/optimised/GrandParent"
import {Parent2} from "./components/optimised/Parent2"
import {Parent3} from "./components/incorrent-optimised/Parent3"
import {Parent4} from "./components/incorrent-optimised/Parent4"
import {ContextParent} from "./components/context/ContextParent"
import {ChildA} from "./components/context/ContextChild"



function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Optimised Render!</h1>
		Contents
		 {
			 <>
				 <ContextParent>
					 <ChildA/>
				 </ContextParent>
				<hr/>
				 {/*<Parent4/>
				 <hr/>
				 <Parent3/>
				 <hr/>
				 <Parent2/>
				 <hr/>
				 <GrandParent/>
				 <hr/>
				  <Parent/>
				 <hr/>
				 <ArrayUseState/>
				 <hr/>
				 <ObjectUseState/>
				 <hr/>
				<UseReducer/>
					<hr/>
				<UseState/> */}
				</>		
		 }
    </div>
  );
}

export default App;

