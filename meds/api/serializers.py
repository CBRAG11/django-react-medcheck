# todos/api/serializers.py

from rest_framework import serializers

from meds.models import Med


class MedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Med
        fields = '__all__'