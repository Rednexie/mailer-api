function direct(email) {
    fetch("https://floodmail.net/free/" + email.trim(), {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "sec-ch-ua":'"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
      referrer: "https://floodmail.net",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "",
      method: "POST",
      mode: "cors",
      credentials: "omit",
    })
      .then((response) => response.text())
      .then((data) => {} /*console.log(data)*/)
      .catch((error) => console.error(error));
  }

function corsproxy_io(email){
  fetch("https://corsproxy.io?https://floodmail.net/free/" + email.trim(), {
    headers: {
      "x-forwarded-for": "146.70.99.176",
      "x-real-ip": "146.70.99.176",
      accept: "application/json, text/plain, */*",
      "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer: "https://floodmail.net",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "",
    method: "POST",
    mode: "cors",
    credentials: "omit",
  })
    .then((response) => response.text())
    .then((data) => {} /*console.log(data)*/)
    .catch((error) => console.error(error));
}

function corsbridged(email){
    fetch("https://cors.bridged.cc/https://floodmail.net/free/" + email.trim(), {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer: "https://floodmail.net",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "",
    method: "POST",
    mode: "cors",
    credentials: "omit",
  })
    .then((response) => response.text())
    .then((data) => {} /*console.log(data)*/)
    .catch((error) => console.error(error));
}


function cors_anywhere(email){
    fetch("https://cors-anywhere.herokuapp.com/https://floodmail.net/free/" + email.trim(), {
    headers: {
      "x-requested-with": "fetch",
      accept: "application/json, text/plain, */*",
      "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer: "https://floodmail.net",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "",
    method: "POST",
    mode: "cors",
    credentials: "omit",
  })
    .then((response) => response.text())
    .then((data) => {} /*console.log(data)*/)
    .catch((error) => console.error(error));
}

module.exports = (email) => {
  direct(email)
  corsproxy_io(email)
  corsbridged(email)
  cors_anywhere(email)
};

