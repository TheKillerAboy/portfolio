
from flask import Flask, render_template


def register(app: Flask):
    @app.route("/blog")
    def blog():
        return render_template("blog.html")
