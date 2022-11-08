const baseUri = "https://localhost:7076/api/music"

Vue.createApp({
    data() {
        return {
            music : [],
            error: null,
            filteredMusic : [],
            addData: {title: "", artist: "", duration: null, publicationYear : null },
            addMessage: ""
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
                this.filteredMusic = this.music
                this.error = null
                //this.filteredData = this.dataseries
            } catch (ex) {
                this.music = []
                this.error = ex.message
            }
        },
        filterByTitle(title) {
            console.log("Title: "+title)
            this.filteredMusic = this.music.filter(t => t.title.includes(title))
            console.log("Music: "+this.music)
        },
        filterByArtist(artist) {
            console.log("Artist: "+ artist)
            this.filteredMusic = this.music.filter(t => t.artist.includes(artist))
            console.log("Music: "+this.music)
        },
        async addMusic() {
            try {
                response = await axios.post(baseUri, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllPosts()
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")