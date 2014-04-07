"""`main` is the top level module for your Flask application."""

# Import the Flask Framework
from flask import Flask
from flask import render_template
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
    
@app.route('/game_1.html')
def game2(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('game_1.html',name=name)


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, Nothing at this URL.', 404


@app.errorhandler(500)
def page_not_found(e):
    """Return a custom 500 error."""
    return 'Sorry, unexpected error: {}'.format(e), 500
