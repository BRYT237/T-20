import Image from "next/image"
import cup from "../../public/cup.gif"
import ph1 from "../../public/L1.jpg"
import ph2 from "../../public/L2.jpg"
import ph3 from "../../public/L3.jpg"
import form from "../../public/form2.gif"
import back from "../../public/back.jpg"
import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[2em] items-center py-[2em] border-0 w-[350px] my-[2em] rounded-2xl shadow-red-400 shadow-2xl">
      <Link href="/landing" className="flex items-center text-red-800 ms-[-7em]"><Image src={back} className="w-[80px]"/>back</Link>
      <Image src={cup} className="w-[150px]"/>
      <div className="flex flex-col  gap-[2em] text-center items-center">
          <Image src={ph1} className="w-[200px] rounded-lg "/>
          <p className="mt-4 text-red-700">first paragraphhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</p>
      </div>
      {/*  */}
      <div className="flex flex-col gap-[2em] text-center items-center">
          <Image src={ph2} className="w-[200px] rounded-lg "/>
          <p className="mt-4 text-red-700">Second Paragraphhhhhhhhhhhhh</p>
      </div>
      {/*  */}
      <div className="flex flex-col gap-[2em] text-center items-center">
          <Image src={ph3} className="w-[200px] rounded-lg "/>
          <p className="mt-4 text-red-700">Third Paragraphhhhhhhhhh</p>
      </div>
      {/*  */}
        <Image src={form} className="w-[130px]"/>
        </div>
    </div>
  )
}

export default page
