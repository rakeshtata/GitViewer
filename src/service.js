import axios from "axios"

const getUserData = (username,clientId,clientSecret) => {
    return axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}

// Get user repos
const getUserRepos = (username,perPage,clientId,clientSecret) => {
    return axios.get(`https://api.github.com/users/${username}/repos?per_page=${perPage}&client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        console.log(err)
    })
}

export {getUserData,getUserRepos}

