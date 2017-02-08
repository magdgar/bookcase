import os

from flask import Flask, render_template

app = Flask(__name__, template_folder='template')

#
# settings.configure(
#     RENDER=True,
#     RENDER_URL='http://127.0.0.1:9009/render'
# )


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
