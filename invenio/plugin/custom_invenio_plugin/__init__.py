def init_app(app):
    """Initialize application."""
    from . import views

    @app.before_first_request
    def init_menus():
        views.init_main_menu()

    @app.route("/debug-menu")
    def debug_menu():
        """Debug endpoint to view menu structure."""
        result = []

        def inspect_menu(menu_node, level=0):
            indent = "  " * level
            for child in menu_node.children:
                item_info = {
                    "name": child.name,
                    "endpoint": getattr(child, "_endpoint", None),
                    "url": getattr(child, "url", None),
                    "text": getattr(child, "_text", None),
                    "order": child.order,
                    "has_children": bool(child.children),
                }
                result.append(f"{indent}{item_info}")
                if child.children:
                    inspect_menu(child, level + 1)

        inspect_menu(current_menu.submenu("main"))
        return "<pre>" + "\n".join(result) + "</pre>"

    return app
