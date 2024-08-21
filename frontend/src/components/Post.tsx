import { useState } from "react"
import { Comments } from "./Comments"


export function Post () {
    const [isOpened, setIsOpened] = useState<boolean>(false)

    return (
        <div className="h-fit bg-light m-10 p-5 rounded-lg">
            <div className="max-w-max overflow-clip bg-dar">
                <img className="float-left mr-8 mb-4" src="/smol.png" alt="Picture" />
                <p className="text-justify font-bold text-lg mb-3">The post name and some more typing can be done here to check how the thing works</p>
                <p className="text-justify">ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjflooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000ooo oo ooooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;looo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asj aldfl;asjooo oo oooo oooo o sfsdljf lsjdfa;l aldfl;asjoo oooo o sfsdljf lsjdfa;l aldfl;asjf adlfjalskf alskdfjl fljdf  sdfjlsjf dfjlsjf sljflkjasl  ldsjflkjfl oo00000000 oo00000000</p>
            </div>
            <div className="">
                <button className="flex bg-dark w-fit mt-3 rounded-xl p-2" onClick={() => setIsOpened(!isOpened)}>
                    <p className="mr-1 font-bold">Comments</p>
                    <img className="w-5 h-5" src="/commentsdown.png" alt="arrow"/>
                </button>
                <div>{isOpened && <Comments/>}</div>
            </div>
        </div>
    )
}
