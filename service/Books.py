from os import abort

from flask import Blueprint, jsonify, request

simple_page = Blueprint('simple_page', __name__, template_folder='templates')
books = []

@simple_page.route('/book', methods=['GET'])
def get_book():
    return jsonify({"book": "boook"})


@simple_page.route('/user', methods=['POST'])
def add_user():
    if not request.json:
        abort(400)

    user = {
        'id': books.__len__() + 1,
        'author': request.json['author'],
        'title': request.json['title'],
        'IBN': request.json['IBN'],
        'publication_date': request.json['publication_date']
    }
    books.append(user)
    return jsonify({"user": user})