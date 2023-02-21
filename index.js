export default class Request {
  constructor(method, url, bodyJSON) {
    if (typeof (method || url) != 'string') {
      return new Error("Error: 'method' or 'url' arguments must be a string.")
    }
    if (method == "GET") {
      fetch(url, {
        method: 'GET'
      })
      .then(response => response.json)
      .then(json => return json)
    } else if (method == "POST") {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyJSON)
      })
      .then(response => response.json())
      .then(response => return JSON.stringify(response))
    }
  }
}
