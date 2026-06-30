type Props = {
    params:Promise<{
        slug:string[]
    }>
}
export default async function Docs({params}:Props) {
    const {slug} = await params
    return (
    <div>
      <h1>Docs</h1>
      <p>{slug.join(" / ")}</p>
    </div>
  );
    
}