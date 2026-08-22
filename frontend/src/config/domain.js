/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
export const domain={
 code:'PPM',systemName:'项目组合管理系统',englishName:'PROJECT PORTFOLIO MANAGEMENT',
 theme:{primary:'#4056a1',dark:'#24305e',accent:'#d37737'},
 workspace:'项目管理办公室 / 项目组合运营',fieldWorkspace:'数字化转型组合',period:'2026-08-01 · 周六',liveText:'资源池数据链路正常',
 fieldContextLabel:'当前项目组合',fieldContext:'日班 · 08:30—17:30',fieldUser:'陆承',fieldRole:'项目经理',adminUser:'周妍',adminRole:'项目组合主管',
 adminTitle:'项目组合运营驾驶舱',adminBreadcrumb:'项目组合运营 / 今日态势',adminSubtitle:'集中查看项目入池、评审、复盘、资源池与时限风险。',exportAction:'导出评审日报',createAction:'新建项目评审',
 chartTitle:'里程碑完成趋势',chartSubtitle:'当日累计完成率 / 计划目标',chartLabels:['08:30','09:30','10:30','11:30','13:30','14:30','15:30','16:30','17:30'],loadTitle:'项目组合负荷',loadSubtitle:'在管项目占可用能力',recordsTitle:'在管项目',recordsSubtitle:'按承诺时限与异常优先显示',issueTitle:'组合与进度风险',issueSubtitle:'需要项目组合主管处理的事项',
 recordName:'项目评审',itemName:'项目 / 项目',unitName:'项目组合',batchName:'项目批次',planName:'计划项目',doneName:'已完成',exceptionName:'异常',unitLabel:'项',
 listBreadcrumb:'项目评审管理 / 任务台账',listSubtitle:'统一管理项目入池、任务分派、评审、复盘与治理归档。',listSummary:[['本月新立项','12'],['在管项目','26'],['待复核','8'],['超时风险','2',true]],tabs:['全部','待确认','评审中','待复核','已完成'],
 fieldBreadcrumb:'项目执行 / 我的工作台',fieldTitle:'项目经理工作台',fieldSubtitle:'当前 7 项在管项目 · 2 个资源池待确认 · 项目经理陆承',fieldSecondary:'交接记录',reportAction:'录入结果',fieldNoticeTitle:'资源计划已同步',fieldNotice:'预算基线、关键资源与里程碑数据均已同步',
 steps:['项目入池确认','立项准备','资源评审','项目复核','治理归档'],documentAction:'查看治理制度',printAction:'打印项目标签',resourceCardTitle:'资源池状态',resourceValueLabel:'可用人天',resourceHealthLabel:'资源负荷',quickSubtitle:'项目组合高频业务入口',quickActions:[['结果录入','/shopfloor/report','里程碑与完成情况'],['项目流转','/shopfloor/material','交付物与决策记录'],['资源预约','/shopfloor/resources','产能与分配记录'],['风险上报','/shopfloor/andon','范围、预算与进度风险']],
 reportDefaults:[3,0],reportTitle:'评审结论录入',reportSubtitle:'记录原始结果、异常数量和评审过程备注。',reportSuccess:'评审结论已保存并进入复盘队列',reportPlaceholder:'填写完成依据、阻塞事项或资源调整说明',reportFootnote:'提交后写入原始记录并生成治理轨迹',ruleTitle:'制度控制要求',ruleSubtitle:'PRJ-EDGE-08 · V4.3',rules:[['计划周期','24 周'],['预算消耗','62%'],['立项评审','已通过'],['资源计划','有效',true]],fieldTotals:[['16','已完成项目'],['1','异常结果'],['5','待复核结果'],['98.2%','项目数据完整率']],
 adminMenus:[['/admin','home','运营驾驶舱'],['/admin/work-orders','order','项目评审'],['/admin/samples','box','项目管理'],['/admin/schedule','calendar','排班预约'],['/admin/methods','process','制度与标准'],['/admin/reviews','quality','项目复核'],['/admin/resources','machine','资源池'],['/admin/report','chart','组合分析']],
 fieldMenus:[['/shopfloor','home','我的工作台'],['/shopfloor/report','report','结果录入'],['/shopfloor/tasks','order','待检任务'],['/shopfloor/material','box','项目流转'],['/shopfloor/resources','machine','资源预约'],['/shopfloor/andon','risk','风险上报',1]],
 moduleTitles:{tasks:['待检任务','查看任务优先级、项目状态与承诺时限'],material:['项目流转','跟踪接收、分样、留样与销毁全过程'],resources:['资源预约','管理资源池档期、校准和使用记录'],andon:['风险上报','登记并跟踪 OOS、OOT 与环境风险'],samples:['项目管理','管理项目登记、标签、位置和生命周期'],schedule:['排班预约','协调人员、资源池和制度的可用时间'],methods:['制度与标准','维护治理制度、限度和标准物质'],reviews:['项目复核','执行阶段门复核、治理记录批准和电子签名'],report:['组合分析','分析周转时间、一次通过率和风险趋势']},
 tagline:'让每一份评审结论都有完整治理记录链',storyTitle:'从项目入池到治理记录，<br/>每个结果都可复盘、可追溯。',storyText:'连接项目、制度、资源池、人员与原始数据的项目组合数字底座。',pattern:[2,3,8,9,10,15,16,17,22,23,24,29,30,26],loginStats:[['98.2%','项目数据完整率'],['26','当前在管项目'],['18 天','平均阶段周期']],loginTitle:'项目组合项目管理办公室',adminDemo:'组合 / 项目 / 资源',fieldDemo:'评审 / 结果 / 风险'
}
export const records=[
 {no:'INIT-260801-018',name:'ERP 升级项目',code:'PRJ-ERP-26',unit:'客户交付组合',group:'项目管理办公室',plan:24,done:16,exception:1,due:'08-02',batch:'Q3-BL',status:'评审中',progress:67,priority:'加急'},
 {no:'INIT-260801-021',name:'新一代边缘网关研发',code:'PRJ-EDGE-08',unit:'数字化转型组合',group:'项目管理办公室',plan:18,done:8,exception:0,due:'08-02',batch:'R2.3',status:'评审中',progress:44,priority:'正常'},
 {no:'INIT-260802-006',name:'华东客户交付群',code:'PRJ-DELIVERY-12',unit:'产品研发组合',group:'研发中心',plan:12,done:0,exception:0,due:'08-04',batch:'W32',status:'待确认',progress:0,priority:'正常'},
 {no:'INIT-260726-015',name:'数据中台建设',code:'PRJ-DATA-06',unit:'数字化转型组合',group:'项目管理办公室',plan:20,done:20,exception:1,due:'08-01',batch:'M6',status:'已完成',progress:100,priority:'正常'},
 {no:'INIT-260801-024',name:'海外渠道拓展',code:'PRJ-OVERSEA-03',unit:'数字化转型组合',group:'项目管理办公室',plan:15,done:10,exception:0,due:'08-03',batch:'GATE-2',status:'待复核',progress:67,priority:'关注'}]
