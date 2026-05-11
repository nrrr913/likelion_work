export default function About() {
  return (
    <div className="container">
      <section className="profile-card">
        <img src="/profile.jpeg" alt="프로필 사진" className="profile-image" />

        <h1 className="name">이나린</h1>
        <p className="subtitle">프론트엔드 아기사자</p>

        <ul className="profile-info">
          <li>
            <span>전공</span> 컴퓨터공학부
          </li>
          <li>
            <span>관심 분야</span> 서비스 기획 · 프론트엔드
          </li>
          <li>디자인도 시키면 합니다</li>
        </ul>
      </section>
    </div>
  );
}
