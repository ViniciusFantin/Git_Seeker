import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import Loader from "../components/Loader";

import { useState } from "react";
import { UserProps } from "../types/user";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setIsLoading(true);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    setIsLoading(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    setError(false);

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);
  };

  return (
    <div>
      <h1>Home</h1>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
