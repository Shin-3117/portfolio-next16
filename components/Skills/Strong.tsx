import Image from "next/image";
import JavaScript from "@/img/skills/JavaScript.svg";
import TypeScript from "@/img/skills/TypeScript.svg";
import ReactSvg from "@/img/skills/React.svg";
import Next from "@/img/skills/Next.svg";

export default function StrongSkills() {
  return <div className="rounded-lg border border-black/10 p-4 dark:border-white/15">
    <h3 className="text-md font-medium">Strong</h3>
    <ul className={'flex gap-5 mt-2'}>
      <li className="flex flex-col items-center">
        <Image
          src={JavaScript}
          width={40}
          height={40}
          alt="JavaScript"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          JavaScript
        </p>
      </li>
      <li className="flex flex-col items-center">
        <Image
          src={TypeScript}
          width={40}
          height={40}
          alt="TypeScript"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          TypeScript
        </p>
      </li>
      <li className="flex flex-col items-center">
        <Image
          src={ReactSvg}
          width={40}
          height={40}
          alt="React"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          React
        </p>
      </li>
      <li className="flex flex-col items-center">
        <Image
          src={Next}
          width={40}
          height={40}
          alt="Next"
        />
        <p className="mt-1 text-sm text-black/70 dark:text-white/70">
          Next
        </p>
      </li>
    </ul>
  </div>
}