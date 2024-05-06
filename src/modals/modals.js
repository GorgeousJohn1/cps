// Menu
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('burger');
const menuClose = document.getElementById('cross');

menuOpen.addEventListener('click', (evt) => {
    menu.classList.add('open');
})

menuClose.addEventListener('click', (evt) => {
    menu.classList.remove('open');
});


document.querySelector('#menu .menu-wrapper').addEventListener('click', evt => {
    evt._isClickWithInModal = true;
})

menu.addEventListener('click', evt => {
    if (evt._isClickWithInModal) return;
    evt.currentTarget.classList.remove('open');
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menu.classList.remove('open')
    }
});



//Call
const call = document.getElementById('call-modal');
const callOpen = document.getElementById('call');
const callOpen2 = document.getElementById('call2');
const callClose = document.getElementById('cross-call');

callOpen.addEventListener('click', (evt) => {
    call.classList.add('open');
})
callOpen2.addEventListener('click', (evt) => {
    call.classList.add('open');
})

callClose.addEventListener('click', (evt) => {
    call.classList.remove('open');
});

document.querySelector('#call-modal .call-modal__wrapper').addEventListener('click', evt => {
    evt._isClickWithInModal = true;
})

call.addEventListener('click', evt => {
    if (evt._isClickWithInModal) return;
    evt.currentTarget.classList.remove('open');
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        call.classList.remove('open')
    }
});

//Feedback
const feedback = document.getElementById('feedback-modal');
const feedbackOpen = document.getElementById('feedback');
const feedbackOpen2 = document.getElementById('feedback2');
const feedbackClose = document.getElementById('cross-feedback');

feedbackOpen.addEventListener('click', (evt) => {
    feedback.classList.add('open');
})
feedbackOpen2.addEventListener('click', (evt) => {
    feedback.classList.add('open');
})

feedbackClose.addEventListener('click', (evt) => {
    feedback.classList.remove('open');
})

document.querySelector('#feedback-modal .feedback-modal__wrapper').addEventListener('click', evt => {
    evt._isClickWithInModal = true;
})

feedback.addEventListener('click', evt => {
    if (evt._isClickWithInModal) return;
    evt.currentTarget.classList.remove('open');
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        feedback.classList.remove('open')
    }
});