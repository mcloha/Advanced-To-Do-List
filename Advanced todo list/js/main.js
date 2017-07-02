$(function(){
    /*Declorations*/
    var i=0;
    $('#list').html(localStorage['list']);
    function getColor() {
                return '#' + Math.random().toString(16).slice(2, 8);
    }
    
    function addRow(){
        $('#list').append('<li id="item' + i + '">' + $('#task').val() + '</li>');
        $('#task').val('');
        /*Text Color Change*/
        $('#item' + i + '').css('color', getColor());
        i++;
    }
    
    /*Submit button event*/
    $('#submit').click(function(){
        if($('#task').val()){
           addRow();
            /*Saving tha change to local storage*/
            localStorage['list'] = $('ul').html();
        }
    });
    
    /*Keypress event with ENTER*/
    $(window).keypress(function (e){ 
        if(e.keyCode === 13){
                if($('#task').val()){
                    addRow();
                    /*Saving tha change to local storage*/
                    localStorage['list'] = $('ul').html();
                }
        }
    })
    
    /*Delete Item*/
    $('#list').click(function(){
       $('li:hover').remove(); 
        localStorage['list'] = $('#list').html();
    });
    
});