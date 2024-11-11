from torchvision import transforms

def transform_image(image):
    """
        이미지를 전처리하여 모델 입력에 적합한 형태로 변환
    """
    transform_pipeline = transforms.Compose([
        transforms.Resize((28, 28)),                   # 이미지 크기를 28x28로 조정
        transforms.Grayscale(num_output_channels=1),   # 흑백 변환
        transforms.ToTensor(),                         # Tensor로 변환
        transforms.Normalize((0.5,), (0.5,))           # 정규화
    ])
    
    transformed_img = transform_pipeline(image)
    transformed_img = transformed_img.unsqueeze(0)     # 배치 차원 추가(여러 이미지를 한 번에 입력하는 경우 개수) (1, 1, 28, 28)

    return transformed_img