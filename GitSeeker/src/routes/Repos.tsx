import { RepoProps } from "../types/Repo";

import Repo from "../components/Repo";
import BackBtn from "../components/BackBtn";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Repos.module.css";
import Loader from "../components/Loader";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadrepos = async function (username: string) {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      let orderedRepos = data.sort(
        (a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
      );

      orderedRepos = orderedRepos.slice(0, 5);

      setRepos(orderedRepos);
    };

    if (username) {
      loadrepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />;

  return (
    <div className={styles.repo}>
      <BackBtn />
      <h2>Explore the user repositories</h2>
      {repos && repos.length === 0 && (
        <p>There is no Repositories in here :/ </p>
      )}
      {repos && repos.length > 0 && (
        <div className={styles.repos_container}>
          {repos.map((repo: RepoProps) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
