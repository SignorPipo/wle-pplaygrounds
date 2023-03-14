WL.registerComponent("load-audio", {
}, {
    init() {
    },
    start() {
        this._loadAudio();
    },
    update(dt) {

    },
    _loadAudio() {
        let manager = PP.myAudioManager;

        {
            let audioSetup = new PP.AudioSetup("assets/audio/music/pp/playground_ambient.mp3");
            audioSetup.myLoop = true;
            audioSetup.mySpatial = false;
            audioSetup.myVolume = 2;
            manager.addAudioSetup("playground_ambient", audioSetup);
        }

        {
            let audioSetup = new PP.AudioSetup("assets/audio/sfx/pp/collision.mp3");
            audioSetup.myRate = 1;
            audioSetup.myVolume = 1;
            audioSetup.myReferenceDistance = 5;
            manager.addAudioSetup("collision", audioSetup);
        }

        {
            let audioSetup = new PP.AudioSetup("assets/audio/sfx/pp/grab.mp3");
            audioSetup.myRate = 1;
            audioSetup.myVolume = 1.5;
            audioSetup.myReferenceDistance = 0.5;
            manager.addAudioSetup("grab", audioSetup);
        }

        {
            let audioSetup = new PP.AudioSetup("assets/audio/sfx/pp/throw.mp3");
            audioSetup.myRate = 1;
            audioSetup.myVolume = 1.5;
            audioSetup.myReferenceDistance = 0.5;
            manager.addAudioSetup("throw", audioSetup);
        }

        {
            let audioSetup = new PP.AudioSetup("assets/audio/sfx/pp/strike.mp3");
            audioSetup.myRate = 1;
            audioSetup.myVolume = 1;
            audioSetup.myReferenceDistance = 3;
            manager.addAudioSetup("strike", audioSetup);
        }
    }
});