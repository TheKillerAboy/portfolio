from flask import Flask
from portfolio.pages import register

def create_app() -> Flask:
    app = Flask(
        __name__,
        static_url_path='/', 
        static_folder='web/static',
        template_folder='web/templates'
    )

    register(app)

    return app

app = create_app()

if __name__ == '__main__':
    app.run(host='localhost', port=8080)