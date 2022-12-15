import { Button } from "ui";

interface House {
  name: string,
  region: string,
  url: string
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://www.anapioficeandfire.com/api/houses`)
  const data: House[] = await res.json();
  console.log(JSON.stringify(data));

  console.log("Test some logging!");

  // Pass data to the page via props
  return { props: { data } }
}

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Button />
    </div>
  );
}
