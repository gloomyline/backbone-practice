var pageViewCount = document.querySelector('#pageViewCount');
function getPageViewData(){
    // 获取viewCount的值，赋值给viewCount
    var viewCount = localStorage.viewCount;
    // 如果不存在设置localStorage.viewCount = 0
    if(!!!viewCount){
        localStorage.viewCount = 0;
    }

    // viewCount在值为localStorage值的viewCount值加1
    viewCount = Number(localStorage.viewCount) + 1;
    localStorage.viewCount = viewCount;

    return `这个页面被浏览了${viewCount}次`
}

function clearFun(){
    localStorage.clear();
    window.location.reload();
}
pageViewCount.innerHTML = getPageViewData();