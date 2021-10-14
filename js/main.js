(()=>{
    const theTeam = document.querySelector("#team-members"),
          theTemplate = document.querySelector("#bio-template").content;

    // start with a fetch call

    function getData() {
        // use the detch API to retreice some data
        fetch("./tbl_favouritethings.json")
        .then(res => res.json()) //unpack the api response into plain text
        //open up your happy meal
        .then(data => {
        //what do you want to do with the food
            console.table(data);
            //tell us what toy you got

            //call a function to generate our dynamic content
            buildTeam(data);
            //pass your data into your function that uses it
        })
        .catch(error => console.error(error));
        //if an error then error

        //** fetch the data, then unpack, then do what you     */ */
        //** want with it , then catch for errors, then invoke */ */

    
    }

    function buildTeam(info){

        //first, get a reference to all of the keys of the info object
        let team = Object.keys(info);

        team.forEach(person =>{
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            
            memberInfo[0].querySelector('img').src = `images/${info[person].Image}`;
            memberInfo[1].textContent = info[person].Title;
            memberInfo[2].textContent = info[person].Description;
            memberInfo[3].querySelector('a').href= info[person].Link;
            memberInfo[3].querySelector('a').textContent = info[person].link_Text;
            

            //put the virtual panel into the team section of html
            //load the junk in here, and load it to the html

            theTeam.appendChild(panel);

        })
        
    }
    getData();
}) ()