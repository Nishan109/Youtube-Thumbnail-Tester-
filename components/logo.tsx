import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <Image src="/images/logo.png" alt="YouTube Thumbnail Tester Logo" fill className="object-contain" priority />
      </div>
      {showText && (
        <span className="font-bold text-lg">
          <span className="text-red-600">YouTube</span> Thumbnail Tester
        </span>
      )}
    </Link>
  )
}
