# todos/api/urls.py

from rest_framework import routers

from .views import MedViewSet

router = routers.DefaultRouter()
router.register('meds', MedViewSet, 'meds')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls