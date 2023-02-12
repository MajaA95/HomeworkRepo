function first(workTime) {
    return new Promise((resolve, reject) =>{
        if(workTime <= 0){
            reject("This work time is too shortto work with. REJECTED!!");
        }
        setTimeout (() => {
            resolve("The tme is right, this promise is RESOLVED");
        }, workTime);
    });
}
function second(number){
    console.log("This is the second " + number);
}
//console.log(first());
//console.log(first(1000));
second(1);

first(1000)       // za edna sekunda
.then((data) =>{
    console.log(data);
    second(3);
})
.catch((error) =>{
    console.log(error);
})
second(2);

function complex(){
    setTimeout(function(){
        console.log("first");
        setTimeout(function(){
            console.log("second");
            setTimeout(function(){
                console.log("thitd")
            }, 1000)
        }, 2000)
    }, 3000)
}
complex();
/*
function showDocuments(documents){
    if(!documents && typeof documents != "object"){
        throw new Error("problem with doc bate");
    }
    if(documents.length === 0){
        throw new Error ("No doc!!");

    }
    documents.forEach((docc)=>{
        console.log(`${docc.name}.${}`)
    })
        
    });
}

function getDocumentsJQuery(){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: "https://raw.githubsercontent.com/sedc-codeacademy/skw0-04-ajs/main/Samples/documents.json",
            successs: (response)=> {
                resolve(JSON.parse(response));
            },
            error: (err)=>{
                reject(err);            //koga ke odi vo reject odi vo catch
            },
        });
    });
}
function getDocumentsJQuery(){
    .then(data=>{
        console.log("This is an async operation in the .then")
    })
    .catch(error) =>{
        console.log(
            error
        )
    }
*/

/*

function getDocumentsFetch(){
    return new Promise((resolve,reject)=>{
        fetch("https://raw.githubsercontent.com/sedc-codeacademy/skw0-04-ajs/main/Samples/documents.json")
        .then((results) =>{
            resolve(result.json());
        })
        .catch((error) =>{
            reject(error)
        })
    })
}


getDocumentsFetch()
.then(data=>{

}) */


//HOW DO WE DO IT AT WORK!!

async function getAllDocuments(){ //ASYNC
let response = fetch("https://raw.githubsercontent.com/sedc-codeacademy/skw0-04-ajs/main/Samples/documents.json");
let result = await response.json(); //AWAIT pocekaj fetch da zeme podatoci, koga ke se sredat se izvrsuva

return result; // i gi vrakja

}
async function printDocsAsync(){
    try{
    let docs = await getAllDocuments();
    docs.forEach((doc)=>{
        console.log(`${doc.name}.${doc.type} - [${doc.size}mb]`);
    });
    }
    catch(error){  //poraka primer support
        console.log(error +"Error n the try/catch block")
    }
}
printDocsAsync();
console.log(getAllDocuments());






