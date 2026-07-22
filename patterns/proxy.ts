// Using an abstract class with extends (inheritance) is significantly more popular and is the intended primary use case.
// Using implements with an abstract class is rare because it strips away the class's biggest benefit: code reuse.
abstract class Video {
    protected constructor(
        protected name: string,
        protected url: string
    ) {}
    abstract play(): void
}

class RealVideo extends Video {
    public constructor(
        name: string,
        url: string
    ) {
        super(name, url)
        console.log(`load video from url: ${this.url}`)
    }

    public play(): void {
        console.log(`play video name: ${this.name}`)
    }
}

class ProxyVideo extends Video {
    public constructor(
        name: string,
        url: string,
        private realVideo?: RealVideo
    ) {
        super(name, url)
    }

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
console.log('=====================================')

video.play()
console.log('=====================================')

video.play()
console.log('=====================================')

export {}