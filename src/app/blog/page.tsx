import Link from "next/link"

const page = () => {
  return (
    <>
    <div>
      <h1 className="text-4xl mb-10">Blog Home</h1>
      <Link href={"/blog"}>Blog</Link><br />
      <Link href={"/products"}>products</Link><br />
      <hr /><br />
      <Link href={"/articales/breaking-news-123?lang=en"}>Read In english</Link><br /><br />
      <Link href={"/articales/breaking-news-123?lang=fn"}>Read In french</Link><br />
    </div>
    </>
  )
}

export default page
