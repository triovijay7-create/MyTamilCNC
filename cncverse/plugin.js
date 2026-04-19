(function() {

    async function getHome(cb) {
        cb({
            success: true,
            data: {
                "Tamil Trending": [],
                "Latest Tamil Movies": [],
                "Tamil Web Series": [],
                "OTT Tamil Dub": []
            }
        });
    }

    async function search(query, cb) {
        cb({ success: true, data: [] });
    }

    async function load(url, cb) {
        cb({ success: true, data: {} });
    }

    async function loadStreams(url, cb) {
        cb({ success: true, data: [] });
    }

    globalThis.getHome = getHome;
    globalThis.search = search;
    globalThis.load = load;
    globalThis.loadStreams = loadStreams;

})();