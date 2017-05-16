$(function(){
    var year=$('#m_s_wt_month').val().split('-')[0];
    //搜尋
    
    
    //打開子畫面(詳細工時)
    $('#wt_div table input').on('click',function(){
       var $this_tr=$(this).parent().parent();
        var first_day=$this_tr.find('span').eq(0),
            id=$this_tr.find('td').eq('1').html().trim();
        var a=first_day.text().split('/');
        var month=parseInt(a[0]),
            day=parseInt(a[1]);
        //選擇的該筆顏色
        $this_tr.addClass('select').siblings().removeClass('select');
        
        var date=year+'-'+month+'-'+day;
        
        //src要改
        var src='detailWorktime.html?date='+date+'&id='+id;
        
        $('#cover_div iframe').attr('src',src);
        $('#cover_div').stop().fadeIn(300);
    });
    $('#cover_div').on('click',function(){
        $(this).stop().fadeOut(300).hide(0);
    })
});