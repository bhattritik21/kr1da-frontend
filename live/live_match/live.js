const name = sessionStorage.getItem('Id');
console.log(name);

let live_match = document.getElementById('live_match');


$.get(`https://cricapi.com/api/cricketScore?apikey=Fly9x2wQFRWdVL3MylH2WwN27Wq2&unique_id=${name}`, function (matchdata) {
    // let score = matchdata.matchdata.description;
    console.log(matchdata);
    console.log(live_match);
    let teams = `<h1>${matchdata.description}</h1>`;
    live_match.innerHTML = teams;

    if (matchdata.matchStarted == false) {
        let t = ` <div class="not_started">
       <h3>Match has not been started yet</h3>
   </div>`
        live_match.innerHTML += t;
        document.getElementById('live_chat').style.display = "none";
    }


    else {
        live_match.innerHTML = '';
        document.getElementById("live_chat").style.display = "block";
        let teams1 = `<h1>${matchdata.description}</h1>`;
        live_match.innerHTML = teams1;
        $.get(`https://cricapi.com/api/fantasySummary?apikey=wFujS0gL38b4zGig7uKPrMMD2Tu1&unique_id=${name}`, function (matchdata) {
            console.log(matchdata);
            // console.log(matchdata.type);
            // console.log(matchdata.data.toss_winner_team);
            // console.log(matchdata.data.batting[0].scores);
            console.log(matchdata.data.batting);
            console.log(matchdata.data.bowling);

            let teamz = `<div class="matchdetail">
                            <div class="matchtype">
                                ${matchdata.type}
                             </div>
                            <div class="tosswinner">
                                 ${matchdata.data.toss_winner_team} won the toss
                            </div>
                        </div>
                        <div class="teams">
                        <div class="team"><li>${matchdata.data.team[0].name}</li>
                        <hr>
                        <h4>1ST INNINGS</h4>
                        <div class="batting" id="batting1"></div>
                        <div class="bowling" id="bowling1"></div>
                        </div>
                        <div class="team"><li>${matchdata.data.team[1].name}</li>
                        <hr>
                        <h4>2ND INNINGS</h4>
                        <div class="batting" id="batting2"></div>
                        <div class="bowling" id="bowling2"></div>
                        </div> 
                        </div>`
                ;
            live_match.innerHTML += teamz;

            let bat1 = document.getElementById('batting1');
            let bowl1 = document.getElementById('bowling1');
            let bowl2 = document.getElementById('bowling2');
            let bat2 = document.getElementById('batting2');

            //live batsmans
            //inings 1
            matchdata.data.batting[0].scores.forEach(element => {
                if (element.dismissal == "not out") {
                    bat1.innerHTML += `<div class="bat">${element.batsman} : ${element.R} *<div>`;
                }
            });
            //innings 2

            if ((matchdata.data.batting[1] == null)) {
                console.log("");;
            }
            else {
                matchdata.data.batting[1].scores.forEach(element => {
                    if (element.dismissal == "not out") {
                        bat2.innerHTML += `<div class="bat">${element.batsman} : ${element.R} *<div>`;
                    }
                });
            }

            //     //live bowlers  
            //     //innings 1
            bowl1.innerHTML += `<table class="table table-striped" id="bowl1">
        <thead>
            <tr>
                <th scope="col">Bowler</th>
                <th scope="col">Overs</th>
                <th scope="col">Runs</th>
                <th scope="col">Wickets</th>
                <th scope="col">Economy</th>

            </tr>
        </thead>
        </table>`;

            matchdata.data.bowling[0].scores.forEach(element => {
                console.log("hello");

                document.getElementById("bowl1").innerHTML += ` <tbody>
        <tr>
            <th scope="row">${element.bowler}</th>
            <td>${element.O}</td>
            <td>${element.R}</td>
            <td>${element.W}</td>
            <td>${element.Econ}</td>
        </tr>
    </tbody>`;
            })

            if ((matchdata.data.bowling[1] == null)) {
                console.log("hello");
            }
            else {
                bowl2.innerHTML += ` <table class="table table-striped" id="bowl2">
        <thead>
            <tr>
                <th scope="col">Bowler</th>
                <th scope="col">Overs</th>
                <th scope="col">Runs</th>
                <th scope="col">Wickets</th>
                <th scope="col">Economy</th>

            </tr>
        </thead>
        </table>`;

                matchdata.data.bowling[1].scores.forEach(element => {

                    document.getElementById("bowl2").innerHTML += ` <tbody>
                <tr>
                    <th scope="row">${element.bowler}</th>
                    <td>${element.O}</td>
                    <td>${element.R}</td>
                    <td>${element.W}</td>
                    <td>${element.Econ}}</td>
                </tr>
                </tbody>`;
                })
            }

        });

    }
});


