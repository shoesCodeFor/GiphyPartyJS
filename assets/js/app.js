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
        btn.remove();
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
    });
}

const displayGiphs = idName =>{

}

const toggleGif = () => {

}