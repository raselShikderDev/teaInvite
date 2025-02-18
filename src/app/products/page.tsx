import Link from "next/link";

export default function AllProducts() {
  return (
    <div>
      <h1 className="text-2xl font-bold pb-6">AllProducts list below</h1>
      <hr />
      <Link href={"/prodacts"}>Prodacts Number 01</Link><br />
      <Link href={"/prodacts"}>Prodacts Number 02</Link><br />
      <Link href={"/prodacts"}>Prodacts Number 03</Link><br />
    </div>
  );
}
