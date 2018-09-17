<%@ page language="java" import="java.util.*,com.security.model.UserInfo,com.security.model.RoleInfo"  pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
UserInfo userinfo = (UserInfo)session.getAttribute("LOGINUSER");
String thisusername =null;
String thisuserrole =null;
thisusername = userinfo.getUsername().toString();
thisuserrole = userinfo.getRoleInfo().getRolename().toString();
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 	<!-- <link rel="stylesheet" href="css/equipmentlist.css"> -->
  <!-- <link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/assets/logins/css/init.css"> -->
 	<link rel="stylesheet" href="<%=request.getContextPath()%>/css/equipmentlist2.css">
    <!--  begin by harda_way -->
  <link href="<%=request.getContextPath()%>/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
   <link href="<%=request.getContextPath()%>/assets/vendor/jedate/skin/jedate.css" rel="stylesheet"/>

    <!-- Loading CSS -->
    <link rel="stylesheet"  href="<%=request.getContextPath()%>/assets/loading/dist/css-loader.css" />
    <link rel="stylesheet"  href="<%=request.getContextPath()%>/assets/loading/dist/loader-ball.css" />
    <!-- end: CSS file-->
    <link rel="stylesheet"  href="<%=request.getContextPath()%>/css/inputholderstyle.css" />
    <link rel="stylesheet"  href="<%=request.getContextPath()%>/assets/css/y.alert.css" />
    <link rel="stylesheet"  href="<%=request.getContextPath()%>/assets/css/font-awesome.min.css" />
<%--
	<link rel="stylesheet" type="text/css"
          href="<%=request.getContextPath()%>/css/dataTables.bootstrap.css"/>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/jquery-ui-1.10.3.custom.min.css"/> --%>
    <!--  end by harda_way -->
	<script src="<%=request.getContextPath()%>/d3.v3/d3.v3.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/function.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/assets/js/y.confirm.js"></script>
  <script type="text/javascript" src="<%=request.getContextPath()%>/assets/js/y.alert.js"></script>
	<!-- <script type="text/javascript" src="<%=request.getContextPath()%>/js/preloader.js"></script> -->
    <!-- <script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script> -->
    <!-- <script type="text/javascript" src="<%=request.getContextPath()%>/js/app.js"></script> -->
    <!-- <script type="text/javascript" src="<%=request.getContextPath()%>/js/main.js"></script> -->
<style type="text/css">
.box {
	height:640px;
	width: 100%;
	margin-top: 0px;
  margin-left: 0px;
	padding-left: 35px;
  padding-right: 35px;
}
.guid{
	bottom:100px;
}
.manage_title{
	top:10px;
}
.middlebox {
	boder-left:100px!important;
}
#content1 {
min-height: 0!important;
height:850px!important;
}

.table th, .table td {
text-align: center;
vertical-align: middle!important;
}

button .changeeditcss {
  color: gray;
}
tbody {
  font-size: 12px;
  font-family: "Open Sans", Arial, sans-serif;
}
.jedatebox {
  width: 275px;
}
/*tr td {
  font-size: 16px;
}*/
.chosepage input {
font-size: 12px;
font-weight: 400;
line-height: 18px;
/*display: block;*/
/*padding-left: 5px;*/
border: 2px solid #ebe6e2;
outline:medium;
border-radius:3px;
height:18px;
width: 30px;
margin-left: 5px;
margin-right: 5px;
text-align: center;
}
#span3 {
  padding-left: 20px;
}

/*用于选择查看设备图片*/
#Equipmentphoto {
      display:none;
      /*border:2px solid #1abc9c;*/
      border:2px solid #d7dce0;
      border-radius: 4px;
      height:45%;
      width:45%;
      position:absolute;/*让节点脱离文档流,我的理解就是,从页面上浮出来,不再按照文档其它内容布局*/
      top:24%;/*节点脱离了文档流,如果设置位置需要用top和left,right,bottom定位*/
      left:30%;
      z-index:2;/*层级关系,由于这个节点要在顶部显示,所以这个值比其余节点的都大*/
      background: #D7dce0;
      overflow: auto;
}
#Equipmentphotoover {
      width: 100%;
      height: 100%;
      opacity:0.8;/*设置背景色透明度,1为完全不透明,IE需要使用filter:alpha(opacity=80);*/
      filter:alpha(opacity=80);
      display: none;
      position:absolute;
      top:0;
      left:0;
      z-index:1;
      background: silver;
}

.equippic {
  width: 350px;
  height: 200px;
  margin: 0 auto;
}
.outsidepic{
  margin: 15px auto;
  margin-left: 15px;
  text-align: center;
}

#closephoto {
  display: block;
  float: right;
  margin-right: 20px;
  margin-top: 10px;
  text-align: center;
}


/*上传图片样式美化*/
/*a  upload */
.a-upload {
    /*padding: 2px 5px;*/
    /*padding-left: 30px;*/
    height: 30px;
    width:230px;
    min-width: 200px;
    line-height: 30px;
    position: relative;
    cursor: pointer;
    color: #888;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    *display: inline;
    *zoom: 1
}

.a-upload  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
}

.a-upload:hover {
    color: #444;
    background: #eee;
    border-color: #ccc;
    text-decoration: none
}

.choosepic {
  width: 460px;
  min-width: 450px;
  margin: 0px auto;
  text-align: center;
}

</style>
<body>

<!-- start loading -->
    <div id="loader-ballme" class="wrapp">
      <div class="load-3">
      <p>正在加载数据......</p>
        <div class="k-line k-line6b-1" ></div>
        <div class="k-line k-line6b-2" ></div>
        <div class="k-line k-line6b-3" ></div>
        <div class="k-line k-line6b-4" ></div>
        <div class="k-line k-line6b-5" ></div>
      </div>
    </div>
