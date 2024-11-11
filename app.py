from flask import Flask, render_template, request, jsonify
from PIL import Image
import torch
from modules import transform_image, load_model

app = Flask(__name__)

model = load_model('models/F_mnist_model.pth')

label_map = {
    0: 'T-shirt/top',
    1: 'Trouser',
    2: 'Pullover',
    3: 'Dress',
    4: 'Coat',
    5: 'Sandal',
    6: 'Shirt',
    7: 'Sneaker',
    8: 'Bag',
    9: 'Ankle boot'
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict_image():
    if 'file' not in request.files:
        return jsonify({
            'error': 'No file uploaded'
        }), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({
            'error': 'No selected file'
        })
    
    if file:
        img = Image.open(file)
        processed_img = transform_image(img)

        prediction = model(processed_img)
        result = torch.argmax(prediction, dim=1).item()
        label = label_map.get(result, 'Unknown')

        return jsonify({
            'prediction' : label
        })
    
    else:
        return jsonify({
            'error': 'Invalid file'
        })

if __name__ == '__main__':
    app.run(debug=True)