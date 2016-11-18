from django.contrib.auth.models import User, Group
from rest_framework import serializers
from it_manage_app.models import TipoHardware, Hardware


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')

class TipoHardwareSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TipoHardware
        fields = ('id', 'nombre',)

class HardwareSerializer(serializers.ModelSerializer):
    tipo_hardware_nombre = serializers.CharField(source='tipo_hardware.nombre', read_only=True)
    class Meta:
        model = Hardware
        fields = ('id', 'nombre', 'descripcion', 'tipo_hardware', 'tipo_hardware_nombre')