<!-- end loading -->


<div class="box">
		<div id="dateform">
			<div class="my_input">
				<input required='' name="search" type="text" onkeydown="if(event.keyCode==13) {searchdata();$(this).blur();}"  style="padding-left: 15px;" id="filtertxt">
         <label alt='请输入设备ID或名称进行搜索 ......' placeholder='搜索内容' for="search"></label>
			</div>
      <input class="btn btn-success" type="button" id="ss" value="搜索" onclick="searchdata()"  style="margin-left: 30px;width: 94px;font-size:13px!important;line-height: 1!important;" />
      <input class="btn btn-primary" type="button" id="addequipment" onclick="showadd()" value="添加" style="margin-left: 40px;width: 94px;font-size:13px!important;line-height: 1!important;" />
		</div>

      <div class="middlebox" style="width:100%">
			<table id="test1" style="display: none" frame="void" cellspacing="0" cellpadding="10"	border="0px" class="table table-bordered table-striped table-hover">
				<tbody>
					<tr style="height:40px;background:#e6e6fa;">
						<th width="5%">ID</th>
						<th width="8%">设备名称</th>
						<th width="5%">设备编号</th>
            <th width="10%">制造商</th>
            <th width="12%">上次检修日期</th>
            <th width="8%">设备状态</th>
            <th width="12%">采购日期</th>
            <th width="8%">返修次数</th>
            <th width="10%">产线位置</th>
            <th width="10%">图片预览</th>
						<th width="15%">操作</th>
					</tr>
			    <tr id="dele" class="del bg1">
						<td align="center"></td>
						<td align="center"></td>
						<td align="center"></td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center"></td>
            <td align="center"></td>
						<td align="center"></td>
					</tr>
        </tbody>
			</table>
			<div class="guid">
				共<font class="fore" id="totalnum">0</font> 条记录 (<font id="currentpage" class="fore">0</font>/<font id="totalpage">0</font>)
				 <font class="next"><a class="homepage" id="homepage" style="color: #143861;" href="javascript:location.reload();">[首页]</a></font>
	<!-- 			  <font class="next">[上页]</font>
				   <font class="next">[下页]</font> -->
				 <span id="span1"><a class="next beforepage" href="javascript:void(0)" id="beforepage">[上页]</a></span>
 				 <span id="span2"> <a class="fore nextpage" href="javascript:void(0)" id="nextpage">[下页]</a> </span>
         <span id="span3" class="chosepage" >跳转到第<input id="choosepage" onkeydown="if(event.keyCode==13) {jumppage();$(this).blur();}"></input>页(共<font id="totalpages">0</font>页)</span>
				 <!-- <a class="fore" href="Capability/addEquipment.jsp">[添加人员]</a> -->
			</div>
      <div class="modal fade" id="mymodal-sm-backdrop">
        <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                          aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">新增</h4>
              </div>
              <div class="modal-body">
                  <div class="form-group">
                      <input required='' name="name" type="text" class="form-control" id="equipmentName">
                      <label alt='请输入设备名称' placeholder='设备名称' for="name"></label>
                  </div>
                  <div class="form-group">
                      <input required='' name="equno" type="text" class="form-control" id="equNo">
                      <label alt='请输入设备编号' placeholder='设备编号' for="equno"></label>
                  </div>
                  <div class="form-group">
                      <input required='' name="manufacturer" type="text" class="form-control" id="manufacturer">
                      <label alt='请输入制造商' placeholder='制造商' for="manufacturer"></label>
                  </div>
                  <div class="form-group">

                      <input required='' name="lastOverhaulTime" type="datetime" class="form-control" id="lastOverhaulTime" onclick="$.jeDate('#lastOverhaulTime',{insTrigger:false,skinCell:'jedateblue',maxDate: $.nowDate(0),isTime:true,format:'YYYY-MM-DD hh:mm:ss'})">
                      <label alt='请输入上次检修日期' placeholder='上次检修日期' for="lastOverhaulTime"></label>
                  </div>
                  <div class="form-group">
                      <input required='' name="status" type="text" class="form-control" id="status">
                      <label alt='请输入设备状态' placeholder='设备状态' for="status"></label>
                  </div>
                   <div class="form-group">

                      <input required='' name="purchaseTime" type="datetime" class="form-control" id="purchaseTime" onclick="$.jeDate('#purchaseTime',{insTrigger:false,skinCell:'jedateblue',maxDate: $.nowDate(0),isTime:true,format:'YYYY-MM-DD hh:mm:ss'})">
                      <label alt='请输入采购日期' placeholder='采购日期' for="purchaseTime"></label>
                  </div>
                   <div class="form-group">
                      <input required='' name="repairTimes" type="text" class="form-control" id="repairTimes">
                      <label alt='请输入返修次数' placeholder='返修次数' for="repairTimes"></label>
                  </div>
                  <div class="form-group">
                      <input required='' name="location" type="text" class="form-control" id="lineLocation" >
                      <label alt='请输入产线位置' placeholder='产线位置' for="location"></label>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="savenewprocess">保存</button>
                      <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                  </div>
              </div>
          </div>
       </div>
      </div>
      <!-- End mymodal-sm-backdrop -->
      <div class="modal fade" id="mymodal-sm-edit">
        <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                          aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModaleditLabel">修改</h4>
              </div>
              <div class="modal-body">
                   <div class="form-group">
                      <input required='' name="editname" type="text" class="form-control" id="editequipmentName">
                      <label alt='请输入设备名称' placeholder='设备名称' for="editname"></label>
                  </div>
                  <div class="form-group">
                      <input required='' type="text" class="form-control" id="editequNo" name="editequNo">
                      <label alt='请输入设备编号' placeholder='设备编号' for="editequNo"></label>
                  </div>
                  <div class="form-group">
                      <input required='' name="editmanufacturer" type="text" class="form-control" id="editmanufacturer">
                      <label alt='请输入制造商' placeholder='制造商' for="editmanufacturer"></label>
                  </div>
                  <div class="form-group">
                  <input required='' name="editlastOverhaulTime" type="datetime" class="form-control" id="editlastOverhaulTime" onclick="$.jeDate('#editlastOverhaulTime',{insTrigger:false,skinCell:'jedateblue',maxDate: $.nowDate(0),isTime:true,format:'YYYY-MM-DD hh:mm:ss'})">
                    <label alt='请输入上次检修日期' placeholder='上次检修日期' for="editlastOverhaulTime"></label>
                  </div>
                  <div class="form-group">
                      <input required='' name="editstatus" type="text" class="form-control" id="editstatus">
                      <label alt='请输入设备状态' placeholder='设备状态' for="editstatus"></label>
                  </div>
                   <div class="form-group">
                      <input required='' name="editpurchaseTime" type="datetime" class="form-control" id="editpurchaseTime" onclick="$.jeDate('#editpurchaseTime',{insTrigger:false,skinCell:'jedateblue',maxDate: $.nowDate(0),isTime:true,format:'YYYY-MM-DD hh:mm:ss'})">
                      <label alt='请输入采购日期' placeholder='采购日期' for="editpurchaseTime"></label>
                  </div>
                   <div class="form-group">
                      <input required='' name="editrepairTimes" type="text" class="form-control" id="editrepairTimes">
                      <label alt='请输入返修次数' placeholder='返修次数' for="editrepairTimes"></label>
                  </div>
                  <div class="form-group">
                      <input required='' name="editlocation" type="text" class="form-control" id="editlineLocation" >
                      <label alt='请输入产线位置' placeholder='产线位置' for="editlocation"></label>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-primary" id="saveeditprocess">保存</button>
                      <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                  </div>
              </div>
          </div>
       </div>
      </div>
      <!-- End mymodal-sm-edit -->

      <!-- Start show EquipmentPhoto -->
      <div id="Equipmentphoto">
          <a id="closephoto" href="javascript:hideequippic()">关闭</a>
          <div>
          <div class="outsidepic">
            <img class="equippic" id="magimg" src="<%=request.getContextPath()%>/img/1494335908618.jpg" onerror="imgError(this);" />
          </div>
          <div class="choosepic">
          <font style="font-size:16px;font-weight: bold;line-height:30px;margin-left: 5px;float: left;">更改图片:&nbsp;&nbsp;</font>
          <div style="display: inline;float: left;margin-left: 10px;">
          <a href="javascript:;" class="a-upload"><input id="btn_file" style="margin-top:2px;width: 180px;height: 30px;display: inline;" name="btn_file" value="选择图片" onchange="selectImage(this);" accept="image/png, image/jpg, image/gif" type="file">选择设备图片</a>
          </div>
          <!-- <a href="javascript:;" class="file">选择图片 <input type="file" name="" id=""></a> -->
          <input type="button" value="上传" style="background-color: #1abc9c;color: #fff;font-weight: bold;border-radius: 6px;width: 100px;height: 30px;display: inline;margin-left: 20px;" id="uploadbutton" onclick="uploadImage();">
        </div>
          </div>
      </div>
      <div id="Equipmentphotoover"></div>
      <!-- End show EquipmentPhoto -->




		</div>
