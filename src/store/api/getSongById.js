export const getSongById= async (id) => {
  const request = await fetch(`http://localhost:3001/items?id=${id}`);

  if (!request.ok) {
    throw new Error(`An error has occured: ${request.status}, incorrect id`);
  }

  const data = await request.json();
  return data;
}