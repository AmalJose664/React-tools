// App.jsx
import {BasicTable} from "./components/BasicTable"
import {SortingTable} from "./components/SortingTable"
import {FilteringTable} from "./components/FilteringTable"
import {PaginationTable} from "./components/PaginationTable"
import {RowSelection} from "./components/RowSelection"
import {ColumnOrder} from "./components/ColumnOrder"
import {ColumnHide} from "./components/ColumnHide"
import {StickyTable} from "./components/StickyColumns"

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Tables!</h1>
		Contents
		 {//<BasicTable/>
			//	<SortingTable/>
			//<FilteringTable/>
			//<PaginationTable/>
			//<RowSelection/>
			//<ColumnOrder/>
			//<ColumnHide/>
			<StickyTable/>
		 }
		 
    </div>
  );
}

export default App;

