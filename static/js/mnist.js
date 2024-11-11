/*
    ** 코드 동작 설명 **

    - uploadButton 이라는 ID를 가진 버튼을 클릭했을 때 EventListener가 작동하여 함수가 실행된다.
    - fileInpute 요소에서 사용자가 선택한 파일을 가져온다. 만약 파일이 선택되지 않았다면 경고 메시지를 띄우고 함수 실행을 종료한다.
    - 서버로 전송할 데이터를 포함하는 FormData 객체를 생성하고, 파일을 'file'이라는 이름으로 추가한다.
    - FileReader 객체를 사용하여 파일을 읽고, reader.onload 이벤트에서 이미지를 보여준다.
    - fetch를 사용해 http://127.0.0.1:5000/predict URL로 POST 요청을 보낸다. 요청 본문에 이미지 데이터를 포함한 FormData를 전달한다.
    - 서버의 응답에 prediction 키가 있으면 이를 result 라는 요소에 표시한다.
*/

document.getElementById('uploadButton').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput').files[0];
    if(!fileInput) {
        alert('Please select a file!');
        return;
    }

    var formData = new FormData();
    formData.append('file', fileInput);

    var reader = new FileReader();
    reader.onload = function(e) {
        var uploadedImage = document.getElementById('uploadedImage');
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = 'block';
        uploadedImage.style.width = '400px';
        uploadedImage.style.height = '400px';
    };
    reader.readAsDataURL(fileInput);

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData
    })
    .then(response=>response.json())
    .then(data=> {
        if(data.prediction !== undefined) {
            document.getElementById('result').innerText = 'Prediction: ' + data.prediction;
        } else {
            document.getElementById('result').innerText = 'Error' + (data.error || 'Unknown error');
        }
    })
    .catch(error=> {
        console.error('Error: ', error);
        document.getElementById('result').innerText = 'Error occurred during prediction.';
    })
})