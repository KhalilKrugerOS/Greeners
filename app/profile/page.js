"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "../../components/Profile";

const page = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}`);
      console.log(session?.user.id);
      const userData = await response.json();
      if (session?.user.id) setUserData(userData);
    };
    console.log(userData);
    fetchPosts();
  }, []);

  const handleEdit = (post) => { };
  const handleDelete = (post) => { };
  const username = session?.user.name;
  const picture = session?.user.image;
  const email = session?.user.email;

  return (
    <Profile
      name={username}
      pic={picture}
      email={email}
    />
  );
};

export default page;