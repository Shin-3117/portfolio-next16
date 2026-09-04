import { careerProjects } from "@/data/careerProjects";
import CareerProjectCard from "@/components/Career/CareerProjectCard";

export default function Career() {
  return <section id="career" className="scroll-mt-20">
    <h2 className="text-2xl font-semibold">Career</h2>
    <div className="mt-6 rounded-lg border border-black/10 p-5 text-sm dark:border-white/15">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-medium">위미르(주) · 기업부설연구소 주임연구원 / FE</p>
        <span className="text-xs text-black/60 dark:text-white/60">
          2024.08 ~ 2026.02 (1년 7개월)
        </span>
      </div>
      <p className="mt-2 text-black/70 dark:text-white/70">
        MES의 기준정보·생산·품질·재고·매입매출 업무 전반을 아우르는 관리자 및 현장 운영 시스템을
        React·Next 기반으로 구축하고 고도화했습니다.
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          <span className="font-medium">데이터 접근 및 상태 관리 표준화</span>: TanStack Query와
          Zustand로 구조를 표준화하고 캐싱을 적용해 불필요한 API 호출 절감
        </li>
        <li>
          <span className="font-medium">제조 공정 시각화 대시보드 구축</span>: Recharts·D3.js 기반
          공정 흐름 시각화로 복잡한 제조 데이터의 의사결정 지원
        </li>
        <li>
          <span className="font-medium">반응형 UI 및 정합성 확보</span>: 모바일·태블릿·PC 대응 화면
          구현 및 기획-개발-운영 전 과정 소통으로 데이터 정합성 확보
        </li>
      </ul>
      <p className="mt-3 text-black/70 dark:text-white/70">
        <span className="font-medium">기술</span>: JavaScript, TypeScript, React, Next,
        TanStack Query, TanStack Table, Zustand, D3.js, Recharts
      </p>

      <div className="mt-5 border-t border-black/10 pt-4 dark:border-white/15">
        <h3 className="text-sm font-medium">
          주요 프로젝트
          <span className="ml-2 text-xs font-normal text-black/50 dark:text-white/50">
            {careerProjects.length}건 · 클릭하면 상세가 펼쳐집니다
          </span>
        </h3>
        <div className="mt-3 flex flex-col gap-3">
          {careerProjects.map((project, index) => (
            <CareerProjectCard
              key={project.id}
              project={project}
              // defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
}
