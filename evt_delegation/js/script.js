let messageBoxes = document.querySelectorAll('.message-box');
let messageBoxesClosers = document.querySelectorAll('.message-box > span');
let msgContainer = document.querySelector('.messages-container');
let msgCount = document.querySelector('.messages-container > h3');

function toggleMessageCount(evt) {
    if (msgCount.style.visibility !== 'visible') {
        msgCount.style.visibility = 'visible';

    } else {
        msgCount.style.visibility = 'hidden';
    }
}

function highlightMsgBox(evt) {
    // console.log(evt.currentTarget);
    // evt.stopPropagation(); // Kann bei Delegation weggelassen werden
    // Funktioniert nicht, wenn Event delegiert wurde, denn currentTarget ist dann ein auesseres Element
    // evt.currentTarget.style.backgroundColor = 'olive';

    if (evt.target.classList.contains('message-box')) {
        evt.target.style.backgroundColor = 'olive';
    } else {
        let msgContainer = evt.target.closest('.message-box');
        msgContainer.style.backgroundColor = 'olive';
    }
}

function removeMessage(evt) {
    // Verhindert das Durchreichen des Event an Eltern-Elemente
    // evt.stopPropagation(); // Kann bei Delegation weggelassen werden
    let msgBox = evt.target.parentNode;
    let msgContainer = evt.target.closest('.messages-container');
    msgContainer.removeChild(msgBox);
}


// messageBoxes.forEach(msgBox => msgBox.addEventListener('click', highlightMsgBox));
// messageBoxesClosers.forEach(msgBoxCloser => msgBoxCloser.addEventListener('click', removeMessage));
// msgContainer.addEventListener('click', toggleMessageCount);

// Event Delegation
msgContainer.addEventListener('click', evt => {
    // Also auf den Container geklickt
    if (evt.target === evt.currentTarget) {
        toggleMessageCount(evt);

    } else if (evt.target.tagName === 'SPAN') { // Auf das Schliess-Span geklickt
        removeMessage(evt);

    } else if (evt.target.closest('.message-box')) { // Auf ein Element innerhalb der messageBox geklickt
        highlightMsgBox(evt);
    }
});