import './App.css'
import React,{useState,useEffect,useRef} from 'react'
import {getUserData,getUserRepos} from './service'
import Profile from './Components/Profile';
import Search from './Components/Search';

const config = {
  username: 'REDACTED_VAL',
  clientId: 'REDACTED_VAL',
  clientSecret: 'REDACTED_VAL',
  perPage: 10
}

function App() {

  const [userData,setUserData] = useState([]);
  const [userRepos,setUserRepos] = useState([]);
  const [userName,setUserName] = useState(config.username)
  const searchRef = useRef();

  useEffect(()=>{
    fetchData()
  },[])

  const handleFormSubmit = () => {
    const name = searchRef.current.value;
    fetchData(name)
  }

  const fetchData = (name) => {
    const uName = name || userName;
    const dataPromise = getUserData(uName, config.clientId, config.clientSecret);
    const repoPromise = getUserRepos(uName, config.perPage, config.clientId, config.clientSecret)
    const allPromise = Promise.all([dataPromise, repoPromise]);

    allPromise.then(([data,repo]) => {
      if(data) {
        setUserData(data)
      } else {
        setUserName(null)
      }

      if(repo){
        setUserRepos(repo)                                                                                                                                                        
      } else {
        setUserName(null)
      }
    })
  }

  return(
  
    <div className="mainBlock">
      <Search ref={searchRef} onFormSubmit = {handleFormSubmit} />
      { userData && userRepos &&
      <Profile userData={userData}  userRepos={userRepos}/>
      }
    </div>

  )
}

export default App;
