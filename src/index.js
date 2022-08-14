const quality = document.querySelector('#quality');
const qualityPic = document.querySelector('.quality-pic');
const confirm = document.querySelector('.confirm-btn');
const sumVal = document.querySelector('#price');


const valueTab = [5, 10, 20];


sumVal.addEventListener('change', function () {

    const sumInput = sumVal.value

    if (sumInput) {

        confirm.addEventListener('click', function () {



            if (quality.value == 1) {
                calculate(valueTab[0])
            }

            if (quality.value == 2) {
                calculate(valueTab[1])
            }

            if (quality.value == 3) {
                calculate(valueTab[2])
            }

        })

    }



})


quality.addEventListener('change', function () {
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


function calculate(q) {
    let sum = document.querySelector('#price').value;
    sum = parseInt(sum);
    let result = (sum * q) / 100;

    let tip = document.querySelector('.tip-value');
    tip.innerHTML = Math.round(result) +' $'
}