</div>
      <!--  begin by harda_way -->
 <script type="text/javascript"
            src="<%=request.getContextPath()%>/js/jquery-1.8.2.min.js"></script>
 <script src="<%=request.getContextPath()%>/js/bootstrap.min.js"></script>
<!-- <script src="<%=request.getContextPath()%>/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" language="javascript" src="<%=request.getContextPath()%>/js/dataTables.bootstrap.js"></script> -->
<script src="<%=request.getContextPath()%>/js/handlebars-v3.0.1.js"></script>
<script src="<%=request.getContextPath()%>/assets/vendor/jedate/jquery.jedate.min.js"></script>
    <!--  end by harda_way -->

<!-- Start Image Upload -->
<script src="<%=request.getContextPath()%>/js/ajaxfileupload.js"></script>
<!-- End by Skylinebin -->


<script type="text/javascript">
  var PageUserRole = "<%=thisuserrole%>";
   var table;
    var editFlag = false;
    var tempid;
    var tempequId;
    $(function () {
        $('#nextpage').bind('click', fornextpage);
        $('#beforepage').bind('click', forbeforepage);
         $.ajax({
           url:"findEquipmentInfoForDatatables",
           type:"GET",
           data:{
               "draw":1,
               "start":0,
               "length":8,
               "search[value]":"",
               "order[0][column]":"0",
               "order[0][dir]":"asc",
           },
            success:function(objects){
                var objsuccess = objects.success;
                var objmessage = objects.message;
                if(objsuccess){
                      var totalnum = objects.recordsTotal;
                      $("#totalnum").html(totalnum);
                      var totalpage= Math.ceil(totalnum/8);
                      $("#totalpage").html(totalpage);
                      $("#currentpage").html("1");
                      $("#totalpages").html(totalpage);
                      $("#choosepage").val("1");
                      currentpage=1;
                    if (currentpage>1)
                      {
                      	$("#beforepage").removeClass("next");
                      	$("#beforepage").addClass("fore");
                      	$("#beforepage").unbind('click').bind('click',forbeforepage);
                      }
                    else
                    {
                      	$("#beforepage").removeClass("fore");
                      	$("#beforepage").addClass("next");
                      	$("#beforepage").unbind('click');
                    }
                    if (currentpage<totalpage)
                      {
                      	$("#nextpage").removeClass("next");
                      	$("#nextpage").addClass("fore");
                      	$("#nextpage").unbind('click').bind('click',fornextpage);
                      }
                    else
                    {
                       $("#nextpage").removeClass("fore");
                  	   $("#nextpage").addClass("next");
                    	 $("#nextpage").unbind('click');
                    }
        					var tr = $("#dele");
                  var obj = objects.data;
                  $.each(obj, function(index,item){
                  var   clonedTr = tr.clone();
                  var  index = index;
                 clonedTr.removeClass("del");
                 clonedTr.addClass("data");
                //循环遍历cloneTr的每一个td元素，并赋值
                clonedTr.children("td").each(function(inner_index){
                    switch(inner_index){
                      case(0):
                       $(this).html(item.equipmentId);
                        break;
                        case(1):
                        $(this).html(item.equipmentName);
                        break;
                        case(2):
                        $(this).html(item.equNo);
                        break;
                        case(3):
                        $(this).html(item.manufacturer);
                        break;
                        case(4):
                        $(this).html(changtime(item.lastOverhaulTime));
                        break;
                        case(5):
                        $(this).html(item.status);
                        break;
                        case(6):
                        $(this).html(changtime(item.purchaseTime));
                        break;
                         case(7):
                        $(this).html(item.repairTimes);
                        break;
                         case(8):
                        $(this).html(item.lineLocation);
                        break;
                       case(9):
                       $(this).html('<button type="button" class="btn btn-xs btn-primary"  onclick=showequippic('+'"'+item.equNo+'","'+item.imagePath+'")>预览照片</button>');
                        break;
                       case(10):
                       $(this).html('<button type="button" class="btn btn-xs btn-danger" onclick=del('+item.equipmentId+')><span title="删除" class="glyphicon glyphicon-trash"></span></button>'+'&nbsp;&nbsp;<button type="button" class="btn btn-xs btn-info" onclick=editEquipment('+item.equipmentId+',"'+item.equipmentName+'","'+item.equNo+'","'+item.manufacturer+'","'+changtime(item.lastOverhaulTime).replace(/[ ]/g, "*")+'","'+item.status+'","'+changtime(item.purchaseTime).replace(/[ ]/g, "*")+'","'+item.repairTimes+'","'+item.lineLocation+'") > <span title="修改" class="glyphicon glyphicon-pencil"></span></button>');
                         break;
                      }//end switch
                  });//end children.each
              //把克隆好的tr追加原来的tr后面
              clonedTr.insertBefore(tr);
            });//end $each
            $(".del").css('display','none');
            //$("#dele").hide();//隐藏id=clone的tr，因为该tr中的td没有数据，不隐藏起来会在生成的table第一行显示一个空行
            $("#test1").show();

            $('#loader-ballme').hide();
       }else{
          alertMsg(objmessage);
          $('#loader-ballme').hide();
          $("#test1").show();

      }
      //end success
   },error:function() {
     alertMsg("操作失败，请与管理人员联系!");
   }
    })//end ajax
    });
      function del(equipmentId){
        if(PageUserRole != '普通用户'){
            Ewin.confirm({ message: "您确定要删除此设备信息?" }).on(function (e){
             $.ajax({
               url:"deleteEquipment",
               data:{
               "equipmentId":equipmentId
               },
               success:function(data) {
                 if(data.success){
                    alertMsg("删除成功");
                    setTimeout(function(){
                      location.reload();
                        },1000);
                  }
                 else{
                    alertMsg(data.message);
                 };
                 console.log(data);
                 console.log(data.status);
               },error:function (){
                  alertMsg("删除失败");
               }
             })
             });
          }else {
              alertMsg('当前登录用户无此操作权限!');
          }
           };

      function clear() {
        $("#equipmentName").val('');
        $("#equNo").val('');
        $("#manufacturer").val('');
        $("#lastOverhaulTime").val('');
        $("#status").val('');
        $("#purchaseTime").val('');
        $("#repairTimes").val('');
        $("#lineLocation").val('');
      }
      function showadd(){
        if(PageUserRole != '普通用户'){
          $("#mymodal-sm-backdrop").modal("show");
        }else{
            alertMsg('当前登录用户无此操作权限!');
        }
      }
          $("#savenewprocess").click(function(){
              Ewin.confirm({ message: "您确定要添加此设备信息?" }).on(function (e){
                var addJson = {
                "equipmentName": $("#equipmentName").val(),
                "equNo": $("#equNo").val(),
                "manufacturer": $("#manufacturer").val(),
                "lastOverhaulTime": $("#lastOverhaulTime").val(),
                "status": $("#status").val(),
                "purchaseTime": $("#purchaseTime").val(),
                "repairTimes": $("#repairTimes").val(),
                "lineLocation": $("#lineLocation").val()
                };
                $.ajax({
                    url:"addEquipment",
                    data: {
                        "equipmentName": $("#equipmentName").val(),
                        "equNo": $("#equNo").val(),
                        "manufacturer": $("#manufacturer").val(),
                        "lastOverhaulTime": $("#lastOverhaulTime").val(),
                        "status": $("#status").val(),
                        "purchaseTime": $("#purchaseTime").val(),
                        "repairTimes": $("#repairTimes").val(),
                        "lineLocation": $("#lineLocation").val()
                    }, success: function (objects) {
                      var objsuccess = objects.success;
                      var objmessage = objects.message;
                      if(objsuccess){
                        $("#mymodal-sm-backdrop").modal("hide");
                          $('#nextpage').bind('click', fornextpage);
                          $('#beforepage').bind('click', forbeforepage);
                          alertMsg("添加成功");
                          clear();
                          setTimeout(function(){
                      location.reload();
                        },1000);
                    }else{
                        alertMsg(objmessage);
                        console.log(objmessage);
                    }
            },error:function(xmle){
                       $("#mymodal-sm-backdrop").modal("hide");
                        alertMsg("异常：操作失败！");
                      }
              });
          });
          });//end click newaddprocess
      function showedit(){
        $("#mymodal-sm-edit").modal("show");
      };
      function editEquipment(equipmentId,equipmentName,equNo,manufacturer,lastOverhaulTime,status,purchaseTime,repairTimes,lineLocation){
        tempid = equipmentId;
        $("#editequipmentName").val(equipmentName);
        $("#editequNo").val(equNo).attr("disabled",true);
        $("#editmanufacturer").val(manufacturer);
        $("#editlastOverhaulTime").val(lastOverhaulTime.replace(/[*]/g, " "));
        $("#editstatus").val(status);
        $("#editpurchaseTime").val(purchaseTime.replace(/[*]/g, " "));
        $("#editrepairTimes").val(repairTimes);
        $("#editlineLocation").val(lineLocation);
        if(PageUserRole != '普通用户'){
          $("#mymodal-sm-edit").modal("show");
        }else{
            alertMsg('当前登录用户无此操作权限!');
        }
      };
          $("#saveeditprocess").click(function(){
              Ewin.confirm({ message: "您确定要更改此设备信息?" }).on(function (e){
                var addJson = {
                    "equipmentId": tempid,
                    "equipmentName": $("#editequipmentName").val(),
                    "equNo": $("#editequNo").val(),
                    "manufacturer": $("#editmanufacturer").val(),
                    "lastOverhaulTime": $("#editlastOverhaulTime").val(),
                    "status": $("#editstatus").val(),
                    "purchaseTime": $("#editpurchaseTime").val(),
                    "repairTimes": $("#editrepairTimes").val(),
                    "lineLocation": $("#editlineLocation").val()
                };
                $.ajax({
                    url:"updateEquipment",
                    data: {
                        "equipmentId": tempid,
                        "equipmentName": $("#editequipmentName").val(),
                        "equNo": $("#editequNo").val(),
                        "manufacturer": $("#editmanufacturer").val(),
                        "lastOverhaulTime": $("#editlastOverhaulTime").val(),
                        "status": $("#editstatus").val(),
                        "purchaseTime": $("#editpurchaseTime").val(),
                        "repairTimes": $("#editrepairTimes").val(),
                        "lineLocation": $("#editlineLocation").val()
                    }, success: function (objects) {
                      var objsuccess = objects.success;
                      var objmessage = objects.message;
                      if(objsuccess){
                        $("#mymodal-sm-edit").modal("hide");
                        $('#nextpage').bind('click', fornextpage);
                        $('#beforepage').bind('click', forbeforepage);
                        console.log(objmessage);
                        alertMsg("修改成功");
                        setTimeout(function(){
                      location.reload();
                        },1000);
                    }else{
                        alertMsg(objmessage);
                        console.log(objmessage);
                    }
            },error:function(xmle){
                       $("#mymodal-sm-edit").modal("hide");
                        alertMsg("异常：修改失败！");
                  }
              })
          });
          });//end click saveeditprocess

           function searchdata(){
           clear();
           var search= $("#filtertxt").val();
           console.log(search);
           $.ajax({
           url:"findEquipmentInfoForDatatables",
           type:"GET",
           data:{
           "draw":1,
           "start":0,
           "length":8,
           "search[value]":search,
           "order[0][column]":"0",
           "order[0][dir]":"asc",
           },
            success:function(objects){
              var objsuccess = objects.success;
              var objmessage = objects.message;
              if(objsuccess){
                  var totalnum = objects.recordsFiltered;
                  $("#totalnum").html(totalnum);
                  var totalpage= Math.ceil(totalnum/8);
                  $("#totalpage").html(totalpage);
                  $("#currentpage").html("1");
                  $("#totalpages").html(totalpage);
                  $("#choosepage").val("1");
                  var tr = $("#dele");
                  var obj = objects.data;
                 var currentpage=1;
                  if (currentpage>1)
                    {
                    	$("#beforepage").removeClass("next");
                    	$("#beforepage").addClass("fore");
                    	$("#beforepage").unbind('click').bind('click',forbeforepage);
                    }
                  else
                  {
                    	$("#beforepage").removeClass("fore");
                    	$("#beforepage").addClass("next");
                    	$("#beforepage").unbind('click');
                  }
                  if (currentpage<totalpage)
                    {
                    	$("#nextpage").removeClass("next");
                    	$("#nextpage").addClass("fore");
                    	$("#nextpage").unbind('click').bind('click',fornextpage);
                    }
                  else
                  {
                      $("#nextpage").removeClass("fore");
                  	  $("#nextpage").addClass("next");
                    	$("#nextpage").unbind('click');
                  }
                  $.each(obj, function(index,item){
                       //克隆tr，每次遍历都可以产生新的tr
                       var clonedTr = tr.clone();
                       var _index = index;
                       clonedTr.removeClass("del");
                       clonedTr.addClass("data");
                       //循环遍历cloneTr的每一个td元素，并赋值
                       clonedTr.children("td").each(function(inner_index){
                           //根据索引为每一个td赋值
                          switch(inner_index){
                             case(0):
                               $(this).html(item.equipmentId);
                                break;
                                case(1):
                                $(this).html(item.equipmentName);
                                break;
                                case(2):
                                $(this).html(item.equNo);
                                break;
                                case(3):
                                $(this).html(item.manufacturer);
                                break;
                                case(4):
                                $(this).html(changtime(item.lastOverhaulTime));
                                break;
                                case(5):
                                $(this).html(item.status);
                                break;
                                case(6):
                                $(this).html(changtime(item.purchaseTime));
                                break;
                                 case(7):
                                $(this).html(item.repairTimes);
                                break;
                                 case(8):
                                $(this).html(item.lineLocation);
                                break;
                               case(9):
                               $(this).html('<button type="button" class="btn btn-xs btn-primary" onclick="showequippic()">预览照片</button>');
                                break;
                               case(10):
                               $(this).html('<button type="button" class="btn btn-xs btn-danger" onclick=del('+item.equipmentId+')><span title="删除" class="glyphicon glyphicon-trash"></span></button>'+'&nbsp;&nbsp;<button type="button" class="btn btn-xs btn-info" onclick=editEquipment('+item.equipmentId+',"'+item.equipmentName+'","'+item.equNo+'","'+item.manufacturer+'","'+changtime(item.lastOverhaulTime).replace(/[ ]/g, "*")+'","'+item.status+'","'+changtime(item.purchaseTime).replace(/[ ]/g, "*")+'","'+item.repairTimes+'","'+item.lineLocation+'") > <span title="修改" class="glyphicon glyphicon-pencil"></span></button>');
                                 break;
                            }//end switch
                    });//end children.each
                    clonedTr.insertBefore(tr);
              });//end $each
          $(".del").hide();
          $("#test1").show();
    }else{
          alertMsg(objmessage);
          $("#test1").show();
      }
    },error :function() {
      alertMsg("操作失败，请与管理人员联系!");
      }
    })//end ajax
}//end searchdata


