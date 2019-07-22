// put this in console for "https://hangouts.google.com"
// doesn't work yet... enter key is annoying

var elmnt = document.querySelector(".editable");

var txt = "this is a test of b0t #017"
elmnt.innerHTML = txt;

var event = new KeyboardEvent('keydown', {
    altKey: false,
    bubbles: true,
    cancelBubble: false,
    cancelable: true,
    charCode: 0,
    code: "Enter",
    composed: true,
    ctrlKey: false,
    currentTarget: null,
    defaultPrevented: false,
    detail: 0,
    eventPhase: 0,
    isComposing: false,
    isTrusted: true,
    key: "Enter",
    keyCode: 13,
    location: 0,
    metaKey: false,
    path: [],
    repeat: false,
    returnValue: true,
    shiftKey: false,
    srcElement: elmnt,
    target: elmnt,
    timestamp: 0,
    type: "keydown",
    which: 13
});

elmnt.dispatchEvent(event);
