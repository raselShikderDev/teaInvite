"use client"
import { usePathname } from "next/navigation"

const NotFoundReview = () => {
  const pathName = usePathname()
  console.log(pathName)
    return (
    <div>
      Review Not found
    </div>
  )
}

export default NotFoundReview
