(()=>{
    const theTeam = document.querySelector("#team-members"),
          theTemplate = document.querySelector("#bio-template").content;
    // bio-template becomes theTemplate

    // start with a fetch call

    function getData() {
        // take the info out of our .json
        fetch("./tbl_favouritethings.json")
        .then(res => res.json()) //unpack the api response into plain text
        //open up your happy meal
        .then(data => {
        //what do you want to do with the food
            console.table(data);
            //put the food into a table
            //a useable format, .json to array pretty much

            //call a function to generate our dynamic content
            //send your data in the useable file where it is to be used
            buildTeam(data);
        })
        .catch(error => console.error(error));
        //if an error then error error
        //need one of these for my life

        //** fetch the data, then unpack, then do what you     */ */
        //** want with it , then catch for errors, then invoke */ */

    
    }

    function buildTeam(info){
        //what were doing with the info we got

        let team = Object.keys(info);
        // I actually only vaugley understand whats happening here.
        team.forEach(person =>{
            //for each section in the table generate the content that goes on the page
            let panel = theTemplate.cloneNode(true),
            //makes you a new template from theTemplate and holds it in panel???
                memberInfo = panel.firstElementChild.children;
                //uhhhh 
                //Somethings happening here...
            console.log( panel.firstElementChild);
            
            memberInfo[0].querySelector('img').src = `images/${info[person].Image}`;
            memberInfo[1].textContent = info[person].Title;
            memberInfo[2].textContent = info[person].Description;
            memberInfo[3].querySelector('a').href= info[person].Link;
            memberInfo[3].querySelector('a').textContent = info[person].link_Text;
            //Ok we're actually putting the info into the sections now
           
            memberInfo[0].addEventListener("click", showHideInfo);
            //put the virtual panel into the team section of html
            //load the junk in here, and load it to the html
            
            panel.firstElementChild.classList.add (person);
            theTeam.appendChild(panel);
            
        })
        
    }

    function showHideInfo() {
    
        //when you clicky the image..
       let clickedSection = (this.parentElement);
       //set what you clicked into a thing
       let bits = (clickedSection.querySelectorAll("p"));
       //take all the ps out of what you clicked

       if(bits[0].style.visibility == "hidden"){
           //check the first p and see if you can see it
           //just realising I should have done all of this as a class called hidden instead of style.visibility but whatev i guess
             bits.forEach(bit =>
                //and make every p visible
             bit.style.visibility = "visible");
       }
       else {
             bits.forEach(bit =>
            //and make every p hidden
             bit.style.visibility = "hidden");
       }
       //this is crazy roundabout and I was trying to fix problems that didn't exist
       //if i knew queryselectorall was a thing 2 hours ago this wouldn't have happened lol
    }

    
    // imageButton.addEventListener("click", showInfo);

    getData();
}) ();