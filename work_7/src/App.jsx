import api from "./axiosInstance";
import { useState } from "react";

function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const createPost = async () => {
    setLoading(true);

    const res = await api.post("/posts", {
      name: "홍길동",
      age: 0,
      track: "FE",
    });

    setTimeout(() => {
      setPost(res.data);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div>
        <h1>테스트 API</h1>
        <button onClick={createPost}>POST 요청 보내기</button>

        {loading && (
          <div className="mt-4 space-y-2 animate-pulse">
            <div className="h-5 w-32 bg-gray-300 rounded"></div>
            <div className="h-4 w-48 bg-gray-300 rounded"></div>
            <div className="h-4 w-40 bg-gray-300 rounded"></div>
            <div className="h-4 w-44 bg-gray-300 rounded"></div>
          </div>
        )}

        {!loading && post && (
          <div className="mt-4 border p-4">
            <h2>API 결과</h2>
            <p>이름: {post.name}</p>
            <p>나이: {post.age}</p>
            <p>트랙: {post.track}</p>
            <p>ID: {post.id}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
