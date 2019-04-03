console.log('Client side javascript file is loaded!');

fetch('http://localhost:5000/weather?address=minsk').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location);
            console.log(data.forecast)
        }
    })
});