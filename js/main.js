$(function(){
    //測試區塊 非正是
    $('#test input').change(function(){
        var status=$(':input[name="s"]:checked').val(),
            sys_s=$(':input[name="sys"]:checked');
        var $employee=$('ul li[for_who="e"]'),
            $manager=$('ul li[for_who="m"]'),
            $admin=$('ul li[for_who="a"]');
        if(status=='e'){
            $employee.show();
            $manager.hide();
        }else{
            $manager.show();
            $employee.hide();
        }
        if(sys_s.length==1){
            $admin.show();
        }else{
            $admin.hide();
        }
    });
    
    var bar_height=$('#bar').height();
    $('#header_row_div').css({height:bar_height+'px'});
    $('#content_row_div').css({height:'calc(100% - '+bar_height+'px - 7px)'});
    
    
    main_menu_link();
   
    
    //個人訊息
    $('.info').on('click',function(e){
        var $info=$('#info');
        $info.attr('src',$('#person_li >a').attr('href'));
        
        
        $('#label_cancel_personInfo').stop().fadeIn(500).show(1); 
        $('#personInfo').stop().show();
       // getPersonInfo("abc");
        
    });
    
    if($(window).width()<480){
       $('.navbar a').on('click', function(){
          $(this).closest('.navbar-toggle').click();
    });
}
    
    
});


//登入選單
function main_menu_link(){
    var $ifram=$('#main_ifram');
    
    //首頁
    $('#home_a').on('click',function(){
        $('#main_row_div,#first_bar').show();
        $('#content_row_div,#bar').hide();
    });
    //變更密碼
    $('.change_pw_li').on('click',function(){
        $ifram.attr('src',$('#changePwd >a').attr('href'));
        show_ifram();
    });
    //填寫工時
    $('.w_wt_li').on('click',function(){
        $ifram.attr('src',$('#writeWorktime >a').attr('href'));
        show_ifram();
    });
    //員工工時查詢
    $('.em_s_wt_li').on('click',function(){
        $ifram.attr('src',$('#searchEmpWorktime >a').attr('href'));
        show_ifram();
    });
    //主管查詢
    $('.m_s_wt_li').on('click',function(){
        $ifram.attr('src',$('#mgrSearch >a').attr('href'));
        show_ifram();
    });
    //工時審核
    $('.m_wt_li').on('click',function(){
        $ifram.attr('src',$('#checkWorktime >a').attr('href'));
        show_ifram();
    });
    //假日維護
    $('.hd_li').on('click',function(){
        $ifram.attr('src',$('#holidayMaintain >a').attr('href'));
        show_ifram();
    });
    //員工管理
    $('.e_manage_li').on('click',function(){
        $ifram.attr('src',$('#empManage >a').attr('href'));
        show_ifram();
    });

}

function show_ifram(){
    $('#main_row_div,#first_bar').hide();
    $('#content_row_div,#bar').show();
}

