import ajax from "@/libs/ajax"


export const GetBaseDataList = () => {
    return ajax({
        url: '/list/baselist'
    })
}



export const GetTableDataList = () => {
    return ajax({
        url: '/list/tablelist'
    })
}