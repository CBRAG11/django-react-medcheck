# todos/models.py

from django.db import models


class Med(models.Model):
    name = models.CharField(max_length=255)
    avg_dosage = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name