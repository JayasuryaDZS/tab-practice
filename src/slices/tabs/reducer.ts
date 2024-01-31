import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const MODULES = {
    REFERING_PROVIDER: 'REFERING_PROVIDER',
    REFERING_PROVIDER_LIST: 'REFERING_PROVIDER_LIST'
}

const initialState: {tabs: any} = {
    tabs: []
}

const tabSlice = createSlice({
    name: 'TabSlice',
    initialState,
    reducers: {
        handleEditUser (state, action) {
            const tabData = action.payload
            const deactivatedTabs = state.tabs.map((tab: any) => ({
                ...tab,
                active: false
            }))

            const hasUserListTab = deactivatedTabs.some((tab: any) => tab.module === MODULES.REFERING_PROVIDER_LIST)
            console.log(hasUserListTab, 'hckecing the hasUserListTab 26 -->')
            const listTab = !hasUserListTab ? 
                [
                    {
                        tabId: v4,
                        title: tabData.code,
                        module: MODULES.REFERING_PROVIDER_LIST,
                        active: false
                    }
                ]
                : 
            [];
            const hasSameDataTab = deactivatedTabs.find((tab: any) => tab.module === MODULES.REFERING_PROVIDER && tab.data?.id === tabData.id)
            console.log(hasSameDataTab, 'checking the hasSameDatatabs 39 --->')
            if (hasSameDataTab) {

                const updatedTabs = deactivatedTabs.map((tab: any) => tab.module === MODULES.REFERING_PROVIDER && tab.data?.id === tabData.id ? {...tab, active: true} : tab)
                state.tabs = [...listTab, ...updatedTabs]
            } else {
                state.tabs = [
                    ...listTab,
                    ...deactivatedTabs,
                    {
                        tabId: v4(),
                        title: tabData.code,
                        module: MODULES.REFERING_PROVIDER,
                        data: tabData,
                        active: true
                    }
                ]
            }

        },

        removeTabs(state, action) {
            // Three useCases:
            // 1. IF !Tabs.length set State.Tabs = []
            // 2. IF Closing one tabs change the active: true for prevision tab using length -1
        }
    }
})

export const { handleEditUser, removeTabs } = tabSlice.actions

export default tabSlice.reducer