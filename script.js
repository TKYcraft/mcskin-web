function getSkin() {
    const minecraftId = document.getElementById("minecraftId").value;
    const skinImage = document.getElementById("skinImage");
    const resultMessage = document.getElementById("resultMessage");

    if (minecraftId) {
        const apiUrl = `https://chisato.alicey.dev/api/v1/texture/face/${minecraftId}.png`;
        
        // APIから画像を取得
        fetch(apiUrl)
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('Network response was not ok.');
            })
            .then(blob => {
                // 画像を表示
                const imgUrl = URL.createObjectURL(blob);
                skinImage.src = imgUrl;
                resultMessage.innerText = "";
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                skinImage.src = 'https://chisato.alicey.dev/api/v1/texture/face/shigure_alicey.png';
                resultMessage.innerText = "IDがみつかりませんでした。";
            });
    } else {
        alert("Minecraft IDを入力してください！");
    }
}