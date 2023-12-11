import { Link } from "react-router-dom"
import { Button } from "@mui/material"

const Home = () => {
  return (
    <div>
        <Button variant="contained" color="primary"><Link to='/'>signup page</Link></Button>
       <Button variant="contained" color="primary"><Link to='/log'>Login Page</Link></Button> 
    </div>
  )
}

export default Home