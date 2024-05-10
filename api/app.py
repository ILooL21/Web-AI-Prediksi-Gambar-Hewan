from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
# config cors to allow all origins and methods
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_METHODS'] = ['POST', 'GET', 'OPTIONS']

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part in the request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'message': 'No file selected for uploading'}), 400

    file.save('upload/' + file.filename)
    return jsonify({'message': 'File successfully uploaded'}), 200

if __name__ == '__main__':
    app.run(debug=True)