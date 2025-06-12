const url = 'http://localhost:3000';
export async function fetchData(
  endPoint: string,
  method: string = 'GET',
  body: any = undefined
) {
  const config = body
    ? {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    : {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
  try {
    const response = await fetch(`${url}${endPoint}`, {
      ...config,
    });

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
