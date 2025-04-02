import { RepoProps } from "../types/Repo";

import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";

import style from "./Repo.module.css";

const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <div className={style.repo}>
      <h1>{name}</h1>
      <p>
        <BsCodeSlash /> {language}
      </p>
      <div className={style.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={style.repo_btn}>
        <span>Code View</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
