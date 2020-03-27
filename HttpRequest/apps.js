function callURL() {
    const data = axios.get("https://www.facebook.com")
    .then(() => {
        console.log(data);
    });
    console.log(data);

}

callURL()