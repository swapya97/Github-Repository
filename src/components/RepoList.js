const RepoList = ({ details }) => {
  return (
    <div className="repo">
      <h3>Repository List</h3>
      <ol>
        {details.map((singleRepo, idx) => {
          return (
            <div className="repoList">
              <li key={idx}>
                <a href={singleRepo.html_url} target="_blank" rel="noreferrer">
                  {singleRepo.name}
                </a>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default RepoList;
