let match = document.getElementById('matches');


$.get("https://cricapi.com/api/cricket?apikey=Fly9x2wQFRWdVL3MylH2WwN27Wq2", function (matchdata) {
    console.log(matchdata);

    let matchHtml = "";
    matchdata.data.forEach(function (md) {
        if (md.description.includes("India") || md.description.includes("South Africa") || md.description.includes("Australia") || md.description.includes("England") || md.description.includes("West Indies") || md.description.includes("Pakistan") || md.description.includes("New Zeland") || md.description.includes("Zimbabwe") || md.description.includes("Sri Lanka") || md.description.includes("Bangladesh")) {
            console.log(md.description);
                    let dat = `  <hr>
                    <div class="match"  >
                        <a href= "live_match/index.html" ><span class="clik" id="${md.unique_id}">${md.description}</span></a>
                    </div>
                    `;
                    matchHtml += dat;
        }
        // else{
        //     let dat = `  <hr>
        //             <div class="match"  >
        //                 <span style="color:red;"> No match for today </span>
        //             </div>
        //             `;
        //             matchHtml += dat;
        // }
    });
    match.innerHTML = matchHtml + `<hr>`;
    var mat = document.querySelectorAll('.clik');
    for (const button of mat) {
        button.addEventListener('click', AddId);
    }
});

function AddId(button) {
    id = this["id"];
    sessionStorage.setItem("Id", id);
};


