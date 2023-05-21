//GET DATA
import {useSelector} from 'react-redux'

// movies is key from reducer
const App = () => {
 const movies = useSelector((state)=> state.movies.list)

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
    </>
  )
}

export default App;