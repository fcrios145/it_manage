from django.db import models

from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings

# Create your models here.


class Ubicacion (models.Model):
    nombre = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class PC (models.Model):
    ubicacion = models.ForeignKey(Ubicacion, on_delete=models.CASCADE)
    responsable = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class TipoHardware (models.Model):
    nombre = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nombre;


class Hardware (models.Model):
    nombre = models.CharField(max_length=256)
    descripcion = models.CharField(max_length=256)
    tipo_hardware = models.ForeignKey(TipoHardware, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.tipo_hardware.nombre + " - " + self.nombre


class Software (models.Model):
    nombre = models.CharField(max_length=256)
    descripcion = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class SoftwarePC (models.Model):
    pc = models.ForeignKey(PC, on_delete=models.CASCADE)
    software = models.ForeignKey(Software, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class HardwarePC (models.Model):
    pc = models.ForeignKey(PC, on_delete=models.CASCADE)
    hardware = models.ForeignKey(Hardware, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



# This code is triggered whenever a new user has been created and saved to the database

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
