export const addSongToCatalog = async (song) => {
  const request = await fetch('http://localhost:3001/items', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(song),
  })

  if (!request.ok) {
    throw new Error(`An error has occured: ${request.status}, incorrect data`)
  }

  const data = await request.json();
  return data;
}