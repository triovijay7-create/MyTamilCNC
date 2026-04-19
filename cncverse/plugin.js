(function() {

    const BASE_URL = "https://ppv.to";

    async function getHome(cb) {
        cb({
            success: true,
            data: {
                "Live Cricket & PPV": [],
                "24/7 Streams": [],
                "Popular Sports": []
            }
        });
    }

    async function search(query, cb) {
        // For now, placeholder. We'll improve later.
        cb({ success: true, data: [] });
    }

    async function load(url, cb) {
        cb({ success: true, data: {} });
    }

    async function loadStreams(url, cb) {
        // This is where we will put real stream extraction from ppv.to
        cb({ success: true, data: [] });
    }

    globalThis.getHome = getHome;
    globalThis.search = search;
    globalThis.load = load;
    globalThis.loadStreams = loadStreams;

})();