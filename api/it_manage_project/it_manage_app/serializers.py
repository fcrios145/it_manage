from django.contrib.auth.models import User, Group
from rest_framework import serializers
from it_manage_app.models import TipoHardware, Hardware, Ubicacion, Persona, PC, HardwarePC


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

class UbicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ubicacion
        fields = ('id', 'nombre')

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ('id', 'nombre', 'departamento')

class HardwarePCSerializer(serializers.ModelSerializer):
    class Meta:
        model = HardwarePC
        fields = ('id', 'pc', 'hardware')

class PcSerializer(serializers.ModelSerializer):
    hardwarePC = HardwarePCSerializer(many=True)

    class Meta:
        model = PC
        fields = ('id', 'ubicacion', 'persona', 'hardwarePC')