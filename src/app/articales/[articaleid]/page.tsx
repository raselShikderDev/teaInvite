import Link from "next/link";

const readArticale = ({
  params,
  searchParams,
}: {
  params: { articaleid: string };
  searchParams: { lang: string };
}) => {
  const { articaleid } = params;
  const { lang = "en" } = searchParams;
  return (
    <>
      <div>
        <h1 className="text-4xl mb-10">{`Read articale of ${articaleid}`}</h1>
        <p>{`in ${lang} language`}</p>
        <br />
        <hr />
        <br />
        <Link href={`/articales/${articaleid}?lang=en`}>english</Link>
        <br />
        <br />
        <Link href={`/articales/${articaleid}?lang=fn`}>french</Link>
        <br />
      </div>
    </>
  );
};

export default readArticale;
