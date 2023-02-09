/*HOOK REDUX you can get data or store data*/
/* 2 the way to export dispatch action*/
import {useSelector, useDispatch} from 'react-redux'
import { addMovie } from './store/movies'
import {setType, fechUsers/*getUsers*/} from './store/users'




const App = () => {

const movies = useSelector((state)=> state.movies.list)
const users = useSelector((state)=>state.users)
const dispatch = useDispatch()




  return(
    <>
      <h2>Movies</h2>
      <ul>
        { movies ?
         movies.map(movie => (
            <li key={movie.id}>{movie.title} </li>
          ))
        :null

        }
      </ul>
      <hr/>
     {/*  the way to export dispatch action*/}
      <button onClick={()=>dispatch(addMovie({id:3,title:'Scarface'}))}>Add movies</button>
      <hr/>
      <h3>User type:{users.type} </h3>
         {/*  the way to export dispatch action*/}
      <button onClick={()=>dispatch(setType('Admin'))} >
        Set type
      </button>
     

         <div>{users.loading ? "loading" : null}</div>
      <ul>{users ? users.users.map((user) =>
        <li key={user.id}>{user.name}</li>) 
      : null}</ul>
      

     

      <button onClick={() => dispatch(fechUsers())}>Get users</button>
      
    </>
  )
}

export default App;