var api = 'http://www.yangshenghui.net/admin/api/';
var basic = 'http://www.yangshenghui.net/admin/basic/';
var pay = 'http://www.yangshenghui.net/admin/order/';
export default {
    getUserInfo: basic + 'get_user_info',
    getWxconfig: api + 'get_wxconfig',
    choiceIdentity: api + 'Choice_identity',
    getMassagistInfo: api + 'get_massagist_info',
    getHaveProject: api + 'get_have_project',
    getHandleProject: api + 'get_handle_project',
    getAddProject: api + 'get_add_project',
    getWorkOrder: api + 'get_work_order',
    applyProject: api + 'apply_project',
    updateTechnicianState: api + 'update_technician_state',
    deleteTechnicianImg: api + 'delete_technician_img',
    getTechnicianEvaluate: api + 'get_technician_evaluate',
    updateUserInfo: api + 'update_user_info',
    getProvince: api + 'get_province',
    getStoreContents: api + 'get_store_contents',
    getProjectList: api + 'get_project_list',
    getProjectInfo: api + 'get_project_info',
    uploadImg: api + 'upload_img',
    projectSwitch: api + 'project_switch',
    handleProject: api + 'handle_project',
    getTList: api + 'get_t_list',
    getDataTable: api + 'get_data_table',
    getProjectProportion: api + 'get_project_proportion',
    getUserOrderlist: api + 'get_user_orderlist',
    getUserOrderInfo: api + 'get_user_order_info',
    getOnlineProject: api + 'get_online_project',
    getProjectTechnician: api + 'get_project_technician',
    getMassagistInfo: api + 'get_massagist_info',
    generateOrderHtml: api + 'generate_order_html',
    getRoomNum: api + 'get_room_num',
    userSubmitOrder: api + 'user_submit_order',
    updateOrderStae: api + 'update_order_stae',
    getCommentHtml: api + 'get_comment_html',
    releaseComment: api + 'Release_comment',
    getStoreWx: api + 'get_store_wx',
    deleteOrderList: api + 'delete_order_list',
    wxPayIndex: pay + 'res_order',
    wxPayOrder: pay + 'order_num',
}