//GET DATA // usedispath = action
import {useSelector,useDispatch} from 'react-redux'
import {addMovie} from './store/movies'

// movies is key from reducer
const App = () => {
 const movies = useSelector((state)=> state.movies.list)
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
      <button onClick={()=>dispatch(addMovie())}>Add movie</button>
    </>
  )
}

export default App;