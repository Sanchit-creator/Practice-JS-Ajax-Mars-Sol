var input1 = $('#input1');
var input2 = $('#input2');

$('button').click(function(e) {
    e.preventDefault();
    var i1 = input1.val();
    var i2 = input2.val();

    if (i1 === "" || i2 === "") {
        alert("Please fill the field");
        return;
    }
    
        let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' +i1+ '&page=' + i2+ "&api_key=VAw23Ir60Hbz18fwNVRz20UkoTs53858nGGAjtLE";
        $.get(url, function(data) {
            let photos = data.photos;
            $("#nasa-images img").remove();
            for (let photo of photos) {
                $("#nasa-images").append(`<img src = "${photo.img_src}" alt="${photo.id}" class="image">`);
            }
        }) 
    
})