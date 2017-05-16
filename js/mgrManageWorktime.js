$(function(){
    
    
    
    $('#em_ul li').on('click',function(){
        var id=$(this).attr('id');
        if(!$(this).hasClass('em_li_sel')){
            $(this).addClass('em_li_sel').parent().siblings().find('li').removeClass('em_li_sel');
        }
        
    });
});