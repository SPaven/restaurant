// http://www.mkyong.com/jquery/how-to-use-css-and-jquery-to-hide-and-show-tab-content/
// http://inspirationalpixels.com/tutorials/creating-tabs-with-html-css-and-jquery
// http://demos.inspirationalpixels.com/Tabs-with-HTML-CSS-&-jQuery/

$(document).ready(function() {
    $('.tabs .tabLinks a').on('click', function(event)  {
        event.preventDefault();
        
        //Display tab content jQuery selector
        var activeTab = $(this).attr('href');
        
        // Show/hide 
        $('.tabs ' + activeTab).show().siblings().hide();
        
        // Change/remove current tab to active
        
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });    
    
    $(".header").prepend("<h1>Coding Cafe</h1>");
    $("#home").append("<img class='roundedImage' src='http://seedcuisine.com.au/poppop/wp-content/uploads/2012/07/IMG_2-1-960x420.jpg' width='950'>");
    $("#home").append("<p>Looking for the perfect mid-week dinner and want to try something new? Seed Cuisine is offering some amazing new Spring offers: TUESDAY: Choose any 2 mains at $30 per person (minimum 2 people) and receive a complimentary bottle of selected wine to enjoy. THURSDAY: Order the chef’s choice of 4 starters at $30 per person (minimum 2 people) and receive a complimentary bottle of selected wine to enjoy. *Maximum of 6 people. Seed's menu favourites are also available on these nights so get in quick!</p>");   
});
