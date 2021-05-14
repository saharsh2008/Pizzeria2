var menu_list_array = ["Tandoori Pizza",
                       "Cheese Pizza",
                       "Chicken Pizza",
                       "Veggie Supreme",
                       "Paneer Tikka Pizza"];

function getMenu() {
    var htmldata;
    htmldata = "<ol class='menu_list'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + "<li>" + menu_list_array[i] + "</li>"
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata2;
    var item  = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata2 = "<section class = 'cards'>";
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata2 = htmldata2 + "<div class = 'cards'>" + "<img src = 'pizzaImg.png'>" + menu_list_array[i] + "</div>";
    }
    htmldata2 = htmldata2 + "</section>";
    document.getElementById("display_addedmenu").innerHTML = htmldata2;
}