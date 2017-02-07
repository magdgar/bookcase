from os import abort

from flask import Blueprint, jsonify, request

reading_info = Blueprint('reading_info', __name__, template_folder='templates')
reading_informations = []


@reading_info.route('/add_reading_info', methods=['POST'])
def add_info():
    if not request.json:
        abort(400)

    info = {
        'id': reading_informations.__len__() + 1,
        'user_id': request.json['user_id'],
        'book_id': request.json['book_id'],
        'state': request.json['state'],
        'note': request.json.get('note')
    }
    reading_informations.append(info)
    return jsonify({"reading_info": info})
