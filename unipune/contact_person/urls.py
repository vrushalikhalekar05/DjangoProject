from rest_framework import routers
from .views import ContactPersonViewset


ROUTER = routers.SimpleRouter()
ROUTER.register(r'', ContactPersonViewset)
urlpatterns = ROUTER.urls