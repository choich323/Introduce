import { DATA } from "@/data/resume";

// 인쇄/PDF 저장 전용 페이지. 흰 배경, 페이지 구분 없이 전체 내용을 한 번에 표시.
// About Me 콘텐츠는 이 파일 안에 직접 포함(토글 없이 항상 펼쳐진 상태).
// 이력서 대체용으로 기본 인적사항 / 병역 / 어학 / 희망 조건 항목을 포함.

const resumeInfo = {
  birth: "1996.03.23",
  military: "육군 병장 만기 전역 (2016.10.17 - 2018.07.16)",
  language: "일본어 - 회화 및 작문 일상 회화 가능 수준",
  desiredSalary: "내규에 따름",
  desiredLocation: "서울 · 경기",
};

const aboutData = {
  motivation: [
    {
      heading: "게임은 늘 곁에 있었다",
      content:
        "5살 때부터 할아버지가 운영하시는 비디오 가게 앞의 오락기에 앉아 게임을 했다. 그 이후 항상 게임을 해왔고, 프로게이머를 꿈으로 삼은 적도 있었다. 부모님께 혼나거나 싸우기도 했지만, 고3 때를 제외하면 게임을 쉰 적은 없었다. 그 정도로 게임을 참 좋아했다.\n\n특히 고2 때는 친구와 Gurps라는 TRPG를 해보면서 캐릭터 시트를 만들고 게임의 룰을 만들고 플레이했던 경험이 즐거운 기억으로 남아 있다. 다만 이 때는 프로그래밍에 대해서는 전혀 생각을 못했는데, 프로그래머라는 직업은 일반인이 할 수 있는 직업이 아니라는 고정 관념이 강했기 때문이었다. 대학교를 다니면서 이 고정 관념은 부서졌다.",
    },
    {
      heading: "프로그래밍을 마주하다",
      content:
        "한 번은 친구가 유기오 프로라는 오픈 소스 유희왕 카드 게임을, 원하는 테마로 덱을 만들어서 플레이하자고 제안했다. 처음엔 원하는 것을 만든다는 것을 이해할 수 없었지만 과정은 간단했다.\n\n설정을 만들고, 기능을 정하고, 비슷한 기능을 가진 카드를 찾아서 코드를 복사한 뒤 수정한다. 그러고는 카드 이미지를 추가한다. 프로그래밍 단계를 가장 걱정했지만 어려움이 없었으며 우리는 각자의 덱을 만들어 게임을 플레이할 수 있었다.\n\n추상적인 생각을 실체화하는 것이 생각했던 것에 비해 단순한 과정으로 해결되었고, 이를 계기로 프로그래밍에 대한 인식은 완전히 뒤바뀌어 게임 개발자라는 목표를 갖게 되었다.",
    },
    {
      heading: "그런데 왜 프로그래머인가",
      content:
        "사실 게임 기획을 해도 됐을지도 모른다. 글을 써서 캐릭터의 컨셉이나 스토리를 작성하는 것, 연출이나 게임의 방향성 등을 생각하는 것도 좋아하기 때문이다.\n\n그러나 게임 개발이 하고 싶었던 이유는 생각했던 것을 실제로 움직이는 객체로 만드는 것이 즐거웠기 때문이다. 이게 아니었다면 소설가나 기획자, 아예 백엔드 개발자를 생각했을지도 모른다. 그러나 눈에 보이는, 그리고 움직이는 무언가를 만들어 내는 것이 재미있고 계속해서 게임 개발자라는 목표를 갖게 된 것이다.",
    },
    {
      heading: "눈에 보이는 것이 전부는 아니다",
      content:
        "클라이언트 프로그래머 업무를 하면서 새로 생긴 동기 부여는, 눈에 보이는 것 너머에 내부적인 설계 자체가 흥미롭다는 것이다. 보여지는 것도 중요하지만, 내부를 얼마나 잘 만드느냐에 따라 할 수 있는 선택지가 넓어지기도, 좁아지기도 한다.\n\n이건 단순히 프로그래밍만 그런 것은 아니다. 프라모델에서도 외부 프레임만 조립하는 것은 낮은 등급으로, 내부 프레임까지 조립하는 것은 높은 등급으로 분류하는데, 내부 프레임까지 있어야 사실적이면서도 할 수 있는 액션 포즈가 다양해지기 때문이다.\n\n이와 비슷하게 프로그래밍도 내부를 잘 설계하는 것이 중요한 역할이고 많은 시간을 쓰게 되는데, 이걸 고민하고 구현하는 것이 꽤나 희열이 있는 과정이다. 탄탄한 내부 설계를 통해 시스템을 만드는 재미, 생각을 실체화했을 때의 성취감, 내가 만든 게임을 다른 사람들이 재밌게 즐긴다는 기쁨. 프로그래머가 된 계기는 단순하지만, 계속하게 만드는 동기는 계속해서 생겨나고 있다.",
    },
  ],
  favoriteGames: [
    { category: "모바일", games: ["모로 저택의 비밀", "브레이브 프론티어", "가디언 테일즈"] },
    { category: "고전 게임", games: ["영웅 전설 (3, 4, 5)", "쯔바이", "그란디아2"] },
    { category: "온라인 게임", games: ["던전 앤 파이터", "유희왕 마스터 듀얼", "리그 오브 레전드"] },
    { category: "스팀", games: ["바이오쇼크", "리썰 컴퍼니", "타이탄 소울"] },
    { category: "콘솔", games: ["역전 재판 · 역전 검사 시리즈", "호라이즌 제로 던", "데빌 메이 크라이 시리즈"] },
  ],
  hobbies: ["소설 쓰기", "철학 책 읽기", "애니메이션 시청", "요리하기", "프라모델 조립"],
  vision: [
    { term: "단기적 비전", content: "현재 개발 중인 게임의 스토어 출시 및 모니터링. 업데이트도 병행할 예정." },
    { term: "다음 목표", content: "AI를 메인으로 활용하여 게임 개발해보기." },
    { term: "중장기 목표", content: "2D 어드벤처 게임을 개발해서 스팀에 출시하기.\n1000만 이상 다운로드 게임의 개발진이 되기." },
  ],
};

