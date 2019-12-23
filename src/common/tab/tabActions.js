export function selectTab(tabId) {
    // console.log(tabId)

    //retorna um action creator
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}