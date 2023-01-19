export const editSong = async (song) => {
  const request = await fetch(`http://localhost:3001/items?id=${song.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(song),
  });

  if (!request.ok) {
    throw new Error(`An error has occured: ${request.status}, incorrect id`);
  }

  const data = await request.json();
  return data;  
}