from flask import Blueprint, jsonify

simple_page = Blueprint('simple_page', __name__, template_folder='templates')


@simple_page.route('/book', methods=['GET'])
def get_book():
    return jsonify({"book": "boook"})
