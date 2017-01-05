from flask import Flask, jsonify
from flask import request
from flask.ext.restplus import abort

app = Flask(__name__)
users = []


@app.route('/book', methods=['GET'])
def get_book():
    return jsonify({"book": "boook"})


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = [user for user in users if user['id'] == user_id]
    if len(user) == 0:
        abort(404)
    return jsonify({"user": user[0]})


@app.route('/user', methods=['POST'])
def add_user():
    if not request.json:
        abort(400)

    user = {
        'id': users.__len__() + 1,
        'name': request.json['name'],
        'surname': request.json['surname'],
        'email': request.json['email']
    }
    users.append(user)
    return jsonify({"user": user})


@app.route('/all_users', methods=['GET'])
def hello():
    return str(users)


if __name__ == '__main__':
    app.run()
