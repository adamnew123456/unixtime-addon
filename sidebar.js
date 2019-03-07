const CONTROLS = {
    'unix_s': document.getElementById('unix_s'),
    'unix_ms': document.getElementById('unix_ms'),
    'timestamp': document.getElementById('timestamp'),
    'reset': document.getElementById('reset')
};

function updateView(value, type) {
    switch (type) {
        case 'unix_s': {
            let parsed = Number(value);
            if (isNaN(parsed)) {
                CONTROLS.unix_ms.value = '';
                CONTROLS.timestamp.value = '';
            } else {
                CONTROLS.unix_ms.value = parsed * 1000;
                CONTROLS.timestamp.value = new Date(parsed * 1000).toString();
            }
            break;
        }
        case 'unix_ms': {
            let parsed = Number(value);
            if (isNaN(parsed)) {
                CONTROLS.unix_s.value = '';
                CONTROLS.timestamp.value = '';
            } else {
                CONTROLS.unix_s.value = (parsed / 1000) | 0;
                CONTROLS.timestamp.value = new Date(parsed).toString();
            }
            break;
        }
        case 'timestamp': {
            let parsed = new Date(value);
            if (isNaN(parsed)) {
                CONTROLS.unix_s.value = '';
                CONTROLS.unix_ms.value = '';
            } else {
                CONTROLS.unix_s.value = (parsed.getTime() / 1000) | 0;
                CONTROLS.unix_ms.value = parsed.getTime();
            }
            break;
        }
    }
}

CONTROLS.unix_s.addEventListener('input', function() {
    updateView(CONTROLS.unix_s.value, 'unix_s');
});

CONTROLS.unix_ms.addEventListener('input', function() {
    updateView(CONTROLS.unix_ms.value, 'unix_ms');
});

CONTROLS.timestamp.addEventListener('input', function() {
    updateView(CONTROLS.timestamp.value, 'timestamp');
});

CONTROLS.reset.addEventListener('click', function() {
    var now = new Date();
    CONTROLS.unix_s.value = (now.getTime() / 1000) | 0;
    CONTROLS.unix_ms.value = now.getTime();
    CONTROLS.timestamp.value = now.toString();
});
