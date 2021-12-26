import Repo from './Repo';

const RepoList = ({...props}) => {

    const {userRepos} = props

    return(
        <div>
            <ul className="list-group">
                {
                    userRepos.map(repo => {
                        return <Repo 
                                    repo={repo}
                                    key={repo.id}
                                    {...props} />
                    })
                }
            </ul>
        </div>
    )
	
}

export default RepoList