import { useState } from "react";
import Track from "../../components/home/Track/Track";
import Name from "../../components/home/Name/Name";
import Age from "../../components/home/Age/Age";
import postUser from "../../api/postUser";

// HomePage.jsx
const HomePage = () => {
  const [track, setTrack] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const onClickPostUser = async () => {
    const newUserData = {
      name: name,
      age: age,
      track: track,
    };

    try {
      const result = await postUser(newUserData);

      console.log("생성 성공:", result.id);
      alert(`${result.name}님 환영합니다!`);
    } catch (error) {
      alert("유저 등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <section>
      <h1>홈 페이지 입니다.</h1>

      <Track setTrack={setTrack} />
      <Name name={name} setName={setName} />
      <Age age={age} setAge={setAge} />

      <div>
        <div>선택한 트랙: {track || "없음"}</div>
        <div>이름: {name || "없음"}</div>
        <div>나이: {age}</div>
      </div>

      <button type="button" onClick={onClickPostUser}>
        유저 등록하기
      </button>
    </section>
  );
};

export default HomePage;
