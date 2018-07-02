/**
 * GiphyParty JS - Is a simple API
 *
 * Built by Schuyler Ankele
 */

var giphyData;
var defaultCats = ['Gerbil', 'Giraffe','Unicorn', 'Pinata', 'Man', 'Bear', 'Pig'];
var numberOfCats = defaultCats.length;
var queryString = '';
const API_KEY = 'ytKZvWakJfFNolo3YR2HvQ7qkyuH3Obb';

// Collect values from the form
const collectSearch= (idName) => {
    let searchInput = document.querySelector('#' + idName);
    let searchBtn =searchInput.value;
    searchInput.value='';
    console.log(searchBtn);
    addButton(searchBtn);
}

// Add BS4 toggle button
const addButton = categoryName => {
    let btn = $('<button>');
    /*
    * <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
     Single toggle
     </button>
    * */
    btn.attr({
        "class": "btn btn-outline-secondary category",
        "data-toggle": "button",
        "aria-pressed": "false",
        "autocomplete":"off",
        "category-value":categoryName
    });
    btn.text(categoryName + '  ');
    let closeBtn = $('<a>');
    closeBtn.addClass('remove-cat');
    closeBtn.text('X');
    closeBtn.on('click', function(){
        queryString = queryString.replace(categoryName, '');
        btn.remove();
        callGiphy();
    });
    btn.append(closeBtn);
    btn.on('click', function (){
        btn.toggleClass('btn-outline-secondary');
        btn.toggleClass('btn-primary');
        //btn.toggle('btn btn-primary');
        if(queryString.includes(categoryName)){
            // Then we'll remove it
            queryString = queryString.replace(categoryName, '');
        }
        else{
            // We will add it
            console.log('We will add the category');
            queryString += categoryName + ' ';
        }
        console.log(queryString);
        callGiphy();
    });
    $('#categories').append(btn);
}

const removeBtn = ()=>{


}

const checkCats = () =>{
    // Get array of buttons with class category
    let buttons = $('.active');
    buttons.forEach(function (element){
        console.log(element);
    });

    // Push these into a string and GET the Giphy call
}

const callGiphy = () =>{
    $.get('https://api.giphy.com/v1/gifs/search?api_key=ytKZvWakJfFNolo3YR2HvQ7qkyuH3Obb&limit=10&offset=0&rating=G&lang=en&q='
    + queryString, function (response) {
        // Put these in an array
        giphyData = response.data;
        console.log(response);
        giphyData.forEach(function (element) {
            console.log(element.slug);
            buildCard(element);
        });
    });
}
// bitly_gif_url:"https://gph.is/1GNSiAF",
// bitly_url:"https://gph.is/1GNSiAF",
// content_url:""
// embed_url:"https://giphy.com/embed/12ELmx0C4EFKcE",
// id:"12ELmx0C4EFKcE",
// images:
// {fixed_height_still: {…}, original_still: {…}, fixed_width: {…}, fixed_height_small_still: {…}, fixed_height_downsampled: {…}, …}
// import_datetime:"2015-05-01 18:51:33"
// is_sticker:
//     0
// rating
//     :
//     "g"
// slug
//     :
//     "kitten-12ELmx0C4EFKcE"
// source
//     :
//     "https://weheartit.com/entry/63807627"
// source_post_url
//     :
//     "https://weheartit.com/entry/63807627"
// source_tld
//     :
//     "weheartit.com"
// title
//     :
//     "kitten GIF"
// trending_datetime
//     :
//     "1970-01-01 00:00:00"
// type
//     :
//     "gif"
// url
//     :
//     "https://giphy.com/gifs/kitten-12ELmx0C4EFKcE"
// username
//     :
//     ""
// _score
//     :
//     2300034.8

const displayGiphs = idName =>{

}

const toggleGif = () => {

}

const buildCard = giphyObj =>{
    let image, title, link;

    // let card = document.createElement('div');
    // card.setAttribute('class', 'card text-center');
    // let body = document.createElement('div');
    // body.setAttribute('class', 'card-body');
    let col = $('<div>');
    col.attr({
       "class":"col-4",
        "id":giphyObj.slug
    });

    let card = $('<div>');
    card.addClass('card text-center');

    let img = $('<img>');
    img.attr({
        'src': giphyObj.images['480w_still'].url,
        'class':'card-img-top',
        'status':'paused'
    });
    card.append(img);

    let cardBody = $('<div>');
    cardBody.addClass('card-body');


    let imageLink = $('<a>');
    imageLink.text('Open in Giphy');
    imageLink.attr({
        'class':'btn btn-primary',
        'href':giphyObj.url,
        'target':'_blank'
    });
    cardBody.append(imageLink);

    let toggleBtn = $('<button>');
    toggleBtn.attr({
        'class':'btn btn-success'
    });
    toggleBtn.text('Play?');
    toggleBtn.on('click', function(){
        let status = img.attr('status');
        if(status === 'paused'){
            img.attr({
                'src':giphyObj.images.downsized.url,
                'status':'playing'
            });
        }
        else{
            img.attr({
                'src': giphyObj.images['480w_still'].url,
                'status':'paused'
            });
        }
    });
    cardBody.append(toggleBtn);
    card.append(cardBody);
    col.append(card);
    $('#images').prepend(col);
    // let card =
    //     `<div class="col-4" id="${giphyObj.slug}">
    //         <div class="card text-center">
    //             <img class="card-img-top" src="assets/images/luke.jpg" alt="Card image cap">
    //             <div class="card-body">
    //             <h5 class="card-title">Luke</h5>
    //             <a id="LukeAction" href="#userMessage"
    //             class="btn btn-primary action" onclick="playerSelect('Luke')"
    //             player="Luke">Select</a>
    //             </div>
    //         </div>
    //     </div>`;
};
