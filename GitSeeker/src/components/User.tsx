import { MdLocationPin } from "react-icons/md";
import { UserProps } from "../types/user";
import { Link } from "react-router-dom";
import style from "./User.module.css";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={style.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={style.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={style.stats}>
        <div>
          <p>Followers</p>
          <p className={style.number}>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p className={style.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Best Repositories</Link>
    </div>
  );
};

export default User;
