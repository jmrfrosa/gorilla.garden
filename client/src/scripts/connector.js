const connector = {
  getGorillas: () => {
    return fetch('/gorillas', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(handleError)
      .catch(error => console.log(error))
  },
  addGorilla: (gorilla) => {
    return fetch('/gorillas/create', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gorilla)
    }).then(handleError)
      .catch(error => {
      console.log(error);
    });
  },
}

function handleError(response) {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
}

export default connector;