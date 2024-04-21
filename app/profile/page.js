"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "../../components/Profile";
const page = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user._id}`);
      const data = await response.json();
      if (session?.user.id) setPosts(data);
    };
    console.log(posts);
    fetchPosts();
  }, []);

  const handleEdit = (post) => { };
  const handleDelete = (post) => { };
  const userId = session?.user.id;
  return (
    <Profile
      data={posts}
      id={userId}
      name="My"
      desc={"Your Profile Page"}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default page;