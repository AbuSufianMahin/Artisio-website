import Image from 'next/image'
import React from 'react'
import artisioLogo from "../../../assets/pictures/artisioLogo.png"
import Link from 'next/link'

export const ArtisioLogo = () => {
  return (
    <Link href={"/home"}>
        <Image src={artisioLogo} alt='Logo of Artisio' height={"48"} className='rounded-full'/>
    </Link>
  )
}
