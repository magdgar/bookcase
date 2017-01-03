from flask import Flask
from flask import request

app = Flask(__name__)
users = []


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/add_user/', methods=['POST'])
def add_user():
    user = {
        'id': users.__len__() + 1,
        'name': request.json.get('name', ""),
        'email': request.json.get('email', "")
    }
    users.append(user)
    return str(user)


@app.route('/users/')
def hello():
    return str(users)


if __name__ == '__main__':
    app.run()