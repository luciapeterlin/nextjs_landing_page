export const getData = async () => { 
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const response = await res.json();
      const dataResponse = response.slice(0, 10)
      return dataResponse
  } catch (error) {
    console.log('Error fetching data')
  }
}