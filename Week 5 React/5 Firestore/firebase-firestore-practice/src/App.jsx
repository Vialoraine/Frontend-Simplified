import React from "react";
import "./App.css";
import { auth, db } from "./firebase/init";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  // How to Update
  //  async function updatePost() {
  //     const hardCodedId = "zX1ISqTD3z2AOeprhMpx";
  //     const postRef = doc(db, "posts", hardCodedId);
  //     const post = await getPostById(hardCodedId);
  //     const newPost = {
  //       description: "Finish Frontend Simplified",
  //       uid: "1",
  //       title: "Land a $300k job",
  //     };
  //     updateDoc(postRef, newPost);
  //   }

  // How to Update: Best Practice
  async function updatePost() {
    const hardCodedId = "zX1ISqTD3z2AOeprhMpx";
    const postRef = doc(db, "posts", hardCodedId);
    const post = await getPostById(hardCodedId);
    console.log(post);
    const newPost = {
      ...post,
      title: "Land a $400k job",
    };
    console.log(newPost);
    updateDoc(postRef, newPost);
  }

  // How to Create
  function createPost() {
    const post = {
      title: "Finish Interview Section",
      description: "Do Frontend Simplified",
      uid: user.uid,
    };
    addDoc(collection(db, "posts"), post);
  }

  // How to Read All
  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map((elem) => ({ ...elem.data(), id: elem.id }));
    console.log(posts);
  }

  // How to Read A Single Post by Id
  // async function getPostById(id) {
  //   const hardCodedId = "zX1ISqTD3z2AOeprhMpx";
  //   const postRef = doc(db, "posts", hardCodedId);
  //   const postSnap = await getDoc(postRef);
  //   if (postSnap.exists()) {
  //     const post = postSnap.data();
  //     console.log(post);
  //   }
  // }

  // How to Read A Single Post by Id: Better Practice
  async function getPostById(id) {
    const postRef = doc(db, "posts", id);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      return postSnap.data();
    }
  }

  // How to Read Posts by Query (e.g. only post by a specific user)
  async function getPostByUid(Uid) {
    const postCollectionUidRef = await query(
      collection(db, "posts"),
      where("uid", "==", user.uid)
    );
    const { docs } = await getDocs(postCollectionUidRef);
    console.log(docs.map((doc) => doc.data()));
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "test123")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? "Loading..." : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostById}>Get Post by Id</button>
      <button onClick={getPostByUid}>Get Post by Uid</button>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}

export default App;
