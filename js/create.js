function toggleContainerSize(isLarge) {
    const container = document.getElementById('skin-container');
    container.classList.remove('transition-small', 'transition-large');

    setTimeout(() => {
        if (isLarge) {
            container.classList.add('transition-large');
        } else {
            container.classList.add('transition-small');
        }
    }, 10);
}

function fetchSkinLive() {
    const username = document.getElementById('username').value.trim();
    const skinImage = document.getElementById('skin-image');
    const loading = document.getElementById('loading');
    const nextButton = document.getElementById('next-button');

    if (!username) {
        skinImage.style.display = 'none';
        loading.style.display = 'none';
        nextButton.style.display = 'none';
        toggleContainerSize(false);
        return;
    }

    loading.style.display = 'block';
    skinImage.style.display = 'none';
    toggleContainerSize(false);

    const skinUrl = `https://starlightskins.lunareclipse.studio/render/default/${username}/full`;
    skinImage.src = skinUrl;

    skinImage.onload = () => {
        loading.style.display = 'none';
        skinImage.style.display = 'block';
        nextButton.style.display = 'inline-block';
        toggleContainerSize(true);
    };

    skinImage.onerror = () => {
        loading.style.display = 'none';
        skinImage.style.display = 'none';
        nextButton.style.display = 'none';
        toggleContainerSize(false);
    };
}

function showSizeInputView() {
    document.getElementById('name-input-view').style.display = 'none';
    document.getElementById('size-input-view').style.display = 'block';
    toggleContainerSize(true);
}

function enableNextButton() {
    const heightInput = document.getElementById('height-input');
    const proceedButton = document.getElementById('proceed-button');
    
    const heightValue = heightInput.value;
    if (/^\d{3}$/.test(heightValue)) {
        proceedButton.style.display = 'inline-block';
    } else {
        proceedButton.style.display = 'none';
    }
}

function finalizeSelection() {
    const username = document.getElementById('username').value.trim();
    const height = document.getElementById('height-input').value.trim();

    if (username && height) {
        sendToDiscord(username, height);
        alert("Daten erfolgreich an Discord gesendet!");
    } else {
        alert("Bitte alle Felder ausfüllen.");
    }
}

function sendToDiscord(username, height) {
    const webhookUrl = window.WEBHOOK_URL; // Verweis auf die Webhook-URL
    const request = new XMLHttpRequest();
    request.open("POST", webhookUrl);
    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "CookieWhitelist",
        content: `Neuer Eintrag:\nMinecraft Name: ${username}\nGröße: ${height} cm`
    };

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 204) {
            console.log("Daten erfolgreich an Discord gesendet.");
        } else {
            console.error("Fehler beim Senden der Daten an Discord.");
        }
    };

    request.send(JSON.stringify(params));
}

// Sterne-Animation
const starCount = 250;
const screenCenterX = window.innerWidth / 2;
const screenCenterY = window.innerHeight / 2;

function createStars() {
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';

        let startX = Math.random() * window.innerWidth;
        let startY = Math.random() * window.innerHeight;

        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;
        star.style.animationDuration = `${Math.random() * 3 + 2.5}s`;

        star.style.transformOrigin = `${screenCenterX - startX}px ${screenCenterY - startY}px`;

        document.querySelector('.stars').appendChild(star);

        star.addEventListener('animationend', () => {
            star.remove();
            createStars();
        });
    }
}

createStars();
