import Image from "next/image"
import cup from "../../public/cup.gif"
import p1 from "../../public/p1.jpg"
import p2 from "../../public/p2.jpg"
import p3 from "../../public/p3.jpg"
import form from "../../public/form2.gif"
import back from "../../public/back.jpg"
import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[2em] items-center py-[2em] px-[1em] border-0 w-[350px] my-[2em] rounded-2xl shadow-red-400 shadow-2xl">
      <Link href="/landing" className="flex items-center text-red-800 ms-[-7em]"><Image src={back} className="w-[80px]"/>back</Link>
      <Image src={cup} className="w-[150px]"/>
      <div className="flex flex-col  gap-[2em] text-center items-center">
          <Image src={p1} className="w-[200px] rounded-lg "/>
          <p className="mt-4 text-red-700">
            Happy Birthday "Precious" 🥳🥳🎉🎉, I wish you a long life filled with happiness & 
            prosperity ❤️🌹. I have quite a lot of things to say and you're going to have to bear with me so yeahhhh.
          </p>
      </div>
      {/*  */}
      <div className="flex flex-col gap-[2em] text-center items-center">
          <Image src={p2} className="w-[200px] rounded-lg "/>
          <p className="mt-4 text-red-700">
            To start with, I want to say Thank You for being a good friend,
            for looking out for me ever since the day I met u at least since we started being friends anyways 🤷,  I really Appreciate the things you've done for me and I remember every one of them 😂.
            <br />
            <br />
            <br />
                You really mean a lot to me and I like you, mind u i'm not saying any of this bcuz of whatever happened that night 😂. I've felt like this for a while actually, It kind of started when I saw you at My Younger sister's VS last year after we graduated, I was in a state of shock 🙂, Basically I realized at that moment that ;
                <br />
                <br />
                Firstly, I might not see u again for a long while which caused an ache in my chest u know 🙂. 
                <br />
                <br />
                Also, I realized that I took you and the friendship that we had for granted, which I won't lie, I'm mad at myself for, because sure I was lost and all that and I just wanted to leave that school and that wole section of my life behind me but I could have made up time for you which I didn't .
                <br />
                <br />
                I went back to some of the conversations we had and I realized that I fucked up, I pushed you away out of being self-centered and egoistic, which I shouldn't have .
                <br />
                <br />
                I thought I liked you, but instead I liked a version of u that didn't exist and  I didn't want to admit that to my self, so i selfishly pushed u out of my life instead of accepting you For the way U were.

                <br />
                <br />
                But on that I saw u I realized that I needed u , The real u and I was about to Lose u forever.

          </p>
      </div>
      {/*  */}
      <div className="flex flex-col gap-[2em] text-center items-center">
          <Image src={p3} className="w-[200px] rounded-lg "/>
          <p className="mt-4 text-red-700">
            I hope you're able and willing to forgive me and I wish you a Happy Birthday once more;
            more happiness, more peace and more "You" 💕.
          </p>
      </div>
      {/*  */}
        <Image src={form} className="w-[130px]"/>
        </div>
    </div>
  )
}

export default page
