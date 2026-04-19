(function() {

    const API_BASE = "https://api.ppv.to";

    async function getHome(cb) {
        try {
            // Add timeout to prevent infinite loading
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds timeout

            const res = await fetch(`${API_BASE}/api/streams`, {
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            const json = await res.json();

            if (json.success && json.streams && json.streams.length > 0) {
                const sections = {};

                json.streams.forEach(cat => {
                    const items = cat.streams.map(s => new MultimediaItem({
                        title: s.name || "Live Event",
                        url: s.uri_name ? `${API_BASE}/stream/${s.uri_name}` : "https://ppv.to",
                        posterUrl: s.poster || "https://picsum.photos/id/1015/300/450",
                        type: "movie"
                    }));

                    if (items.length > 0) {
                        sections[cat.category || "Live Events"] = items;
                    }
                });

                cb({ success: true, data: sections });
                return;
            }
        } catch (e) {
            // Silent fail - use fallback
        }

        // Fallback if API fails or times out
        cb({
            success: true,
            data: {
                "Live Cricket & PPV": [
                    new MultimediaItem({
                        title: "IPL / Cricket Live",
                        url: "https://ppv.to/cricket",
                        posterUrl: "https://picsum.photos/id/1015/300/450",
                        type: "movie"
                    }),
                    new MultimediaItem({
                        title: "India vs Australia",
                        url: "https://ppv.to/live",
                        posterUrl: "https://picsum.photos/id/201/300/450",
                        type: "movie"
                    })
                ],
                "24/7 Sports": [
                    new MultimediaItem({
                        title: "Cricket 24/7",
                        url: "https://ppv.to/247",
                        posterUrl: "https://picsum.photos/id/133/300/450",
                        type: "series"
                    })
                ]
            }
        });
    }

    async function load(url, cb) {
        const item = new MultimediaItem({
            title: "Live Sports Stream",
            url: url,
            posterUrl: "https://picsum.photos/id/1015/300/450",
            type: "movie",
            description: "Live event from ppv.to"
        });
        cb({ success: true, data: item });
    }

    async function loadStreams(url, cb) {
        cb({
            success: true,
            data: [
                new StreamResult({
                    url: "https://test-streams.mux.dev/x264_720p_1500kbps_30fps.mp4",
                    quality: "720p",
                    server: "Test Stream",
                    headers: {}
                })
            ]
        });
    }

    async function search(query, cb) {
        cb({ success: true, data: [] });
    }

    globalThis.getHome = getHome;
    globalThis.search = search;
    globalThis.load = load;
    globalThis.loadStreams = loadStreams;

})();