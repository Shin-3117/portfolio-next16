export type CareerProject = {
  id: string;
  title: string;
  client: string;
  period: string;
  summary: string;
  tasks: { label: string; detail: string }[];
  result: string;
  stack: string[];
};

export const careerProjects: CareerProject[] = [
  {
    id: "mes-integration",
    title: "MES 통합/현대화 구축",
    client: "방산 전자부품 제조사",
    period: "2025.12 ~ 2026.02",
    summary:
      "기존 MES를 item 중심 구조로 확장하고, 모니터링·QR·태블릿을 포함한 통합 운영 환경으로 고도화",
    tasks: [
      {
        label: "아키텍처 설계 & 패턴 표준화",
        detail:
          "레거시(material/product) 구조와 신규 item 도메인이 공존하도록 설계하고, TanStack Query 중심의 data-access 패턴(models/service/queries/useQuery)을 도입해 데이터 흐름 일관성 확보",
      },
      {
        label: "권한 제어 체계 명확화",
        detail: "PermissionGate 컴포넌트와 경로 기반 권한 훅으로 사용자 권한별 UI 접근 제어",
      },
      {
        label: "현장-관리자 데이터 연동",
        detail:
          "모니터링, QR 스캔, 태블릿 화면을 하나의 운영 흐름으로 연결해 현장 작업자와 관리자 간 데이터 연동 통합",
      },
      {
        label: "접속 안정성 향상",
        detail: "인증 자동 갱신 로직 개선 및 디바이스별 라우팅 처리로 멀티 디바이스 접근성 향상",
      },
    ],
    result:
      "100페이지 이상의 대규모 모듈 확장에도 대응 가능한 프론트엔드 구조 정착 및 운영 기반 마련",
    stack: ["TypeScript", "React", "Next", "TanStack Query", "Zustand"],
  },
  {
    id: "mes-enhancement",
    title: "MES 요구사항 고도화",
    client: "금속 가공/프레스 제조사",
    period: "2025.07 ~ 2026.01",
    summary:
      "초기 구축 이후 고객 요구사항을 바탕으로 생산·재고·수주 프로세스를 재설계하고 기능 고도화",
    tasks: [
      {
        label: "자재 처리 & 자동 계산 UI",
        detail: "BOM 기반 자재 처리 및 총중량 자동 계산 로직을 UI에 구현해 현장 입력 정확도 향상",
      },
      {
        label: "업무 프로세스 재구성",
        detail:
          "수주 완료 이후의 수정·취소·이월 등 실제 현장 운영 시나리오를 반영한 업무 프로세스 및 UI 재구성",
      },
      {
        label: "데이터 정합성 개선",
        detail: "입고 처리 후 재고 반영 과정에서 발생한 데이터 불일치 원인을 분석하고 로직 수정",
      },
      {
        label: "운영 리스크 최소화",
        detail:
          "요구사항 변경 이력과 우선순위를 문서 기반으로 관리해 개발·배포 과정의 운영 리스크 최소화",
      },
    ],
    result:
      "복잡한 예외 시나리오를 안정적으로 시스템에 흡수해 현장 편의성과 데이터 신뢰성을 확보한 업무 흐름 구축",
    stack: ["TypeScript", "React", "Next", "TanStack Query", "TanStack Table"],
  },
  {
    id: "mes-admin",
    title: "MES 관리자 시스템 구축",
    client: "전선 제조사",
    period: "2025.02 ~ 2025.12",
    summary: "생산·재고·품질 등 제조 전반을 관리하는 대규모 MES 관리자 웹 시스템 구축",
    tasks: [
      {
        label: "공통 컴포넌트 모듈화",
        detail:
          "도메인별 입력 폼과 관리자 뷰를 구현하고, TanStack Table 기반 공통 DataTable을 설계해 정렬·필터링·페이징·다중 선택을 재사용 가능하도록 모듈화",
      },
      {
        label: "대용량 데이터 처리 효율화",
        detail: "Excel 대량 업로드/다운로드 기능으로 수기 입력을 최소화하고 관리 업무 효율화",
      },
      {
        label: "안정적인 시스템 아키텍처",
        detail:
          "data-access 패턴으로 API 호출 및 데이터 가공 로직을 표준화하고, 일관된 인증 갱신·공통 에러 핸들링 구조 적용",
      },
    ],
    result:
      "관리자 화면 전반에 공통 컴포넌트와 표준 데이터 패턴을 정착시켜 신규 도메인 확장 시 개발 리소스 절감",
    stack: ["TypeScript", "React", "Next", "TanStack Query", "TanStack Table", "Zustand"],
  },
  {
    id: "mes-engine",
    title: "엔진 공정 MES 구축",
    client: "자동차 부품 제조사",
    period: "2024.12 ~ 2025.02",
    summary: "엔진 번호 기반 공정 추적과 태블릿 체크시트 입력을 중심으로 한 MES 운영 시스템 구축",
    tasks: [
      {
        label: "실시간 데이터 연동",
        detail:
          "엔진 번호를 기준으로 공정 데이터 입력·상태 유효성 검증·공정 완료 처리 흐름을 구현하고, 태블릿 입력이 관리자 생산실적/모니터링 화면에 즉시 연동되도록 인터페이스 설계",
      },
      {
        label: "현장 예외 처리 체계 구축",
        detail: "리워크(Rework) 요청-처리-완료 프로세스 및 공지 기능으로 현장 운영 기능 확장",
      },
      {
        label: "휴먼 에러 방지 & 검증",
        detail:
          "입력 누락·중복 가능 구간에 엔진 번호 기반 유효성 검증을 적용하고, 웹과 태블릿 간 일관된 데이터 모델 기준으로 데이터 신뢰성 확보",
      },
    ],
    result: "현장의 수기·단말 입력을 관리자 모니터링 체계와 일원화해 지연 없는 공정 추적 환경 구축",
    stack: ["JavaScript", "TypeScript", "React", "Next", "Zustand"],
  },
];
