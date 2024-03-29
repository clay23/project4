"""`main` is the top level module for your Flask application."""

from flask import Flask, request
from flask import render_template
import urllib2
import json
import random
import uuid
from google.appengine.api import users
from google.appengine.api import channel
#from utilities import funnames
app = Flask(__name__)
# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.

@app.route('/')
def start(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('Start.html',name=name)
    
@app.route('/game.html')
def game1(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('game.html',name=name)
    
@app.route('/game1.html')
def game2(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('game1.html',name=name)
    
@app.route('/game2.html')
def game_2(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('game2.html',name=name)
    
    
@app.route('/')
def index():
    """Setup a chat"""
    roomid = generate_id()
    template_values = {
                       "roomid":roomid
                                     }
    return render_template("index.html",values=template_values)

@app.route('/<roomid>/<name>')
def chatroom_and_name(roomid,name):
    """Return a chat page"""
    token = channel.create_channel(name + roomid) 
    template_values = {
                       "roomid":roomid,
                        "token": channel.create_channel(name + roomid),
                        "yourname": name
                       }
    return render_template("chat.html",values=template_values)

@app.route('/<roomid>')
def chatroom(roomid):
    """Return a chat page prompt for name
    then redirect to chatroom_and_name"""
    
    template_values = {
                       "roomid":roomid,
                       }
    return render_template("getname.html",values=template_values)
    

@app.route('/sendmessage/<user>/<roomid>', methods=['GET', 'POST'])
def sendmessage(user,roomid):
    """sends a message that is useless"""
    message = request.form['message']
    channel.send_message(user+roomid,message)
    
@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, No Valid Chatroom There.', 404

def generate_id():
    """Return a game id"""
    return "%s-%s" % (str(uuid.uuid4())[:4],random.choice(funnames).lower())

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, Nothing at this URL.', 404


@app.errorhandler(500)
def page_not_found(e):
    """Return a custom 500 error."""
    return 'Sorry, unexpected error: {}'.format(e), 500
