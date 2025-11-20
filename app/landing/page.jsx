import Image from "next/image"
import beat from "../../public/beat.gif"
import arrows from "../../public/arrows.gif"
import Link from "next/link"


const landing = () => {
  return (
   <div className="flex flex-col items-center pt-[5.5em] ">
      {/*  */}
      <div className=" flex flex-col items-center gap-3 text-red-700 border border-white rounded-2xl w-[300px] text-center shadow-red-400 shadow-2xl pb-[2em]">
          <Image src={beat} className="w-[400px]"/>
          <p className="px-2">
              If your name Rhymes with "Gorgeous" 😏 feel free to click the button, If not please G.T.F.O Respectfully 😒
          </p>
          <Image src={arrows} className="w-[100px]"/>
          <Link className="hover:text-red-400 border border-dashed p-2 rounded-xl" href="/page1">Click Here</Link>
      </div>
      {/*  */}
      {/*  */}
    </div>
  )
}

export default landing
