# todos/api/views.py

from rest_framework import viewsets

from .serializers import MedSerializer
from meds.models import Med


class MedViewSet(viewsets.ModelViewSet):
    queryset = Med.objects.all()
    serializer_class = MedSerializer