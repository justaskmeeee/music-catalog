export const fetchSongs = async () =>  {
  const request = await fetch('http://localhost:3001/items');

  if (!request.ok) {
    throw new Error(`An error has occured: ${request.status}, failed to load data`);
  }
  
  const data = await request.json();
  return data;
} 