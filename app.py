from flask import Flask, send_from_directory, Response
import subprocess
from pathlib import Path

app = Flask(__name__)

react_folder = 'dae'
directory = Path(react_folder) / 'build' / 'static'


@app.route('/')
def index():
    ''' User will call with their id to store the symbol as registered'''
    path = Path(react_folder) / 'build'
    print(path)
    return send_from_directory(directory=str(directory), path='index.html')


@app.route('/static/<folder>/<file>')
def css(folder, file):
    ''' User will call with their id to store the symbol as registered'''
    path = directory / folder / file
    return send_from_directory(directory=str(directory), path=str(path))


@app.route('/runcanvas', methods=['POST'])
def run_canvas():
    subprocess.run(['python', './AC.py'], check=True)
    return Response(status=204)


@app.route('/runHand', methods=['POST'])
def run_hand():
    subprocess.run(['python', './hand_gesture.py'], check=True)
    return Response(status=205)


if __name__ == '__main__':
    app.run()
