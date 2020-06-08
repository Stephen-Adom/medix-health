export default{
    state: {
        cbc: [],
        metabolics: [],
        lipoprotein: [],
        enzymes: [],
        thyroids: [],
        coagulations: [],
        disease: [],
        serum: [],
        reactive: [],
        urine_chemical: [],
        urine_microscopic: [],
        infections: [],
        steriod_hormone: [],
        genetics:[],
        saliva_infections: [],
    },
    getters: {
        allCbc(state){
            return state.cbc;
        },
        allMetabolics(state){
            return state.metabolics;
        },
        allLipoprotein(state){
            return state.lipoprotein;
        },
        allEnzymes(state){
            return state.enzymes;
        },
        allThyroids(state){
            return state.thyroids;
        },
        allCoagulations(state){
            return state.coagulations;
        },
        allDisease(state){
            return state.disease;
        },
        allSerum(state){
            return state.serum;
        },
        allReactive(state){
            return state.reactive;
        },
        allUrineChemical(state){
            return state.urine_chemical;
        },
        allUrineMicroscopic(state){
            return state.urine_microscopic;
        },
        allInfections(state){
            return state.infections;
        },
        allSteroidHormones(state){
            return state.steriod_hormone;
        },
        allSalivaGenetics(state){
            return state.genetics;
        },
        allSalivaInfections(state){
            return state.saliva_infections;
        },
    },
    mutations: {
        addCbc(state, payload){
            state.cbc = payload;
        },
        addMetabolics(state, payload){
            state.metabolics = payload;
        },
        addLipoprotein(state, payload){
            state.lipoprotein = payload;
        },
        addEnzymes(state, payload){
            state.enzymes = payload;
        },
        addThyroid(state, payload){
            state.thyroids = payload;
        },
        addCoagulation(state, payload){
            state.coagulations = payload;
        },
        addDisease(state, payload){
            state.disease = payload;
        },
        addSerum(state, payload){
            state.serum = payload;
        },
        addReactive(state, payload){
            state.reactive = payload;
        },
        addUrineChemical(state, payload){
            state.urine_chemical = payload;
        },
        addUrineMicroscopic(state, payload){
            state.urine_microscopic = payload;
        },
        addInfections(state, payload){
            state.infections = payload;
        },
        addSteroidHormone(state, payload){
            state.steriod_hormone = payload;
        },
        addSalivaGenetics(state, payload){
            state.genetics = payload;
        },
        addSalivaInfections(state, payload){
            state.saliva_infections = payload;
        }
    },
    actions: {
        fetchCbc({commit}){
            axios.get('/api/fetch_cbc').then(response => {
                commit('addCbc', response.data)
            });
        },
        fetchMetabolic({commit}){
            axios.get('/api/fetch_metabolics').then(response => {
                commit('addMetabolics', response.data)
            });
        },
        fetchLipoprotein({commit}){
            axios.get('/api/fetch_lipoprotein').then(response => {
                commit('addLipoprotein', response.data)
            });
        },
        fetchEnzymes({commit}){
            axios.get('/api/fetch_enzymes').then(response => {
                commit('addEnzymes', response.data)
            });
        },
        fetchThyroids({commit}){
            axios.get('/api/fetch_thyroid').then(response => {
                commit('addThyroid', response.data)
            });
        },
        fetchCoagulation({commit}){
            axios.get('/api/fetch_coagulation').then(response => {
                commit('addCoagulation', response.data)
            });
        },
        fetchDisease({commit}){
            axios.get('/api/fetch_disease').then(response => {
                commit('addDisease', response.data)
            });
        },
        fetchSerum({commit}){
            axios.get('/api/fetch_serum').then(response => {
                commit('addSerum', response.data)
            });
        },
        fetchReactive({commit}){
            axios.get('/api/fetch_reactive').then(response => {
                commit('addReactive', response.data)
            });
        },
        fetchUrineChemical({commit}){
            axios.get('/api/fetch_urine_chemical').then(response => {
                commit('addUrineChemical', response.data)
            });
        },
        fetchUrineMicroscopic({commit}){
            axios.get('/api/fetch_urine_microscopic').then(response => {
                commit('addUrineMicroscopic', response.data)
            });
        },
        fetchInfections({commit}){
            axios.get('/api/fetch_infections').then(response => {
                commit('addInfections', response.data)
            });
        },
        fetchSteroidHormone({commit}){
            axios.get('/api/fetch_steroid_hormone').then(response => {
                commit('addSteroidHormone', response.data)
            });
        },
        fetchSalivaGenetics({commit}){
            axios.get('/api/fetch_saliva_genetics').then(response => {
                commit('addSalivaGenetics', response.data)
            });
        },
        fetchSalivaInfections({commit}){
            axios.get('/api/fetch_saliva_infections').then(response => {
                commit('addSalivaInfections', response.data)
            });
        },
    }
}