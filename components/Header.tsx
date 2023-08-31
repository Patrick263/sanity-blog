import Image from "next/image"
import Link from "next/link"

function Header() {
  return (<header className="flex items-center justify-between space-x-2">
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <Link href="/">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgraE3qWKhu4aIa8FqlsSRejI_pYHQ157j5u4T3SSlQ&s" width={50} className="rounded-full" height={50} alt="logo"/>
        </Link>
        <h1>The Next Level</h1>
    </div>
    <div>
        <Link href="www.mtapatech.com" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#33A7FF] flex items-center rounded-full text-center">
            Signup to Mtapatech Digital Code
        </Link>
    </div>
    </header>
  )
}

export default Header