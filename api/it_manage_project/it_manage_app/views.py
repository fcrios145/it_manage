from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from it_manage_app.serializers import UserSerializer, GroupSerializer, TipoHardwareSerializer

from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from it_manage_app.models import TipoHardware


from rest_framework import status
from django.http import Http404

class UserViewSet(viewsets.ModelViewSet):
    # authentication_classes = (SessionAuthentication, BasicAuthentication)
    # permission_classes = (IsAuthenticated,)
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    # authentication_classes = (SessionAuthentication, BasicAuthentication)
    # permission_classes = (IsAuthenticated,)
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


# class TipoHardwareViewSet(viewsets.ModelViewSet):
    # # authentication_classes = (SessionAuthentication, BasicAuthentication)
    # # permission_classes = (IsAuthenticated,)
    # """
    # API endpoint that allows groups to be viewed or edited.
    # """
    # queryset = TipoHardware.objects.all()
    # serializer_class = TipoHardwareSerializer


class TipoHardwareViewSet(APIView):
    # authentication_classes = (SessionAuthentication, BasicAuthentication)
    # permission_classes = (IsAuthenticated,)
    def get(self, request, format=None):
        queryset = TipoHardware.objects.all()
        serializer = TipoHardwareSerializer(queryset, many=True)
        return Response(serializer.data)


    def post(self, request, format=None):
        # snippet = self.get_object(pk)
        serializer = TipoHardwareSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

