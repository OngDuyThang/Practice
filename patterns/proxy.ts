interface Video {
    play(): void
}

class RealVideo implements Video {
    public constructor(
        private name: string,
        private url: string
    ) {
        console.log(`load video from url: ${this.url}`)
    }

    public play(): void {
        console.log(`play video name: ${this.name}`)
    }
}

class ProxyVideo implements Video {
    public constructor(
        private name: string,
        private url: string,
        private realVideo?: RealVideo
    ) {}

    public play() {
        if (!this.realVideo) {
            this.realVideo = new RealVideo(this.name, this.url)
        } else {
            console.log('already loaded video')
        }
        this.realVideo.play()
    }
}

const video: Video = new ProxyVideo('video name', 'https://youtube.com')
video.play()
video.play()
video.play()

export {}