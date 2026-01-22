import Link from "next/link";
import ImageSlider from "./ImageSlider";
import { CardType } from "@/lib/type";


export default function Card({link,images,title,content}:CardType){
  return(

    <Link
    href={link}
    className="
      group cursor-pointer bg-white
      rounded-xl md:rounded-2xl
      shadow-sm 
      hover:shadow-lg
      transition-all duration-200
      flex flex-col
      flex-1
      gap-4
      min-w-[280px] md:min-w-[300px] lg:min-w-[320px]
      max-w-full
      p-6 md:p-7 lg:p-8
    "
  >
    {/* IMAGE SLIDER */}
    <div className="relative w-full aspect-video bg-gray-100 overflow-hidden rounded-lg">
      <ImageSlider
        images={images}
        title={title ?? "News image"}
      />
    </div>

    {/* CONTENT */}
    <div className="flex-1 flex flex-col gap-2 mt-4">
      <h3 className="font-bold text-base md:text-lg leading-snug line-clamp-2 mb-2
        group-hover:bg-linear-to-r group-hover:from-[#CC0001] group-hover:to-[#004AAD]
        group-hover:text-transparent group-hover:bg-clip-text">
       {title}
      </h3>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4 flex-1 ">
       {content}
      </p>
    </div>
  </Link>
  )
}