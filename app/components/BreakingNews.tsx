import { BreakingNewsType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";



export default function BreakingNews({title,slug}:BreakingNewsType){

  return(
    <>
    <Link href={`/news/${slug}`}>
    <div className="flex px-10 lg:px-0 flex-col items-center py-4 border-b border-gray-200 gap-2 ">
      <h1 className="text-2xl md:text-3xl text-center">{title}</h1>
      <div className="flex items-center justify-center">
        <Image src="/NVLOGO.png" width={25} height={25} alt="डिसी नेपाल"/>
        <p className="text-sm">Nepal Voice</p>
      </div>
    </div>
    </Link>
    </>
  )
}