export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: [],
        project: null
    }),
    actions: {
        loadProjects: async (): Promise<void> => {},
        loadProject: async (id: string): Promise<void> => {}
    }
})