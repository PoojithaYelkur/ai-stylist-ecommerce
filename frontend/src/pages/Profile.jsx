import { useEffect, useState } from "react";
import API from "../api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const res = await API.get("/users/profile");

      console.log(res.data);

      setUser(res.data);

    } catch (err) {
      console.log(err);
      alert("Not authorized");
    }
  };

  return (
    <div>
      <h2>Profile Page</h2>

      {!user && <p>Loading...</p>}

      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>ID: {user._id}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;