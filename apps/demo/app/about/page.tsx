import { GekoButton } from 'geko-react';

export default async function AboutPage() {
  const result = await fetch('https://dogapi.dog/api/v2/breeds', {
    cache: 'no-cache',
  });

  if (result.ok) {
    const data = await result.json();
    return (
      <ul>
        {data.data.map(
          (item: { id: string; attributes: { description: string } }) => (
            <li key={item.id}>
              <GekoButton>{item.attributes.description}</GekoButton>
            </li>
          )
        )}
      </ul>
    );
  }

  return <p>This is about page</p>;
}
