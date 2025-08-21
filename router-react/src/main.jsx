import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux"
import('eruda').then(eruda => eruda.init());
import {AuthProvider} from "./components/auth"

createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<App/>
	</AuthProvider> 
	
)
