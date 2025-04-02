import { RepoProps } from "../types/Repo";

import Repo from "../components/Repo";
import BackBtn from "../components/BackBtn";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./Repos.module.css";
import Loader from "../components/Loader";

const Repos = () => {
  const { userName } = useParams();

  const { repos, setRepos } = useState<RepoRepos[] | [] | null>(null);
};
