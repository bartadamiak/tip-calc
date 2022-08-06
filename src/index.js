const quality = document.querySelector('#quality');

const qualityPic = document.querySelector('.quality-pic');

quality.addEventListener('change', function() {
    if (quality.value == 1) {
        qualityPic.classList.add('q1')
        qualityPic.classList.remove('q2')
        qualityPic.classList.remove('q3')
    }

    if (quality.value == 2) {
        qualityPic.classList.add('q2')
        qualityPic.classList.remove('q1')
        qualityPic.classList.remove('q3')
    }

    if (quality.value == 3) {
        qualityPic.classList.add('q3')
        qualityPic.classList.remove('q1')
        qualityPic.classList.remove('q2')
    }
})