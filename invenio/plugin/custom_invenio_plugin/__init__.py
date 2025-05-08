def init_app(app):
    """Initialize application."""
    from . import views

    app.register_blueprint(views.blueprint)
    app.before_first_request(views.init_main_menu)

    return app
