(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{240:function(t,e,a){"use strict";var i=a(98);var n=a.n(i);var l=n.a},245:function(t,e,a){"use strict";var i=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"container"},[!t.yesterdayDaliy?a("div",[a("bk-alert",{attrs:{type:"warning",title:"昨天的日报还没写！记得补上哦！",closable:""}})],1):t._e(),t._v(" "),a("div",{staticClass:"top_container"},[a("span",{staticStyle:{display:"inline-block","margin-left":"50px"}},[t._v("选择日期：")]),t._v(" "),a("bk-date-picker",{staticClass:"mr15",attrs:{clearable:false,placeholder:"选择日期",options:t.customOption},on:{change:function(e){t.changeDate(t.reportDate)}},model:{value:t.reportDate,callback:function(e){t.reportDate=e},expression:"reportDate"}}),t._v(" "),a("div",[a("h2",{staticClass:"mr30 f20",staticStyle:{margin:"0"}},[t._v("\n                    日报状态：\n                    "),t.hasWrittenToday?a("span",{staticStyle:{color:"#3A84FF","font-size":"18px"}},[t._v("已写日报")]):a("span",{staticStyle:{color:"#63656E","font-size":"18px"}},[t._v("未写日报")])])]),t._v(" "),a("bk-button",{staticClass:"mr30",staticStyle:{display:"inline-block"},attrs:{theme:t.hasWrittenToday?"warning":"primary"},on:{click:t.saveDaily}},[t._v("\n                "+t._s(t.hasWrittenToday?"修改":"保存")+"\n            ")]),t._v(" "),a("bk-button",{staticClass:"mr30",staticStyle:{display:"inline-block"},attrs:{theme:"primary"},on:{click:function(e){t.leaveSetting.visible=true}}},[t._v("\n                请假\n            ")]),t._v(" "),a("bk-sideslider",{attrs:{width:"600","is-show":t.leaveSetting.visible,"quick-close":true,"ext-cls":"leave-slide"},on:{"update:isShow":function(e){t.$set(t.leaveSetting,"visible",e)},hidden:t.hiddenSlider}},[a("div",{staticClass:"slide-header",attrs:{slot:"header"},slot:"header"},t._l(t.slideTitleList,function(e,i){return a("div",{key:i,class:{"header-tabs":true,"tabs-active":e===t.activeTabTitle},on:{click:function(a){t.changeTab(e)}}},[t._v("\n                        "+t._s(e)+"\n                    ")])}),0),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTabTitle===t.slideTitleList[0],expression:"activeTabTitle === slideTitleList[0]"}],staticClass:"leave-body",staticStyle:{height:"530px",padding:"30px 0 0 10px"}},[a("div",{staticClass:"leave-apply"},[a("bk-form",{attrs:{"label-width":80,"form-type":"horizontal"}},[a("bk-form-item",{attrs:{label:"请假日期",required:true}},[a("bk-date-picker",{staticClass:"mr15",attrs:{clearable:false,placeholder:"选择日期范围",type:"daterange"},on:{clear:t.clearDate},model:{value:t.leaveFormData.dateTimeRange,callback:function(e){t.$set(t.leaveFormData,"dateTimeRange",e)},expression:"leaveFormData.dateTimeRange"}})],1),t._v(" "),a("bk-form-item",{attrs:{label:"请假原因"}},[a("bk-input",{attrs:{placeholder:"",type:"textarea",rows:3,maxlength:255},model:{value:t.leaveFormData.reason,callback:function(e){t.$set(t.leaveFormData,"reason",e)},expression:"leaveFormData.reason"}})],1),t._v(" "),a("bk-form-item",{staticClass:"mt20"},[a("bk-button",{staticStyle:{"margin-right":"3px"},attrs:{theme:"primary",title:"提交"},on:{click:function(e){e.stopPropagation();e.preventDefault();return t.submitLeave(e)}}},[t._v("提交")])],1)],1)],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTabTitle===t.slideTitleList[1],expression:"activeTabTitle === slideTitleList[1]"}],staticClass:"leave-body",staticStyle:{padding:"30px 10px 0"}},[a("div",{staticClass:"leave-manage"},[a("div",{staticClass:"select-bar"},[a("div",{staticClass:"ptitle"},[t._v("选择组")]),t._v(" "),a("bk-select",{staticStyle:{width:"200px"},attrs:{disabled:false,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},on:{selected:t.handleSelectGroup},model:{value:t.selectedGroup,callback:function(e){t.selectedGroup=e},expression:"selectedGroup"}},t._l(t.groupList,function(t){return a("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})}),1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isleaveTableLoad,expression:"isleaveTableLoad"},{name:"bkloading",rawName:"v-bkloading",value:{isLoading:t.isleaveTableLoad,theme:"primary",zIndex:10},expression:"{ isLoading: isleaveTableLoad, theme: 'primary', zIndex: 10 }"}],staticClass:"leave-load"}),t._v(" "),a("bk-table",{directives:[{name:"show",rawName:"v-show",value:!t.isleaveTableLoad,expression:"!isleaveTableLoad"}],attrs:{"virtual-render":false,data:t.leaveTableData.data,size:t.leaveTableData.size,"outer-border":false,"header-border":false,"header-cell-style":{background:"#fff"}},on:{"page-change":t.handlePageChange,"page-limit-change":t.handlePageLimitChange}},[a("div",{attrs:{slot:"empty-text"},slot:"empty-text"},[t._v("\n                                    空数据\n                                ")]),t._v(" "),a("bk-table-column",{attrs:{label:"人员信息",prop:"info","min-width":"150","show-overflow-tooltip":"true"}}),t._v(" "),a("bk-table-column",{attrs:{label:"请假时间",prop:"leaveDate","min-width":"180","show-overflow-tooltip":"true"}}),t._v(" "),a("bk-table-column",{attrs:{label:"请假理由",prop:"reason","show-overflow-tooltip":"true"}})],1)],1)])])]),t._v(" "),a("bk-button",{staticStyle:{display:"inline-block"},attrs:{theme:"success"},on:{click:function(e){t.moreTemplateDialog.visible=true}}},[t._v("\n                添加模板\n            ")])],1),t._v(" "),a("div",{staticClass:"bottom_container"},[t._l(t.dailyDataContent,function(e,i){return[a("div",{key:i},[a("div",{staticStyle:{display:"flex","justify-content":"space-between",margin:"10px 0"}},[a("h2",{ref:"title"+i,refInFor:true,staticStyle:{display:"inline-block",margin:"0"},attrs:{contenteditable:"true"},on:{input:function(e){t.changeTitleText(i)}}},[t._v(t._s(e.title))]),t._v(" "),a("bk-button",{staticStyle:{display:"inline-block"},attrs:{theme:"primary"},on:{click:function(e){t.dealAdd(i)}}},[t._v("\n                            新增一条内容\n                        ")])],1),t._v(" "),a("div",[a("bk-table",{staticStyle:{"margin-top":"15px"},attrs:{data:e.content,"virtual-render":true,height:"175px"}},[a("bk-table-column",{attrs:{prop:"text",label:"内容"}}),t._v(" "),a("bk-table-column",{attrs:{width:"150",prop:"cost",label:"所花时间"}}),t._v(" "),a("bk-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("bk-button",{attrs:{theme:"warning",text:""},on:{click:function(a){t.changeContent(e.row,i)}}},[t._v("\n                                        修改\n                                    ")]),t._v(" "),a("bk-button",{attrs:{theme:"danger",text:""},on:{click:function(a){t.deleteContent(e.row,i)}}},[t._v("\n                                        删除\n                                    ")])]}}])})],1)],1)])]}),t._v(" "),a("bk-dialog",{attrs:{title:"新增内容","header-position":t.addDialog.headerPosition,width:t.addDialog.width,position:{top:20,left:100}},on:{"value-change":t.addDialogChange},model:{value:t.addDialog.visible,callback:function(e){t.$set(t.addDialog,"visible",e)},expression:"addDialog.visible"}},[a("div",[a("h3",[t._v("内容")]),t._v(" "),a("bk-input",{attrs:{placeholder:"新内容",type:"textarea",rows:3},model:{value:t.newContent,callback:function(e){t.newContent=e},expression:"newContent"}}),t._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"space-between",margin:"10px 0"}},[a("h3",{staticStyle:{margin:"0"}},[t._v("所花时间")]),t._v(" "),a("div",[a("span",{staticClass:"mr10 f10"},[t._v("隐私模式")]),t._v(" "),a("bk-switcher",{staticClass:"mr30",model:{value:t.isPrivate,callback:function(e){t.isPrivate=e},expression:"isPrivate"}})],1)]),t._v(" "),a("bk-input",{attrs:{placeholder:"所花时间",type:"number",precision:1,min:0},model:{value:t.newCost,callback:function(e){t.newCost=e},expression:"newCost"}},[a("template",{slot:"append"},[a("div",{staticClass:"group-text"},[t._v("小时")])])],2)],1),t._v(" "),a("div",{staticClass:"dialog-foot",attrs:{slot:"footer"},slot:"footer"},[a("div",[t.isAdd?a("bk-button",{attrs:{theme:"primary",title:"分享"},on:{click:function(e){t.addRow(t.currentIndex)}}},[t._v("\n                            添加\n                        ")]):a("bk-button",{attrs:{theme:"primary",title:"分享"},on:{click:function(e){t.changeRow(t.currentIndex)}}},[t._v("\n                            修改\n                        ")])],1)])]),t._v(" "),a("bk-dialog",{attrs:{"header-position":t.moreTemplateDialog.headerPosition,width:t.moreTemplateDialog.width,position:{top:20,left:100}},on:{"value-change":t.moreTemplateDialogChange},model:{value:t.moreTemplateDialog.visible,callback:function(e){t.$set(t.moreTemplateDialog,"visible",e)},expression:"moreTemplateDialog.visible"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"mr30"},[t._v("新增模板标题")])]),t._v(" "),a("div",[a("bk-input",{attrs:{placeholder:"新增模板标题",type:"text"},model:{value:t.newTitle,callback:function(e){t.newTitle=e},expression:"newTitle"}})],1),t._v(" "),a("div",{staticClass:"dialog-foot",attrs:{slot:"footer"},slot:"footer"},[a("div",[a("bk-button",{attrs:{theme:"primary",title:"添加"},on:{click:t.addTemplate}},[t._v("\n                            添加\n                        ")])],1)])])],2),t._v(" "),t._l(t.newTemplateContent,function(e,i){return[a("div",{key:i},[a("div",{staticStyle:{display:"flex","justify-content":"space-between",margin:"10px 0"}},[a("h2",{staticStyle:{display:"inline-block",margin:"0"}},[t._v(t._s(e.title))]),t._v(" "),i>0?a("bk-button",{staticStyle:{display:"inline-block"},attrs:{theme:"primary"},on:{click:function(e){t.deleteTemplate(i)}}},[t._v("\n                        删除该模板\n                    ")]):t._e()],1),t._v(" "),a("bk-input",{attrs:{placeholder:"请输入",type:"textarea",rows:3},model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"tem.text"}})],1)]})],2)])};var n=[];a.d(e,"a",function(){return i});a.d(e,"b",function(){return n})},74:function(t,e,a){"use strict";a.r(e);var i=a(245);var n=a(96);for(var l in n)if(l!=="default")(function(t){a.d(e,t,function(){return n[t]})})(l);var s=a(240);var o=a(4);var r=Object(o["a"])(n["default"],i["a"],i["b"],false,null,"6e5791b8",null);e["default"]=r.exports},96:function(t,e,a){"use strict";a.r(e);var i=a(97);var n=a.n(i);for(var l in i)if(l!=="default")(function(t){a.d(e,t,function(){return i[t]})})(l);e["default"]=n.a},97:function(t,e,a){"use strict";var i=a(1);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;a(29);a(75);var n=i(a(76));var l=i(a(77));var s=i(a(78));var o=i(a(79));var r=i(a(80));var d=i(a(81));var c=i(a(82));var u=i(a(83));var f=i(a(84));var v=i(a(95));function h(t,e){var a=typeof Symbol!=="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=p(t))||e&&t&&typeof t.length==="number"){if(a)t=a;var i=0;var n=function t(){};return{s:n,n:function e(){if(i>=t.length)return{done:true};return{done:false,value:t[i++]}},e:function t(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l=true,s=false,o;return{s:function e(){a=a.call(t)},n:function t(){var e=a.next();l=e.done;return e},e:function t(e){s=true;o=e},f:function t(){try{if(!l&&a.return!=null)a.return()}finally{if(s)throw o}}}}function p(t,e){if(!t)return;if(typeof t==="string")return m(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor)a=t.constructor.name;if(a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return m(t,e)}function m(t,e){if(e==null||e>t.length)e=t.length;for(var a=0,i=new Array(e);a<e;a++){i[a]=t[a]}return i}var b={name:"",components:{bkInput:f.default,bkDatePicker:u.default,bkTable:c.default,bkTableColumn:d.default,bkButton:r.default,bkSideslider:o.default,bkForm:s.default,bkFormItem:l.default,bkAlert:n.default},data:function t(){return{yesterdayDaliy:true,curDate:new Date,reportDate:new Date,formatDate:"",addDialog:{visible:false,width:600,headerPosition:"left"},moreTemplateDialog:{visible:false,width:600,headerPosition:"left"},isAdd:true,targetRow:0,dailyDataTitle:["今日任务","明日计划"],dailyDataContent:[{title:"今日任务",type:"table",content:[]},{title:"明日计划",type:"table",content:[]}],isPrivate:false,dailyDates:[],newContent:"",newCost:0,newTemplateContent:[{title:"感想",type:"text",text:""}],newTitle:"",currentIndex:0,newPostDaily:{date:null,content:[],template_id:0,send_email:false},hasWrittenToday:false,customOption:{disabledDate:function t(e){if(e>new Date){return true}}},leaveSetting:{visible:false},isleaveTableLoad:true,leaveTableData:{size:"small",data:[],isAdmin:false},leaveFormData:{reason:"",dateTimeRange:[new Date,new Date]},slideTitleList:["请假申请","请假管理"],activeTabTitle:"请假申请",groupList:[],selectedGroup:""}},created:function t(){this.formatDate=(0,v.default)(new Date).format(v.default.HTML5_FMT.DATE);var e=this.$route.query.date;if(e!==undefined){this.reportDate=new Date(e);this.formatDate=e}else{this.reportDate=new Date}this.init()},methods:{changeDate:function t(e){this.formatDate=(0,v.default)(e).format(v.default.HTML5_FMT.DATE);this.getDailyReport()},cheakDailyDates:function t(){var e=this;this.$http.get("/get_reports_dates/").then(function(t){if(t.result){e.dailyDates=t.data;e.customOption={disabledDate:function t(a){if((0,v.default)(a).format("YYYY-MM-DD")!==(0,v.default)(new Date).format("YYYY-MM-DD")&&(e.dailyDates.includes((0,v.default)(a).format("YYYY-MM-DD"))||a>new Date)){return true}}}}else{e.$bkMessage({offsetY:80,message:t.message,theme:"error"})}})},changeTemplate:function t(){if(this.curTemplateId===null||this.curTemplateId===""){this.curTemplate=[];this.dailyData=[]}},checkYesterdayDaliy:function t(){var e=this;this.$http.get("/check_yesterday_daliy/").then(function(t){e.yesterdayDaliy=!!t.data})},selectTemplate:function t(){this.dailyData=[];this.templateList.forEach(function(t){if(t.id===this.curTemplateId){this.curTemplate=t.content.split(";")}})},init:function t(){var e=this;this.cheakDailyDates();this.getDailyReport();this.$http.get("/get_user_groups/").then(function(t){e.groupList=t.data;if(e.groupList.length!==0){e.selectedGroup=e.groupList[0].id}});this.checkYesterdayDaliy()},getDailyReport:function t(){var e=this;this.$http.get("/daily_report/?date="+this.formatDate).then(function(t){if(Object.keys(t.data).length){e.hasWrittenToday=true;e.dailyDataTitle=[];e.dailyDataContent=[];e.newTemplateContent=[];var a=h(t.data.content),i;try{for(a.s();!(i=a.n()).done;){var n=i.value;if(n.type==="table"){e.dailyDataTitle.push(n.title);e.dailyDataContent.push(n)}else{e.newTemplateContent.push(n)}}}catch(t){a.e(t)}finally{a.f()}}else{e.hasWrittenToday=false;e.dailyDataTitle=["今日任务","明日计划"];e.dailyDataContent=[{title:"今日任务",type:"table",content:[]},{title:"明日计划",type:"table",content:[]}];e.newTemplateContent=[{title:"感想",type:"text",text:""}]}e.cheakDailyDates()});this.$http.get("/get_user_groups/").then(function(t){e.groupList=t.data;if(e.groupList.length!==0){e.selectedGroup=e.groupList[0].id}e.cheakDailyDates()})},changeTitleText:function t(e){var a="title"+e;this.dailyDataTitle[e]=this.$refs[a][0].innerText},dealAdd:function t(e){this.currentIndex=e;this.isAdd=true;this.addDialog.visible=true},addRow:function t(e){var a={text:this.newContent,cost:this.newCost+"小时",isPrivate:this.isPrivate};this.dailyDataContent[e]["content"].push(a);this.addDialog.visible=false},changeRow:function t(e){var a={text:this.newContent,cost:this.newCost+"小时",isPrivate:this.isPrivate};this.dailyDataContent[e]["content"].splice(this.targetRow,1,a);this.addDialog.visible=false},changeContent:function t(e,a){this.currentIndex=a;this.newContent=e.text;this.newCost=parseFloat(e.cost);this.targetRow=e.$index;this.isAdd=false;this.addDialog.visible=true},deleteContent:function t(e,a){this.dailyDataContent[a]["content"].splice(e.$index,1);this.$bkMessage({theme:"success",message:"移除成功"})},saveDaily:function t(){var e=this;this.newPostDaily.date=this.formatDate;for(var a in this.dailyDataContent){this.dailyDataContent[a].title=this.dailyDataTitle[a]}var i=h(this.dailyDataContent),n;try{for(i.s();!(n=i.n()).done;){var l=n.value;this.newPostDaily.content.push(l)}}catch(t){i.e(t)}finally{i.f()}var s=h(this.newTemplateContent),o;try{for(s.s();!(o=s.n()).done;){var r=o.value;this.newPostDaily.content.push(r)}}catch(t){s.e(t)}finally{s.f()}this.$http.post("/daily_report/",this.newPostDaily).then(function(t){e.hasWrittenToday=true;e.newPostDaily={date:null,content:[],template_id:0,send_email:false};e.$bkMessage({theme:"success",message:t.message})})},addTemplate:function t(){this.newTemplateContent.push({title:this.newTitle,type:"text",text:""});this.moreTemplateDialog.visible=false},deleteTemplate:function t(e){this.newTemplateContent.splice(e,1)},addDialogChange:function t(e){if(e===false){this.newContent="";this.newCost=0}},moreTemplateDialogChange:function t(e){if(e===false){this.newTitle=""}},getLeaveList:function t(){var e=this;this.isleaveTableLoad=true;this.leaveTableData.data=[];var a=(0,v.default)(new Date).format(v.default.HTML5_FMT.DATE);var i=this.selectedGroup;var n=0;this.$http.get("/display_personnel_information/"+i+"/?date="+a+"&sign="+n).then(function(t){if(t.data!==undefined&&t.data.length!==0){t.data.map(function(t,a){e.leaveTableData.data.push({offdayId:t.off_info.id,leaveDate:t.off_info.start_date+"  ~  "+t.off_info.end_date,reason:t.off_info.reason,info:t.username+"("+t.name+")",username:t.username})})}}).finally(function(){e.isleaveTableLoad=false})},hiddenSlider:function t(){this.leaveFormData.reason="";this.leaveFormData.dateTimeRange=[new Date,new Date];this.activeTabTitle="请假申请"},changeTab:function t(e){this.activeTabTitle=e;if(this.activeTabTitle==="请假管理"){this.getLeaveList()}},handleSelectGroup:function t(e,a){this.getLeaveList()},clearDate:function t(){this.leaveFormData.dateTimeRange=-1},submitLeave:function t(){var e=this;var a={};a.start_date=(0,v.default)(this.leaveFormData.dateTimeRange[0]).format(v.default.HTML5_FMT.DATE);a.end_date=(0,v.default)(this.leaveFormData.dateTimeRange[1]).format(v.default.HTML5_FMT.DATE);a.reason=this.leaveFormData.reason;this.$http.post("/add_off_info/",a).then(function(t){if(t.result){e.$bkMessage({offsetY:80,delay:2e3,theme:"success",message:t.message})}else{e.$bkMessage({offsetY:80,delay:2e3,theme:"warning",message:t.message})}})}}};e.default=b},98:function(t,e,a){}}]);