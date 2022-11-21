import json

from flask import Flask, Response
from flask import request
from flask_cors import CORS

from services import tweets
app = Flask(__name__)
cors = CORS(app)

@app.route("/tweets")
def get_tweets():
    user = request.args.get("user")
    return {"data": tweets.get_tweets(user)} if request.args.get('user') else Response("{'user': 'User must be valid'}", status=400)

if __name__ == '__main__':
	app.run(host="localhost",port=8080,debug=True)