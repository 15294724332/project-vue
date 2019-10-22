const baseURL ='/api';
// 登录
const login = baseURL +'/login';
// 退出登录
const logout = baseURL +'/exit';
// 管理员
const findmanage = baseURL +'/findManage';
const addmanage = baseURL +'/addManage';
const updatemanage = baseURL +'/updateManage';
const delmanage = baseURL + '/delManage';
// 首页banner
const findbanner =baseURL+'/banner'
const addbanner=baseURL+"/addBanner"
const delbanner=baseURL+"/delBanner"
// 家教轮播图
const findTeaBanner=baseURL+"/teacherBanner"
const addTeaBanner=baseURL+"/addTeacherBanner"
const delTeaBanner=baseURL+"/delTeacherBanner"
//家教类型更新
const findTeaType=baseURL+"/teacherType"
const addTeaType=baseURL+"/addTeacherType"
const delTeaType=baseURL+"/delTeacherType"
// 家教排行
const findTeaTop=baseURL+"/teacherTop"
const addTeaTop=baseURL+"/addTeacherTop"
const delTeaTop=baseURL+"/delTeacherTop"
// 水站
const findWater=baseURL+"/findWater"
const addWater=baseURL+"/addWater"
const delWater=baseURL+"/delWater"
const updateWater=baseURL+"/updateWater"
//水站评论
const findWaterCom=baseURL+"/findComment"
const delWaterCom=baseURL+"/delComment"
// 维修
const findRepair=baseURL+"/findRepair"
const delRepair=baseURL+"/delRepair"
const updateRepair=baseURL+"/updateRepair"
const addRepair=baseURL+"/addRepair"
// 维修评论
const findRepairCom=baseURL+"/findRepairComment"
const delRepairCom=baseURL+"/delRepairComment"
const addRepairCom=baseURL+"/addRepairComment"
// 家政轮播图
const findHomeBanner=baseURL+"/homeBanner"
const delHomeBanner =baseURL+"/delHomeBanner"
const addHomeBanner=baseURL+"/addHomeBanner"
export default {
  login,
  logout,
  findmanage,
  addmanage,
  updatemanage,
  delmanage,
  findbanner,
  addbanner,
  delbanner,
  findTeaBanner,
  addTeaBanner,
  delTeaBanner,
  findTeaType,
  addTeaType,
  delTeaType,
  findTeaTop,
  addTeaTop,
  delTeaTop,
  findWater,
  addWater,
  delWater,
  updateWater,
  findWaterCom,
  delWaterCom,
  findRepair,
  delRepair,
  updateRepair,
  addRepair,
  findRepairCom,
  delRepairCom,
  addRepairCom,
  findHomeBanner,
  delHomeBanner,
  addHomeBanner
};
