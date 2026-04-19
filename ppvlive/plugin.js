(function() {

    async function getHome(cb) {
        cb({
            success: true,
            data: {
                "Live Cricket & PPV": [
                    new MultimediaItem({
                        title: "IPL Live - Test Match",
                        url: "https://ppv.to/cricket",
                        posterUrl: "https://picsum.photos/id/1015/300/450",
                        type: "movie"
                    }),
                    new MultimediaItem({
                        title: "India vs Australia Live",
                        url: "https://ppv.to/live",
                        posterUrl: "https://picsum.photos/id/201/300/450",
                        type: "movie"
                    })
                ],
                "24/7 Sports Streams": [
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
            description: "Live event from ppv.to",
            year: 2026
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
                    server: "Test Mirror",
                    headers: {}
                }),
                new StreamResult({
                    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny_720p.mp4",
                    quality: "1080p",
                    server: "Test Mirror 2",
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