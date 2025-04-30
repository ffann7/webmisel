document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById("bg-music");
    const playPauseBtn = document.getElementById("playPauseBtn");

    function toggleMusic() {
        if (music.paused) {
            music.play().catch(function(error) {
                console.log('Gagal memulai musik:', error);
            });
        } else {
            music.pause();
        }
    }

    playPauseBtn.addEventListener("click", toggleMusic);
});