export const resources=[{code:'POOL-DEV-03',name:'Java 交付资源池',unit:'数字化转型组合',status:'运行',health:88,value:'86',valueUnit:'人天',note:'前端与 Java 能力池 · 本月 86 人天'},{code:'POOL-UTM-05',name:'项目管理资源池',unit:'客户交付组合',status:'运行',health:91,value:'64',valueUnit:'人天',note:'关键岗位覆盖至 2026-10'},{code:'POOL-INC-08',name:'数据工程资源池',unit:'产品研发组合',status:'报警',health:62,value:'92',valueUnit:'%',note:'数据工程资源负荷接近上限'}]
export const reviews=[{no:'REV-260801-032',title:'ERP 升级项目阶段门复盘',type:'项目复核',detail:'8 项交付物 · 周妍',result:'通过'},{no:'REV-260801-011',title:'边缘网关立项评审',type:'阶段门复核',detail:'4 项里程碑 · 顾清',result:'待确认'},{no:'REV-260726-018',title:'数据中台项目范围变更评审',type:'风险评审',detail:'RISK-260726-02',result:'异常'}]
export const adminMetrics=[['本月新立项','12','较昨日增加 8 份','blue'],['按时完成率','96.8%','目标值 ≥ 95.0%','green'],['待复核结果','8','其中 2 项加急','orange'],['风险 / OOS','2','1 项进入调查','red']]
export const fieldMetrics=[['今日任务','7','18 个项目事项','blue'],['已完成','16','当前进度 67%','green'],['待复核','5','数据已完整提交','orange'],['资源池档期','本周 86 人天','交付池本周计划','slate']]
export const chartActual=[8,18,29,42,49,61,72,84,91],chartTarget=[10,21,32,43,12,65,76,87,98]
export const loads=[['数字化转型组合',92,'12 项在检'],['客户交付组合',78,'8 项在检'],['产品研发组合',71,'6 项在检'],['基础设施组合',56,'5 项在检']]
export const issues=[{type:'资源池',title:'核心开发资源出现冲突',detail:'POOL-INC-08 · 影响 2 个里程碑',status:'调查中'},{type:'结果',title:'数据中台范围变更超出基线',detail:'RISK-260726-02 · 等待变更委员会',status:'待判定'},{type:'时限',title:'海外项目采购周期可能延误',detail:'预计延迟 6 个工作日',status:'协调中'}]
