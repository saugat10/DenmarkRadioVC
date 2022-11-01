const baseUri = "https://localhost:7076/api/music"

Vue.createApp({
    data() {
        return {
            music : [],
            error: null
        }
    },
    async created() {
        console.log("created method called")
        this.helperGetPosts(baseUri)
    },
    methods: {
        getAllPosts() {
            this.helperGetPosts(baseUri)
        },
        async helperGetPosts(uri) {
            try {
                const response = await axios.get(uri)
                this.music = await response.data
                this.error = null
                //this.filteredData = this.dataseries
            } catch (ex) {
                this.music = []
                this.error = ex.message
            }
        }
    }
}).mount("#app")