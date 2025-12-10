import Image from "next/image";
import D3 from "@/img/skills/D3.svg";
import Vue from "@/img/skills/Vue.svg";
import Python from "@/img/skills/Python-Dark.svg";
import Django from "@/img/skills/Django.svg";
import Flutter from "@/img/skills/flutter_logo.svg";


export default function KnowledgeableSkills() {
  return <div className="rounded-lg border border-black/10 p-4 dark:border-white/15">
    <h3 className="text-sm font-medium">knowledgeable</h3>
    <ul className={'flex gap-5 mt-2'}>
      <li className="flex flex-col items-center">
        <Image
          src={D3}
          width={40}
          height={40}
          alt="D3"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          D3.js
        </p>
      </li>
      <li className="flex flex-col items-center">
        <Image
          src={Vue}
          width={40}
          height={40}
          alt="Vue.js"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          Vue.js
        </p>
      </li>
      <li className="flex flex-col items-center">
        <Image
          src={Python}
          width={40}
          height={40}
          alt="Python"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          Python
        </p>
      </li>
      <li className="flex flex-col items-center">
        <Image
          src={Django}
          width={40}
          height={40}
          alt="Django"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          Django
        </p>
      </li>
      <li className="flex flex-col items-center">
        <Image
          src={Flutter}
          height={40}
          // width={40}
          alt="Flutter"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          Flutter
        </p>
      </li>
    </ul>
  </div>
}