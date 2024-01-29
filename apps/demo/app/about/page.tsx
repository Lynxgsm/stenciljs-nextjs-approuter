export default async function AboutPage() {
  const result = await fetch('https://dogapi.dog/api/v2/breeds');
  if (result.ok) {
    const data = await result.json();
    return (
      <ul>
        {data.data.map((item: { attributes: { description: string } }) => (
          <li>{item.attributes.description}</li>
        ))}
      </ul>
    );
  }

  return <p>This is about page</p>;
}
