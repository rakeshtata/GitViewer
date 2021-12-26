const Repo = ({...props}) => {
    const {repo} = props;

    return(
        <li className="list-group-item">
            <a href={repo.html_url}>
                {repo.name}
            </a> : {repo.description}
        </li>
    )
}

export default Repo