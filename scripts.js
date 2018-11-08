window.addEventListener("DOMContentLoaded", init);

function init(){
    document.querySelector("#number").addEventListener("keyup", getFact);
    document.querySelector("#output").className = 'hide';
}

function getFact(){
    let input = document.querySelector("#number").value;
    // console.log(input);
    if(input){
        var url = "http://numbersapi.com/"+input;
        console.log(url);
        fetch(url).then(response=>{
       
            if(response.ok){
                response.text().then(data=>{
                    document.querySelector("#output").className = 'show';
                   document.querySelector("#fact").innerHTML = data;
                })
            }
            // console.log(this.responseText);
            // console.log(response.json());
        })
    }

  
}