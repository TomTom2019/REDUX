//GET DATA // usedispath = action
import {useSelector,useDispatch} from 'react-redux'
import {addMovie} from './store/movies'
import {setType} from './store/users'

// movies is key from reducer
const App = () => {
 const movies = useSelector((state)=> state.movies.list)
 const users = useSelector((state)=>state.users)
 const dispatch = useDispatch()

console.log(movies)
// show data with loop with 
  return(
    <>
    <h2>Movies</h2>
      <ul>
        
        { movies?
         movies.map(movie =>(
           <li key={movie.id}>{movie.title} </li>
          ))

        :null}
      </ul>
      <hr/>
      <button onClick={()=>dispatch(addMovie({id:3,title:'batman'}))}>Add movie</button>
      <hr/>
      <h3>user type:{users.type} </h3>
      <button onClick={()=>dispatch(setType('Admin'))}>
        setType
      </button>
    </>
  )
}

export default App;