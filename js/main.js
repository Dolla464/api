(async function getApi() {
    var element = await fetch ("https://dummyjson.com/products");
    var file = await element.json();
    var apiFile = file.products;
    var items = "";
    for (var i=0; i<apiFile.length; i++){
        var cartoona = `<div class="col-md-4 text-center mb-4">
                    <img src="${apiFile[i].images[0]}" style="height:350px" class="img-fluid">
                    <h3>${apiFile[i].id}</h3>
                    <h5>${apiFile[i].title}</h5>
                    <p>${apiFile[i].description}</p>
                    </div>`;
        items = items  + cartoona;
    }
    document.querySelector(".test").innerHTML = items;
})();
// getApi();

//==============================================================================
// way 2

(function getApii(){
    var xhttpp = new XMLHttpRequest;
    xhttpp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var x = this.responseText;
            var filee = JSON.parse(x);
            var apiFilee = filee.recipes;
            var itemss = "";
            for (var i=0; i<apiFilee.length; i++){
                var cartoonaa = `<div class="col-md-4 text-center mb-4">
                                <img src="${apiFilee[i].image_url}" style="height:350px" class="img-fluid">
                                <h3>${apiFilee[i].recipe_id}</h3>
                                <h5>${apiFilee[i].publisher_url}</h5>
                                </div>
                                `;
                itemss = itemss  + cartoonaa;
            }
            document.querySelector(".testt").innerHTML = itemss;
        }
    }
    xhttpp.open("GET" , "https://forkify-api.herokuapp.com/api/search?q=pizza" , true);
    xhttpp.send();
})();
// getApii();

//==============================================================================
// way 3
(function getApiii(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function(element){
        return element.json();
    })
    .then(function(apiFileee){

        var itemsss = "";
            for (var i=0; i<apiFileee.length; i++){
                var cartoonaaa = `<div class="col-md-4 text-center mb-4">
                                <img src="${apiFileee[i].url}" style="height:350px" class="img-fluid">
                                <h3>${apiFileee[i].id}</h3>
                                <h5>${apiFileee[i].title}</h5>
                                </div>
                                `;
                itemsss = itemsss  + cartoonaaa;
            }
            document.querySelector(".testtt").innerHTML = itemsss;
    })
})();
// getApiii();
