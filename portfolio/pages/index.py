
from flask import Flask, redirect, render_template, url_for


def register(app: Flask):
    @app.route("/")
    def index():
        return redirect('/portfolio')
