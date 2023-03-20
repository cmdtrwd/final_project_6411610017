var x = "";
var titleList = ["Grass Half Full", "Pilferer", "Air Heart", "The Thirst", "OH DAMN!", "Gold Black Red", "Outta Love", "Unreak Quilted"]
var price = ["฿2000","฿2200","฿2200","฿2400","฿3200","฿2500","฿3000","฿2400"]
for (i = 0; i < 8; i++) {
    x = x + '<div class="product-item">' +
        '<img class="active" src="images/p0'+(i+1)+'_1.webp" alt="">' +
        '<img class="hover" src="images/p0'+(i+1)+'_2.webp" alt="">' +
        '<h2>' + titleList[i] + '</h1>' +
        '<p>'+ price[i] +'</p>' +
        '<div class="button">Add to Cart</div>' + '</div>';
}

$("#products").html(x);