//跳转到输入框的页面
function jumppage(){
          var topage = $("#choosepage").val();
          // var totalpage = $("#totalpage").val();
          var totalpage = document.getElementById("totalpage").innerHTML;
          console.log(totalpage);
          // var totalpage = document.getElementById("totalpage").value;
          topage = parseInt(topage);
          console.log(topage+'and'+parseInt(totalpage));
          if(topage>0 && topage <= parseInt(totalpage)){
           clear();
           var search= $("#filtertxt").val();
           console.log(search);
           $.ajax({
           url:"findEquipmentInfoForDatatables",
           type:"GET",
           data:{
             "draw":1,
             "start":(topage-1)*8,
             "length":8,
             "search[value]":search,
             "order[0][column]":"0",
             "order[0][dir]":"asc",
           },
            success:function(objects){
            var objsuccess = objects.success;
            var objmessage = objects.message;
            if(objsuccess){
                      var totalnum = objects.recordsFiltered;
                      $("#totalnum").html(totalnum);
                      var totalpage= Math.ceil(totalnum/8);
                      allpages = totalpage;
                      $("#totalpage").html(totalpage);
                      $("#totalpages").html(totalpage);
                      // var currentpage = Number($("#currentpage").html())+Number(1);
                      var currentpage = Number(parseInt(topage));
                      // $("#currentpage").html(Number($("#currentpage").html())+Number(1));
                      $("#currentpage").html(Number(parseInt(topage)));
                      $("#choosepage").val(currentpage);
                      console.log(currentpage);
                  if (currentpage>1)
                    {
                      $("#beforepage").removeClass("next");
                      $("#beforepage").addClass("fore");
                      $("#beforepage").unbind('click').bind('click',forbeforepage);
                    }
                  else
                  {
                      $("#beforepage").removeClass("fore");
                      $("#beforepage").addClass("next");
                      $("#beforepage").unbind('click');
                  }
                  if (currentpage<totalpage)
                    {
                      $("#nextpage").removeClass("next");
                      $("#nextpage").addClass("fore");
                      $("#nextpage").unbind('click').bind('click',fornextpage);
                    }
                  else
                  {
                      $("#nextpage").removeClass("fore");
                      $("#nextpage").addClass("next");
                      $("#nextpage").unbind('click');
                  }

                  var tr = $("#dele");
                  var obj = objects.data;
              $.each(obj, function(index,item){
                     //克隆tr，每次遍历都可以产生新的tr
                     var clonedTr = tr.clone();
                     var _index = index;
                     clonedTr.removeClass("del");
                     clonedTr.addClass("data");
             //循环遍历cloneTr的每一个td元素，并赋值
                     clonedTr.children("td").each(function(inner_index){
                         //根据索引为每一个td赋值
                        switch(inner_index){
                             case(0):
                               $(this).html(item.equipmentId);
                                break;
                                case(1):
                                $(this).html(item.equipmentName);
                                break;
                                case(2):
                                $(this).html(item.equNo);
                                break;
                                case(3):
                                $(this).html(item.manufacturer);
                                break;
                                case(4):
                                $(this).html(changtime(item.lastOverhaulTime));
                                break;
                                case(5):
                                $(this).html(item.status);
                                break;
                                case(6):
                                $(this).html(changtime(item.purchaseTime));
                                break;
                                 case(7):
                                $(this).html(item.repairTimes);
                                break;
                                 case(8):
                                $(this).html(item.lineLocation);
                                break;
                               case(9):
                               $(this).html('<button type="button" class="btn btn-xs btn-primary" onclick="showequippic()">预览照片</button>');
                                break;
                               case(10):
                               $(this).html('<button type="button" class="btn btn-xs btn-danger" onclick=del('+item.equipmentId+')><span title="删除" class="glyphicon glyphicon-trash"></span></button>'+'&nbsp;&nbsp;<button type="button" class="btn btn-xs btn-info" onclick=editEquipment('+item.equipmentId+',"'+item.equipmentName+'","'+item.equNo+'","'+item.manufacturer+'","'+changtime(item.lastOverhaulTime).replace(/[ ]/g, "*")+'","'+item.status+'","'+changtime(item.purchaseTime).replace(/[ ]/g, "*")+'","'+item.repairTimes+'","'+item.lineLocation+'") > <span title="修改" class="glyphicon glyphicon-pencil"></span></button>');
                                 break;
                              }//end switch
                            });//end children.each
                      clonedTr.insertBefore(tr);
                });//end $each
      $(".del").hide();
      $("#test1").show();
    }else{
              alertMsg(objmessage);
              $("#test1").show();
          }
        },error :function() {
          alertMsg("操作失败，请与管理人员联系!");
          }
    })//end ajax
}else{
  alertMsg("不存在此页数请检查后重新输入!");
}

} //end jumppage

