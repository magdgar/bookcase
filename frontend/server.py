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
    app.run(debug=True)
