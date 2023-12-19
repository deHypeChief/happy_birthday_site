import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Home from './home'
import NewPost from './newPost'


// import Css
import '../style/global.css'

export default function Layout(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/newPost' element={<NewPost/>}/>
            </Routes>
        </BrowserRouter>
    )
}