/**start by SkylineBin //可实现列出每一页码直接跳转
    //  document.getElementById("pagenum").innerHTML = "";
    // for (var i = 0; i < parseInt(totalpage); i++) {
    //   var para=document.createElement("font");
    //   var node=document.createTextNode((i+1));
    //   para.innerHTML="&nbsp;<a class='fore' href='javascript:void(0)' onclick='skippage("+(i+1)+")'>"+(i+1)+"</a>&nbsp;";
    //   var element=document.getElementById("pagenum");
    //   element.appendChild(para);
    // };
    **现已弃用
*/




  function fornextpage(){
           clear();
           var search= $("#filtertxt").val();
           console.log(search);
           $.ajax({
           url:"findEquipmentInfoForDatatables",
           type:"GET",
           data:{
             "draw":1,
             "start":$("#currentpage").html()*8,
             "length":8,
             "search[value]":search,
             "order[0][column]":"0",
             "order[0][dir]":"asc",
           },
            success:function(objects){
              var objsuccess = objects.success;
              var objmessage = objects.message;
              if(objsuccess){
                      var totalnum = objects.recordsFiltered;
                      $("#totalnum").html(totalnum);
                      var totalpage= Math.ceil(totalnum/8);
                      $("#totalpage").html(totalpage);
                      var currentpage = Number($("#currentpage").html())+Number(1)
                      $("#currentpage").html(Number($("#currentpage").html())+Number(1));
                      $("#totalpages").html(totalpage);
                      $("#choosepage").val(currentpage);
                      console.log(currentpage);
                  if (currentpage>1)
                    {
                    	$("#beforepage").removeClass("next");
                    	$("#beforepage").addClass("fore");
                    	$("#beforepage").unbind('click').bind('click',forbeforepage);
                    }
                  else
                  {
                    	$("#beforepage").removeClass("fore");
                    	$("#beforepage").addClass("next");
                    	$("#beforepage").unbind('click');
                  }
                  if (currentpage<totalpage)
                    {
                    	$("#nextpage").removeClass("next");
                    	$("#nextpage").addClass("fore");
                    	$("#nextpage").unbind('click').bind('click',fornextpage);
                    }
                  else
                  {
                      $("#nextpage").removeClass("fore");
                  	  $("#nextpage").addClass("next");
                    	$("#nextpage").unbind('click');
                  }
                  var tr = $("#dele");
                  var obj = objects.data;
              $.each(obj, function(index,item){
                     //克隆tr，每次遍历都可以产生新的tr
                     var clonedTr = tr.clone();
                     var _index = index;
                     clonedTr.removeClass("del");
                     clonedTr.addClass("data");
             //循环遍历cloneTr的每一个td元素，并赋值
                     clonedTr.children("td").each(function(inner_index){
                         //根据索引为每一个td赋值
                            switch(inner_index){
                            case(0):
                             $(this).html(item.equipmentId);
                              break;
                              case(1):
                              $(this).html(item.equipmentName);
                              break;
                              case(2):
                              $(this).html(item.equNo);
                              break;
                              case(3):
                              $(this).html(item.manufacturer);
                              break;
                              case(4):
                              $(this).html(changtime(item.lastOverhaulTime));
                              break;
                              case(5):
                              $(this).html(item.status);
                              break;
                              case(6):
                              $(this).html(changtime(item.purchaseTime));
                              break;
                               case(7):
                              $(this).html(item.repairTimes);
                              break;
                               case(8):
                              $(this).html(item.lineLocation);
                              break;
                             case(9):
                             $(this).html('<button type="button" class="btn btn-xs btn-primary" onclick="showequippic()">预览照片</button>');
                              break;
                             case(10):
                             $(this).html('<button type="button" class="btn btn-xs btn-danger" onclick=del('+item.equipmentId+')><span title="删除" class="glyphicon glyphicon-trash"></span></button>'+'&nbsp;&nbsp;<button type="button" class="btn btn-xs btn-info" onclick=editEquipment('+item.equipmentId+',"'+item.equipmentName+'","'+item.equNo+'","'+item.manufacturer+'","'+changtime(item.lastOverhaulTime).replace(/[ ]/g, "*")+'","'+item.status+'","'+changtime(item.purchaseTime).replace(/[ ]/g, "*")+'","'+item.repairTimes+'","'+item.lineLocation+'") > <span title="修改" class="glyphicon glyphicon-pencil"></span></button>');
                               break;
                              }//end switch
                            });//end children.each
                      clonedTr.insertBefore(tr);
                });//end $each
      $(".del").hide();
      $("#test1").show();
    }else{
          alertMsg(objmessage);
          $("#test1").show();
    }
       //end success
   },
   error:function() {
      alertMsg("操作失败，请与管理人员联系!");
   }
    })//end ajax
  }//end fornextpage

  function forbeforepage(){
           clear();
           var search= $("#filtertxt").val();
           console.log(search);
           $.ajax({
           url:"findEquipmentInfoForDatatables",
           type:"GET",
           data:{
             "draw":1,
             "start": (Number($("#currentpage").html())-Number(2))*8,
             "length":8,
             "search[value]":search,
             "order[0][column]":"0",
             "order[0][dir]":"asc",
           },
            success:function(objects){
            var objsuccess = objects.success;
            var objmessage = objects.message;
            if(objsuccess){
                var totalnum = objects.recordsFiltered;
                $("#totalnum").html(totalnum);
                var totalpage= Math.ceil(totalnum/8);
                $("#totalpage").html(totalpage);
                var currentpage = Number($("#currentpage").html())-Number(1);
                $("#currentpage").html(Number($("#currentpage").html())-Number(1));
                $("#totalpages").html(totalpage);
                $("#choosepage").val(currentpage);
                var tr = $("#dele");
                var obj = objects.data;
                console.log(currentpage) ;
                console.log(totalpage) ;
                if (currentpage>1)
                  {
                  	$("#beforepage").removeClass("next");
                  	$("#beforepage").addClass("fore");
                  	$("#beforepage").unbind('click').bind('click',forbeforepage);
                  }
                else
                {
                  	$("#beforepage").removeClass("fore");
                  	$("#beforepage").addClass("next");
                  	$("#beforepage").unbind('click');
                }
                if (currentpage<totalpage)
                  {
                  	$("#nextpage").removeClass("next");
                  	$("#nextpage").addClass("fore");
                  	$("#nextpage").unbind('click').bind('click',fornextpage);
                  }
                else
                {
                    $("#nextpage").removeClass("fore");
              	    $("#nextpage").addClass("next");
                	  $("#nextpage").unbind('click');
                }
              $.each(obj, function(index,item){
             //克隆tr，每次遍历都可以产生新的tr
             var clonedTr = tr.clone();
             var _index = index;
             clonedTr.removeClass("del");
             clonedTr.addClass("data");
             //循环遍历cloneTr的每一个td元素，并赋值
             clonedTr.children("td").each(function(inner_index){
                 //根据索引为每一个td赋值
                      switch(inner_index){
                     case(0):
                     $(this).html(item.equipmentId);
                      break;
                      case(1):
                      $(this).html(item.equipmentName);
                      break;
                      case(2):
                      $(this).html(item.equNo);
                      break;
                      case(3):
                      $(this).html(item.manufacturer);
                      break;
                      case(4):
                      $(this).html(changtime(item.lastOverhaulTime));
                      break;
                      case(5):
                      $(this).html(item.status);
                      break;
                      case(6):
                      $(this).html(changtime(item.purchaseTime));
                      break;
                       case(7):
                      $(this).html(item.repairTimes);
                      break;
                       case(8):
                      $(this).html(item.lineLocation);
                      break;
                     case(9):
                       $(this).html('<button type="button" class="btn btn-xs btn-primary" onclick="showequippic()">预览照片</button>');
                        break;
                       case(10):
                     $(this).html('<button type="button" class="btn btn-xs btn-danger" onclick=del('+item.equipmentId+')><span title="删除" class="glyphicon glyphicon-trash"></span></button>'+'&nbsp;&nbsp;<button type="button"  class="btn btn-xs btn-info" onclick=editEquipment('+item.equipmentId+',"'+item.equipmentName+'","'+item.equNo+'","'+item.manufacturer+'","'+changtime(item.lastOverhaulTime).replace(/[ ]/g, "*")+'","'+item.status+'","'+changtime(item.purchaseTime).replace(/[ ]/g, "*")+'","'+item.repairTimes+'","'+item.lineLocation+'") > <span title="修改" class="glyphicon glyphicon-pencil"></span></button>');
                       break;
                        }//end switch
          });//end children.each
          clonedTr.insertBefore(tr);
          });//end $each
          $(".del").hide();
          $("#test1").show();
    }else{
          alertMsg(objmessage);
          $("#test1").show();
    }
       //end success
   },error:function(){
       alertMsg("操作失败，请与管理人员联系!");
   }

     })
   }
          function  clear(){
            $(".data").remove();
            $("#dele").show();
            }
         function  showAddWsModel(){
          $("#test1Modal").modal("show");
         }
           $("#myCancel").click(
           function(){
           $("#test1Modal").modal("hide");
           }
            );
    var formatDateTime = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    };
    // var testdate = "Apr 12, 2017 12:00:00 AM";
    // 用于转换时间 先转成标准时间
    function changtime(testdate){
      if(testdate != null)
      {
      var starttime = new Date(testdate);
      var changedtime = formatDateTime(starttime);
      return changedtime;
      }else{
        return "";
      }
    }

