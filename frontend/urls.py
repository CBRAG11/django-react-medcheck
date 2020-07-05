# frontend/urls.py

from django.urls import path

from .views import index, MedDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', MedDetailView.as_view()),
    path('delete/<int:pk>', MedDetailView.as_view()),
]