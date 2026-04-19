(function() {

    async function getHome(cb) {
        cb({
            success: true,
            data: {
                "Live Cricket": [],
                "24/7 Sports": [],
                "Football": [],
                "UFC & Boxing": []
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