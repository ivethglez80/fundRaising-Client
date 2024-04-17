import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import FundMain from './pages/fundMain'
import DshBrd from './dashboard/dshbrd'
import Login from "./components/login/login"
import Page404 from './components/login/error404'



function App() {


  return (
    <>
    <Provider store={store}>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<FundMain />} />
          <Route path="/admin" element={<DshBrd/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        </BrowserRouter>
      </div>
    </Provider>
    </>
  )
}

export default App
