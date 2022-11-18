import "./App.css";
import Search from "./components/Search";
import RepoList from "./components/RepoList";
import Details from "./components/Details";
import Footer from "./components/Footer";
import { github } from "./utils";
import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState({});
  const [repoList, setrepoList] = useState([]);
  const [followers, setfollowers] = useState([]);
  const [username, setusername] = useState("swapya97");
  useEffect(
    (_) => {
      (async (_) => {
        const response = await github.get(`/${username}`);

        setdata(response.data);
      })();
    },
    [username]
  );

  useEffect(
    (_) => {
      (async (_) => {
        const response = await github.get(`/${username}/repos`);
        setrepoList(response.data);
      })();
    },
    [username]
  );

  useEffect(
    (_) => {
      (async (_) => {
        const response = await github.get(`${username}/followers`);
        setfollowers(response.data);
      })();
    },
    [username]
  );
  const Searchedusername = (keyword) => {
    setusername(keyword);
  };

  return (
    <div>
      <main>
        <h1>GITHUB PROFILE</h1>
        <Search Searchedusername={Searchedusername} />
        <Details details={data} />
        <RepoList details={repoList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
