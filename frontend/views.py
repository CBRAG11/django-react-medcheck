# frontend/views.py

from django.shortcuts import render
from django.views.generic.detail import DetailView

from meds.models import Med


def index(request):
    return render(request, 'frontend/index.html')


class MedDetailView(DetailView):
    model = Med
    template_name = 'frontend/index.html'