// 프로젝트 링크 타입 (resume.tsx의 icon: ReactNode 필드는 제외하고 type/href만 사용)
function LinkList({ links }: { links: readonly { type: string; href: string }[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", marginTop: 6 }}>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          style={{ fontSize: 11, color: "#2563eb", textDecoration: "underline" }}
        >
          {link.type}
        </a>
      ))}
    </div>
  );
}

export default function PrintPage() {
  return (
    <main
      style={{
        background: "#ffffff",
        color: "#1a1a1a",
        fontFamily: "'Noto Sans KR', -apple-system, sans-serif",
        maxWidth: 800,
        margin: "0 auto",
        padding: "40px 32px",
        lineHeight: 1.6,
      }}
    >
      {/* ── Header ── */}
      <header style={{ marginBottom: 32, borderBottom: "2px solid #111", paddingBottom: 16 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0 }}>{DATA.name}</h1>
        <p style={{ fontSize: 14, color: "#555", margin: "4px 0 10px" }}>{DATA.description}</p>
        <div style={{ fontSize: 12, color: "#555", display: "flex", flexWrap: "wrap", gap: 12 }}>
          <span>Email: {DATA.contact.email}</span>
          <span>GitHub: {DATA.contact.social.GitHub.url}</span>
          <span>Site: {DATA.url}</span>
        </div>
      </header>

      {/* ── 기본 인적사항 ── */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={sectionTitle}>기본 정보</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: 6,
            columnGap: 24,
            fontSize: 12,
          }}
        >
          <div><b>생년월일</b> &nbsp; {resumeInfo.birth}</div>
          <div><b>병역</b> &nbsp; {resumeInfo.military}</div>
          <div><b>어학</b> &nbsp; {resumeInfo.language}</div>
          <div><b>희망 연봉</b> &nbsp; {resumeInfo.desiredSalary}</div>
          <div><b>희망 근무지</b> &nbsp; {resumeInfo.desiredLocation}</div>
        </div>
      </section>

      {/* ── Summary ── */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={sectionTitle}>About</h2>
        <p style={{ fontSize: 13, color: "#333" }}>
          {DATA.summary.replace(/\*\*/g, "")}
        </p>
      </section>

      {/* ── Work Experience ── */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={sectionTitle}>Work Experience</h2>
        {DATA.work.map((w) => (
          <div key={w.company} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 14 }}>
              <span>{w.company} — {w.title}</span>
              <span style={{ fontWeight: 400, fontSize: 12, color: "#555" }}>{w.start} - {w.end}</span>
            </div>
            <div style={{ fontSize: 12, color: "#333", whiteSpace: "pre-line", marginTop: 4 }}>
              {w.description}
            </div>
          </div>
        ))}
      </section>

      {/* ── Education ── */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={sectionTitle}>Education</h2>
        {DATA.education.map((e) => (
          <div key={e.school} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span><b>{e.school}</b> — {e.degree}</span>
            <span style={{ color: "#555" }}>{e.start} - {e.end}</span>
          </div>
        ))}
      </section>

      {/* ── Skills ── */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={sectionTitle}>Skills</h2>
        <div style={{ fontSize: 12, color: "#333" }}>
          {DATA.skills.map((s) => s.name).join(" · ")}
        </div>
      </section>

      {/* ── Projects ── */}
      <section style={{ marginBottom: 28 }}>
        <h2 style={sectionTitle}>Projects</h2>
        {DATA.projects.map((p) => (
          <div key={p.title} style={{ marginBottom: 18, pageBreakInside: "avoid" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 14 }}>
              <span>{p.title}</span>
              <span style={{ fontWeight: 400, fontSize: 12, color: "#555" }}>{p.dates}</span>
            </div>
            <div style={{ fontSize: 12, color: "#333", whiteSpace: "pre-line", marginTop: 4 }}>
              {p.description}
            </div>
            <div style={{ fontSize: 11, color: "#666", marginTop: 4 }}>
              {p.technologies.join(" · ")}
            </div>
            <LinkList links={p.links as unknown as { type: string; href: string }[]} />
          </div>
        ))}
      </section>

      {/* ── About Me ── */}
      <section style={{ marginBottom: 28, pageBreakBefore: "always" }}>
        <h2 style={sectionTitle}>About Me</h2>

        <h3 style={subTitle}>게임 개발자가 된 계기</h3>
        {aboutData.motivation.map((m, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: 700, fontSize: 13 }}>{m.heading}</div>
            <div style={{ fontSize: 12, color: "#333", whiteSpace: "pre-line" }}>{m.content}</div>
          </div>
        ))}

        <h3 style={subTitle}>좋아하는 게임</h3>
        {aboutData.favoriteGames.map((g, i) => (
          <div key={i} style={{ fontSize: 12, marginBottom: 4 }}>
            <b>{g.category}</b>: {g.games.join(", ")}
          </div>
        ))}

        <h3 style={subTitle}>취미</h3>
        <div style={{ fontSize: 12, color: "#333" }}>{aboutData.hobbies.join(" · ")}</div>

        <h3 style={subTitle}>앞으로의 비전</h3>
        {aboutData.vision.map((v, i) => (
          <div key={i} style={{ marginBottom: 6 }}>
            <b style={{ fontSize: 13 }}>{v.term}</b>
            <div style={{ fontSize: 12, color: "#333", whiteSpace: "pre-line" }}>{v.content}</div>
          </div>
        ))}
      </section>

      {/* 인쇄 안내 (화면에서만 보이고 인쇄 시 숨김) */}
      <div className="print:hidden" style={{ marginTop: 24, fontSize: 12, color: "#888" }}>
        Cmd/Ctrl + P → PDF로 저장 (배경 그래픽 옵션은 꺼도 무방, 흰 배경 기준으로 제작됨)
      </div>
    </main>
  );
}

const sectionTitle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 800,
  borderBottom: "1px solid #ccc",
  paddingBottom: 4,
  marginBottom: 10,
};

const subTitle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  marginTop: 14,
  marginBottom: 6,
};
