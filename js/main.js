const urlUsers = "https://randomuser.me/api/?results=12";
let prikaz = "";

$(document).ready(function () {
    fetch(urlUsers).then(function (response) {
        return response.json();
    }).then(function (response) {
        const users = response.results;
        console.log(users);
        // console.log(response.results[0].picture.medium);
        for( i = 0; i < users.length; i++) {
            // KAPITALIZACIJA KROZ .JS JE NEPOTREBNA
            // KORISTITI capitalize kroz css!!!
            let ime = users[i].name.first.charAt(0).toUpperCase() + users[i].name.first.substring(1);
            let prezime = users[i].name.last.charAt(0).toUpperCase() + users[i].name.last.substring(1);
            let grad = users[i].location.city.charAt(0).toUpperCase() + users[i].location.city.substring(1);
            let drzava = users[i].location.state.charAt(0).toUpperCase() + users[i].location.state.substring(1);
            let datumRodjenja = users[i].dob.date.substring(0, 10);
            let slVelika = users[i].picture.large;
            let geoSirina = users[i].location.coordinates.latitude;
            let geoDuzina = users[i].location.coordinates.longitude;
            let gender = ""
            // (users[i].gender == "male") ? gender = male : gender = female;

            prikaz += "<div class='col-md-6 col-xl-4'><div class='user-style'>";
            prikaz += `
                <a href="${slVelika}" target="_blank"><img src="${users[i].picture.medium}" alt="Picture of the user"></a>
                <p>
                    <strong>Name: ${ime}<br>Surname: ${prezime}<br></strong>
                    Location: <a href="https://www.google.com/maps/@${geoSirina},${geoDuzina},15z" target="_blank">${grad}</a>
                    <br>State: ${drzava}<br>
                    DOB: ${datumRodjenja}
                </p>
            `;
            prikaz += "</div></div>";
        }
        
        
        document.getElementById("rezultati").innerHTML += prikaz;
    });

})