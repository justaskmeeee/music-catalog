export const searchSong = async (filterString) => {
  const request = await fetch(`http://localhost:3001/items?q=${filterString}`);

  if (!request.ok) {
    throw new Error(`An error has occured: ${request.status}, song not found`);
  }

  const data = await request.json();
  return data;
}