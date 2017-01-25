from os import abort

from flask import Blueprint, jsonify, request

simple_page = Blueprint('simple_page', __name__, template_folder='templates')
authors = []


@simple_page.route('/author/<int:author_id>', methods=['GET'])
def get_author(author_id):
    author = [author for author in authors if author['id'] == author_id]

    if len(author) == 0:
        abort(404)
    return jsonify({"book": author[0]})


@simple_page.route('/add_author', methods=['POST'])
def add_author():
    if not request.json:
        abort(400)

    author = {
        'id': authors.__len__() + 1,
        'name': request.json['name'],
        'surname': request.json['surname'],
        'nickname': request.json.get('nickname')
    }
    authors.append(author)
    return jsonify({"author": author})
