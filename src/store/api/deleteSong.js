export const deleteSong = async (id) => {
  const request = await fetch(`http://localhost:3001/items?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  }) 
  
  if (!request.ok) {
    throw new Error(`An error has occured: ${request.status}, incorrect id`);
  }

  const selectedSong = await request.json();
  return selectedSong;
}