from flask import Flask
from portfolio.pages.index import register as index_register
from portfolio.pages.portfolio import register as portfolio_register
from portfolio.pages.blog import register as blog_register

def register(app: Flask):
    index_register(app)
    portfolio_register(app)
    blog_register(app)