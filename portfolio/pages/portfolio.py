
from flask import Flask, render_template


def register(app: Flask):
    @app.route("/portfolio")
    def portfolio():
        return render_template("portfolio.html")
