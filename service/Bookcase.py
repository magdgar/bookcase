from flask import Flask, jsonify, render_template
from flask import request
from flask.ext.restplus import abort
from flask.ext.pymongo import PyMongo

from service.Books import simple_page

app = Flask(__name__)
users = []

app.config['HOST'] = 'localhost'
app.config['PORT'] = 27017
app.config['DBNAME'] = 'bookcase'
mongo = PyMongo(app)


@app.route('/online_users')
def home_page():
    online_users = mongo.db.users.find({'active': True})
    render_template('index.html', online_users=online_users)


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
    app.register_blueprint(simple_page)
    app.register_blueprint(reading_info)
    app.run()
