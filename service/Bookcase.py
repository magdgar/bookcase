from flask import Flask
from flask import request
from flask.ext.restplus import abort

app = Flask(__name__)
users = []


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/user', methods=['POST'])
def add_user():
    if not request.json:
        abort(400)

    user = {
        'name': request.json['name'],
        'email': request.json['email']
    }
    users.append(user)
    return str(user)


@app.route('/users', methods=['GET'])
def hello():
    return str(users)

if __name__ == '__main__':
    app.run()
