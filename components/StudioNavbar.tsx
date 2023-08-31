import React from 'react'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#33A7FF] flex items-center">
            <ArrowUturnLeftIcon className="h-6 w-6 text-[#33A7FF] mr-2"/>
            Go To Website</Link>
            <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#33A7FF]">
                <h1 className="font-bold text-white">
                    Want to check out our latest offerings ?
                </h1>
                <Link href="https://www.mtapatech.com" className="text-[#33A7FF] font-bold ml-2">
                    www.mtapatech.com
                </Link>

            </div>
    </div>
        {props.renderDefault(props)}</div>
  )
}

export default StudioNavbar