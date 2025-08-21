import {setupListeners} from "@reduxjs/toolkit/query"
import {configureStore} from "@reduxjs/toolkit"
import {productApi} from "./service/dummyData"
import {postsApiSlice} from "../state/posts/postsApiSlice"

export const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		[postsApiSlice.reducerPath]: postsApiSlice.reducer
	},
	middleware: (getDefaultMiddleware)=>
		getDefaultMiddleware()
			.concat(productApi.middleware)
			.concat(postsApiSlice.middleware)
})


setupListeners(store.dispatch)
