export const hideSearch = ()=> {
    const filterRef = document.querySelector(".stickyScroll").style
    if(filterRef.maxHeight === "700px" || filterRef.maxHeight === ""){
        filterRef.maxHeight = "0px"
    }else {
        filterRef.maxHeight = "700px"
    }
}