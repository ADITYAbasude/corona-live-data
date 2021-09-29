fetch('https://corona.lmao.ninja/v2/countries/india?yesterday&strict&query%20')
    .then(data => data.json())
    .then(codata => {
        const country = codata.country;
        const cases = codata.cases;
        const todaycases = codata.todayCases;
        const de = codata.deaths;
        const re = codata.recovered;

        document.getElementById('para').innerHTML = country;
        document.getElementById('para1').innerHTML = cases;
        document.getElementById('para2').innerHTML = todaycases;
        document.getElementById('para3').innerHTML = de;
        document.getElementById('para4').innerHTML = re;
    })
