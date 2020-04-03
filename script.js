
fetch("http://mymmd.dk/bike/wp-json/wp/v2/bike?per_page=100&_embed&order=asc")
.then(res=>res.json())
.then(setupCarts)


function setupCarts(bikesArray){
    console.log(bikesArray);
    const template = document.querySelector("template").content;

bikesArray.forEach(bike => {


    const copy = template.cloneNode(true);




    copy.querySelector("h3").textContent = bike.brand;
   console.log(bike);
    copy.querySelector("img").src = bike._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    copy.querySelector("h1").textContent = bike.title.rendered;
    copy.querySelector("p.first span").innerHTML = bike.price;
    copy.querySelector("p.second span").innerHTML = bike.color;
    copy.querySelector("p.third span").innerHTML = bike.in_stock;



    document.querySelector("main").appendChild(copy);
});
}