var picshow = document.getElementById('Equipmentphoto');
var picover = document.getElementById('Equipmentphotoover');

    function showequippic(thisequNo,thisimagePath){
        tempequId = thisequNo;
        console.log("设备图片地址:"+thisimagePath);
        document.getElementById('magimg').src = "<%=request.getContextPath()%>/"+thisimagePath;
        picshow.style.display = "block";
        picover.style.display = "block";

    }

    function hideequippic(){
        picshow.style.display = "none";
        picover.style.display = "none";
    }

 var image = '';

 function selectImage(file){
   if(!file.files || !file.files[0]){
    return;
  }
   var reader = new FileReader();
   reader.onload = function(evt){
   document.getElementById('magimg').src = evt.target.result;
   image = evt.target.result;
}
  reader.readAsDataURL(file.files[0]);
}



/******图片加载上传到服务器 By SkylineBin *************/

function uploadImage(){
   var equNo = tempequId;
   console.log("设备编号:"+equNo);
   $.ajaxFileUpload({
   type: "post",
   url:"uploadPicture",
   secureuri:false,
   fileElementId:"btn_file",
   dataType:"json",
   data:{
    "equNo":equNo,
 },
  success:function(objects){
  // console.log(objects.success);
  // console.log(objects.result);
  var objsuccess = objects.success;
  var objmessage = objects.message;
  var imagepath = objects.result;
  if(objsuccess){
     var path='<%=request.getContextPath()%>'+"/"+imagepath;
     alertMsg("图片上传成功");
     console.log("新的路径:"+path);
     document.getElementById('magimg').src = path;
     hideequippic();
     setTimeout(function(){
                      location.reload();
                        },1000);
  }else{
        alertMsg(objmessage);
  }
   },
   error:function(objects){
    alertMsg(objects.message);
  }

   });
}

</script>
</body>
</html>