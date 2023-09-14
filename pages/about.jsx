import Image from 'next/image'
import profilePic from '../public/123.jpg'
export default function AboutPage(){
    return <>
        <h1>About!!!!</h1>
        <Image src={profilePic}/>
    </>
}