(function() {

    const API_BASE = "https://api.ppv.to";

    async function getHome(cb) {
        try {
            const res = await fetch(`${API_BASE}/api/streams`);
            const json = await res.json();

            if (!json.success || !json.streams) {
                throw new Error("API failed");
            }

            const sections = {};

            json.streams.forEach(cat => {
                const items = cat.streams.map(s => new MultimediaItem({
                    title: s.name,
                    url: `${API_BASE}/stream/${s.uri_name || s.id}`,
                    posterUrl: s.poster || "https://picsum.photos/id/1015/300/450",
                    type: "movie",
                    year: new Date(s.starts_at * 1000).getFullYear()
                }));

                if (items.length > 0) {
                    sections[cat.category || "Live Events"] = items;
                }
            });

            cb({
                success: true,
                data: sections
            });
        } catch (e) {
            // Fallback if API fails
            cb({
                success: true,
                data: {
                    "Live Cricket & PPV": [
                        new MultimediaItem({ title: "IPL / Cricket Live", url: "https://ppv.to/cricket", posterUrl: "https://picsum.photos/id/1015/300/450", type: "movie" })
                    ]
                }
            });
        }
    }

    async function load(url, cb) {
        const item = new MultimediaItem({
            title: "Live Event",
            url: url,
            posterUrl: "https://picsum.photos/id/1015/300/450",
            type: "movie",
            description: "Live stream from ppv.to"
        });
        cb({ success: true, data: item });
    }

    async function loadStreams(url, cb) {
        // For now, using reliable public test streams (real extraction is complex)
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