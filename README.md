# Fashion MNIST 웹 기반 의류 분류 시스템

이 프로젝트는 Fashion MNIST 데이터셋을 활용하여 의류 이미지를 분류하는 웹 애플리케이션입니다. 이미지 분류를 위해 CNN 모델을 학습하고, Flask를 이용한 REST API 및 웹 프론트엔드를 구현하여 이미지를 분류하고 결과를 시각화합니다.

## 프로젝트 구조
```bash
├── models/
│ └── F_mnist_model.pth         # 학습된 모델 가중치 파일
├── modules/
│ ├── init.py                   # 모듈 초기화 파일
│ ├── data_processing.py        # 이미지 전처리 관련 함수
│ └── model.py                  # CNN 모델 정의 파일
├── static/
│ ├── css/                      # CSS 파일 디렉토리
│ └── js/                       # JavaScript 파일 디렉토리
├── templates/
│ └── index.html                # 웹 페이지 템플릿
├── app.py                      # Flask 서버의 메인 파일
├── data.zip                    # Fashion MNIST 데이터셋 
├── fashion_MNIST.ipynb         # 데이터셋 분석 보고서
├── README.md                   # 프로젝트 설명 파일
├── requirements.txt            # 필요 라이브러리가 명시된 파일
└── test_data.zip               # 테스트 시 업로드할 파일
```


## 주요 기능

### 1. 데이터셋 분석
- **Fashion MNIST 데이터셋**을 분석하고 클래스별 분포를 시각화하였습니다.
- 데이터 전처리 및 구성 확인 코드를 작성하여 보고서에 포함했습니다.

### 2. CNN 모델 구축 및 학습
- **CNN 모델**을 구축하여 Fashion MNIST 데이터셋에 대해 학습하였습니다.
- 학습 완료 후 모델 가중치를 `models/F_mnist_model.pth` 파일로 저장하였습니다.

### 3. Flask를 활용한 REST API 개발
- 학습된 모델을 사용하여 이미지를 분류하는 **REST API**를 구현하였습니다.
- `/predict` 엔드포인트를 통해 이미지를 POST로 업로드하고 분류 결과를 JSON 형식으로 반환합니다.

### 4. 웹 프론트엔드
- 사용자가 이미지를 업로드하고, 예측 결과를 확인할 수 있는 웹 인터페이스를 제공합니다.
- 업로드된 이미지에 대한 모델의 분류 결과를 화면에 시각적으로 표시합니다.

## 실행 방법

### 1. 필요 라이브러리 설치
이 프로젝트는 아래 명시된 Python 라이브러리 버전을 사용하여 개발되었습니다. 정확한 환경 구성을 위해 `requirements.txt` 파일을 사용하여 동일한 버전의 라이브러리를 설치하시기 바랍니다.
```bash
pip install -r requirements.txt
```
#### 사용된 주요 라이브러리 버전
- Flask==3.0.3
- Pillow==11.0.0
- torch==2.5.1

### 2. Flask 서버 실행
```bash
python app.py
```

### 3. 웹 인터페이스 사용
- 브라우저에서 http://127.0.0.1:5000으로 접속하여 이미지를 업로드하고 예측 결과를 확인할 수 있습니다.