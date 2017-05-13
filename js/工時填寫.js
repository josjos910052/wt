$(function(){
    checkStatus();
    addProject();
    
    //加送出
    submit_data();
    
    //　　縮放　詳細工時區塊
    $('.worktime_data_li').on('click',function(){
        var $detail=$(this).find('.wt_detail');
        
        if($detail.css('display')=='none'){
            $detail.stop().fadeIn(500).show();
            $(this).css({
                height:'calc(1.5rem + 1.5rem + 3rem*3 + 3rem )' 
            });
        }else{
            $(this).css({
                height:'1.5rem' 
            });
            $detail.stop().fadeOut(500).hide(0);
        }
        
        
    });
    
    // wt_detail防止
    $('.wt_detail').on('click',function(e){
       e.stopPropagation();
    });
    
    
    
});


//檢查狀態
function checkStatus(){
    var $data=$('.worktime_data_li');
    $data.each(function(){
        var $span=$(this).find('div>div>span').eq(0);
        var status=$span.text();
        if('待審'==status){
            $span.addClass('pending');
            $(this).find('*').prop('disabled',true);
            $(this).find('.w_wt_btn_div').hide();
        }else if('未通過'==status){
            $span.addClass('not_ok');
        }else{
            $span.addClass('not_submit');
        }
    });
}


//新增專案
function addProject(){
    $('.w_wt_btn_add').on('click',function(){
       var $header=$(this).parent().parent().siblings();
        var project="<tr><td><input type='text'></td><td colspan='3'><textarea></textarea></td>";
        $header.find('.wt_header_time').each(function(){
            if($(this).hasClass('holiday')){
                var hd_time=$(this).attr('hd_time');
                if(hd_time==null){
                    project+="<td class='holiday'></td>";
                }else{
                    var max_time=parseInt(8-hd_time);
                    if(max_time<0)
                        max_time=0
                    project+="<td class='holiday'>"+
                            "<input type='number' max='"+max_time+"'  min='0' placeholder='平常'>"+
                                "<input type='number' max='4' min='0' placeholder='加班'></td>";
                }
            }else{
                project+="<td><input type='number' max='8' min='0' placeholder='平常'><input type='number' max='4' min='0' placeholder='加班'></td>";
            } 
        });
        project+="</tr>";
        $(this).parent().siblings().find('table tr').last().after(project);
    });
}

//假送出
function submit_data(){
     $('.w_wt_btn_save').on('click',function(){
         $header=$(this).parent().parent().siblings('.wt_header_div');
        var date=$header.find('span').first().text();
         alert(date+" 工時已經暫存!");
     });
    $('.w_wt_btn_submit').on('click',function(){
        var $header=$(this).parent().parent().siblings('.wt_header_div');
        var date=$header.find('span').first().text();
        $header.find('span').eq(1).text('待審');
        alert(date+" 工時已經提交!");
        checkStatus();
     });
}