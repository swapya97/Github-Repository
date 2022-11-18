const Details = ({ details }) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <img src={details.avatar_url} alt="img"></img>
        <h3>{details.name}</h3>
      </div>
      <div className="cardMiddle">
        <h3>{details.login}</h3>
        <p>Created on:{details.created_at}</p>
      </div>
      <div className="cardBottom">
        <span>
          RepoList :&emsp;<button>{details.public_repos}</button>
        </span>
        <span>
          Followers :&emsp;<button>{details.followers}</button>
        </span>
        <span>
          Following :&emsp;<button>{details.following} </button>
        </span>
      </div>
    </div>
  );
};

export default Details;
