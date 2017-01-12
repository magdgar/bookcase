from os import abort

from flask import Blueprint, jsonify, request

simple_page = Blueprint('simple_page', __name__, template_folder='templates')
books = []


@simple_page.route('/book', methods=['GET'])
def get_book():
    return jsonify({"book": "boook"})


@simple_page.route('/add_book', methods=['POST'])
def add_book():
    if not request.json:
        abort(400)

    book = {
        'id': books.__len__() + 1,
        'author': request.json['author'],
        'title': request.json['title'],
        'publication_date': request.json.get('publication_date')
    }
    books.append(book)
    return jsonify({"book": book})
