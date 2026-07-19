import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "최종현",
  initials: "CJH",
  url: "https://introduce-k3wm.vercel.app/",
  location: "Seoul, Korea",
  locationLink: "https://www.google.com/maps/place/seoul",
  description: "Unity Client Programmer",
  avatarUrl: "/me.png",
  summary:
    "모바일 게임 클라이언트 프로그래머입니다. " +
    "실서비스 중인 모바일 게임에서 신규 콘텐츠 개발, Firebase 기반 서버 연동, TensorFlow Lite를 활용한 AI 예측 모델 적용 경험을 보유하고 있습니다. " +
    "현재는 2D 사이버펑크 디펜스 게임 **Chrome Frontline**을 개발 중입니다.",

  skills: [
    { name: "Unity", icon: null },
    { name: "C#", icon: Csharp },
    { name: "Python", icon: Python },
    { name: "Firebase", icon: null },
    { name: "DOTween", icon: null },
    { name: "TensorFlow Lite", icon: null },
    { name: "Object Pooling", icon: null },
    { name: "UGUI / TextMeshPro", icon: null },
    { name: "Git / GitHub", icon: null },
    { name: "Jenkins", icon: null },
    { name: "Aseprite", icon: null },
    { name: "MaplestoryWorld", icon: null },
    { name: "VR / XR", icon: null },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "choich323@naver.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/choich323",
        icon: Icons.github,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Dreamo Inc.",
      href: "https://play.google.com/store/apps/details?id=com.dreamo.woodyblast",
      badges: ["정규직"],
      location: "Seoul, Korea",
      title: "Unity Client Programmer",
      logoUrl: "",
      start: "2023.09",
      end: "2025.12 (2년 4개월)",
      description:
        "• 신규 콘텐츠 개발 및 기존 콘텐츠 유지/보수\n" +
        "• 머지 콘텐츠 Class 설계 및 로직 구현\n" +
        "• DOTween 기반 게임 연출 구현\n" +
        "• Firebase Firestore 기반 팀 채팅 시스템 데이터 구조 설계 및 구현\n" +
        "• TensorFlow Lite를 활용한 AI 난이도 예측 모델 Unity 적용\n" +
        "• SDK 업데이트 등 플랫폼 이슈 대응\n" +
        "• Jenkins 빌드 프로세스 트러블슈팅",
    },
  ],

  education: [
    {
      school: "경희대학교",
      href: "https://www.khu.ac.kr",
      degree: "일본어학과 · 컴퓨터공학과 전공",
      logoUrl: "",
      start: "2015.03",
      end: "2024.02",
    },
  ],

  projects: [
    {
      title: "Chrome Frontline",
      href: "",
      dates: "2026.03 - 개발 중",
      active: true,
      description:
        "2D 모바일 사이버펑크 디펜스\n" +
        "• 계층 구조 기반 아키텍처 설계\n" +
        "• event 기반 Observer 패턴으로 UI / 게임오브젝트 계층 분리\n" +
        "• 범용 PoolManager · DataManager 설계\n" +
        "• Addressables 기반 데이터 접근 빈도별 로드 전략 구현\n" +
        "• Google Play 스토어 출시 목표",
      technologies: [
        "Unity 6",
        "C#",
        "Addressables",
        "ScriptableObject",
        "TextMeshPro",
        "Aseprite",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/choich323/ChromeFrontline",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "YouTube (영상 1)",
          href: "https://youtu.be/4D54PNUXl7A",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "YouTube (영상 2)",
          href: "https://youtu.be/a8paTwmbxXY",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "APK Download",
          href: "https://drive.google.com/file/d/1436oqPQYj8HXjuluulEM2Y6uwpH4UZ3_/view?usp=drive_link",
          icon: <Icons.googleDrive className="size-3" />,
        },
        {
          type: "Notion",
          href: "https://app.notion.com/p/Chrome-Frontline-30e7c9a624768065a1bcfbbe36419757?source=copy_link",
          icon: <Icons.notion className="size-3" />,
        },
        {
          type: "Portfolio PDF",
          href: "https://drive.google.com/file/d/15aYn_FKqh27B_3C9oQ-S2veN0GDPQwmE/view?usp=drive_link",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/chrome_frontline.png",
      video: "",
    },
    {
      title: "Merge Blast: Dream Island",
      href: "",
      dates: "2023.09 - 2025.12",
      active: true,
      description:
        "실서비스 모바일 게임의 신규 콘텐츠 개발 담당\n" +
        "• 머지 콘텐츠 설계 · 구현\n" +
        "• Firebase 기반 팀 채팅 시스템 설계\n" +
        "• TensorFlow Lite AI 예측 모델 적용\n" +
        "• TIPS 사업 실적 자료로 활용",
      technologies: [
        "Unity 2021",
        "C#",
        "Firebase",
        "TensorFlow Lite",
        "DOTween",
        "Jenkins",
        "Google Cloud Function",
      ],
      links: [
        {
          type: "Android",
          href: "https://play.google.com/store/apps/details?id=com.dreamo.woodyblast&pcampaignid=web_share",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "iOS",
          href: "https://apps.apple.com/us/app/merge-blast-dream-island/id1668748189",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Portfolio PDF",
          href: "https://drive.google.com/file/d/17dOZ4jz9suo2jKi1eoZOj3LkKcbeNZei/view?usp=drive_link",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/mergeBlast_Icon.png",
      video: "",
    },
    {
      title: "포로:RE",
      href: "",
      dates: "2022.09 - 2022.12",
      active: true,
      description:
        "MapleStory Worlds Hackathon 2022 참가작 · 팀 프로젝트\n" +
        "• 직접 제작한 외전 스토리와 러닝 액션을 즐길 수 있는 게임\n" +
        "• 러닝 액션에서의 퀘스트 결과에 따른 멀티 엔딩이 핵심\n" +
        "• 담당: 팀장 · 컨셉팅 · 스토리 제작 · UI 개발 · 대화 및 퀘스트 개발 · 연출 개발",
      technologies: [
        "MapleStory Worlds",
        "Lua",
      ],
      links: [
        {
          type: "Play",
          href: "https://maplestoryworlds.nexon.com/ko/play/38c1fa80a26a43f68d7557504c724391",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "YouTube",
          href: "https://youtu.be/UG5Fn1jjxE8",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "YouTube (Bad Ending)",
          href: "https://youtu.be/lDnTRyxi_dU",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "YouTube (True Ending)",
          href: "https://youtu.be/nIALjACHCY0",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Portfolio PDF",
          href: "https://drive.google.com/file/d/1OyXCzJbhXKk5JjUVdsqiuq91bbSw9D2y/view?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/poro_re.png",
      video: "",
    },
    {
      title: "Labyrinthos",
      href: "",
      dates: "2021.10 - 2021.12",
      active: true,
      description:
        "Oculus Quest2 등 VR 플랫폼 타겟 방탈출 게임 · 팀 프로젝트\n" +
        "• 테세우스의 입장에서 미궁을 탈출하며 현대의 주인공의 과거를 마주하는 내용\n" +
        "• 실감 미디어(XR) 개발 수업을 수강하며 진행한 팀 프로젝트\n" +
        "• 담당: 팀장 · 컨셉팅 · 스토리 제작 · 1~2번방 개발 · 이동 및 상호작용 R&D",
      technologies: [
        "Unity 2021",
        "Open XR SDK",
        "XR Interaction Toolkit",
        "Cinemachine",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/choich323/Labyrinthos",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "YouTube (소개)",
          href: "https://youtu.be/S4Vs7E_oE00",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "YouTube (플레이)",
          href: "https://youtu.be/zkgbqKjCbl0",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "스크립트 모음",
          href: "https://drive.google.com/drive/folders/1lfv-SdZ2PLLFMQVVc3UY0NCSDfwJiZus?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
        {
          type: "Portfolio PDF",
          href: "https://drive.google.com/file/d/1RBkebODi4Ozu9QvsdeCi2Ca7SKcl6CLg/view?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/Labyrinthos.png",
      video: "",
    },
    {
      title: "달고나 시뮬레이터",
      href: "",
      dates: "2021.11 - 2021.12",
      active: true,
      description:
        "Leap Motion을 활용한 손 동작 인식 PC 게임 · 개인 프로젝트 (졸업 작품)\n" +
        "• 키보드/마우스 없이 손의 움직임으로 플레이하는 것이 핵심\n" +
        "• 드라마 오징어 게임의 달고나 만들기를 게임화\n" +
        "• 실제 손 동작 인식으로 기존 달고나 게임과 차별화",
      technologies: [
        "Unity 2021",
        "Leap Motion SDK",
        "Azure Kinect DK",
        "UGUI",
        "Animator",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/choich323/DalgonaSimulator",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "YouTube (Stage 1)",
          href: "https://youtu.be/tvxCLJ57bGQ",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "YouTube (Stage 2)",
          href: "https://youtu.be/8OxtL5e1afQ",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "스크립트 모음",
          href: "https://drive.google.com/drive/folders/19jQzzLgZBUoHj4hqfYO2sbIjc-Em4wbi?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
        {
          type: "Portfolio PDF",
          href: "https://drive.google.com/file/d/1oqka3xh3Pbdc7OJ05YR15U9DSPlxCTi8/view?usp=sharing",
          icon: <Icons.googleDrive className="size-3" />,
        },
      ],
      image: "/Dalgona.png",
      video: "",
    },
  ],

  aboutMe: {
    motivation: "placeholder - 게임 개발자가 된 계기를 작성해주세요.",
    favoriteGames: "placeholder - 좋아하는 게임을 작성해주세요.",
    hobbies: "placeholder - 취미를 작성해주세요.",
    vision: "placeholder - 앞으로의 비전을 작성해주세요.",
  },

} as const;
