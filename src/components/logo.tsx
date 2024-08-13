import Image from "next/image"
import LogoSvg from "../../public/images/food-color-sushi-svgrepo-com.svg"

export const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Image className="w-10 h-10" src={LogoSvg} alt="" />
            <span className="text-xl flex">Food<p className="opacity-60">whats</p></span>

        </div>
    )
}