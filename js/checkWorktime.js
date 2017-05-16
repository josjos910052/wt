$(function(){
    make_checkbox_value();
    sel_all_checkbox();
    check_ckeckbox();
    
    $('#content_div table .checkbox').change(function(){
        check_ckeckbox();
    });
    
    //打開詳細
    $('.detial_btn').on('click',function(){
       var $this_tr=$(this).parent().parent();
        $this_tr.addClass('sel').siblings().removeClass('sel');
        
        var id=$this_tr.find('.checkbox').val();
        
        var src='checkWorktimeDetail.html?id='+id;
        $('#cover_div iframe').attr('src',src);
        $('#cover_div').stop().fadeIn(300);
    });
    
    $('#m_wt_btn_div input').on('click',function(){
        if(confirm('確定通過?')){
            var all_checked=$('#content_div tbody .checkbox:checked').parent().parent().remove();
            $(this).submit();
        }
    })
    
    //關閉cover_div
    $('#cover_div').on('click',function(){
        $(this).stop().fadeOut(300).hide(0);
    });
    
    
});


//全選/取消全選
function sel_all_checkbox(){
   $('#content_div thead .checkbox').on('click',function(){
      var $all_checkbox=$('#content_div tbody td .checkbox');
      if($(this).prop('checked')){
          $all_checkbox.prop('checked',true);
          $('#m_wt_btn_div input').prop('disabled',false);
      }else{
          $all_checkbox.prop('checked',false);
          $('#m_wt_btn_div input').prop('disabled',true);
      }
   });
}

//確定有鉤子
function check_ckeckbox(){    
    $('#m_wt_btn_div input').prop('disabled',true);
        if($('#content_div tbody .checkbox:checked').length>0){
        $('#m_wt_btn_div input').prop('disabled',false);
    }
}

//製造checkbox的值
function make_checkbox_value(){
    $('#content_div tbody .checkbox').each(function(){
       var id=$(this).parent().parent().find('td').eq(1).html().trim();
        $(this).val(id);
    });
}



