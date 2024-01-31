import Image from "next/image"

const Devimg = ({containerStyle, imgSrc}) => {
  return <div className={`${containerStyle}`}>
      <Image src={imgSrc} fill priority alt="" />
  </div>
}

export default Devimg