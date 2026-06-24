import React, { useEffect, useState } from "react";

const UserData = () => {
    const[user,setUser] = useState(null)
    const[loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("http://127.0.0.1:8000/user/")
      .then((rawData) => rawData.json())
      .then((res) => {
        setUser(res)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
  }, []);

  if(loading) return <h1>Data loading in progress...</h1>
  return (
    <>
      <center>
        <h1>User Data</h1>
      </center>
      <ul>
        <li>{user.name} -- {user.year}</li>
      </ul>
    </>
  );
};

export default UserData;
