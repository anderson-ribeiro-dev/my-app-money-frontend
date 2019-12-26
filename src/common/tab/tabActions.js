export function selectTab(tabId) {
    // console.log(tabId)

    //retorna um action creator
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}


//operador rest(junta objeto) contrário no spread, gera um array
export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}