import { useEffect, useState } from "react";
import "./App.css";

type Posts = {
    id: number;
    title: string;
    body: string;
};

function App() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const controller = new AbortController();

    useEffect(() => {
        async function fetchPosts() {
            try {
                await new Promise((resolve) =>
                    setTimeout(() => {
                        console.log("Timeout Completed.");
                        resolve("");
                    }, 3000),
                );
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts",
                    { signal: controller.signal },
                );
                const data = await response.json();

                setPosts(data);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Fetch Sucessfully Aborted.");
                } else {
                    console.error(`Network error: ${error}`);
                }
            }
        }

        fetchPosts();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <div>
            <h1>Hello from React App !</h1>
            <div>
                <ul>
                    {posts.map((post) => (
                        <li
                            style={{
                                margin: 100,
                                padding: 40,
                                listStyle: "none",
                                border: "2px dotted gray",
                                borderRadius: 20,
                            }}
                            key={post.id}
                        >
                            <div>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
