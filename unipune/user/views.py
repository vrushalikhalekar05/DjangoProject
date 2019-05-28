from django.shortcuts import render
from .serializers import UserLoginSerializer, UserSerializer
from .models import User
from django.contrib.auth import login
from knox.views import LoginView as KnoxLoginView
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet

class UserLoginView(KnoxLoginView):
    """
       Login View overriding the base knox login view
    """
    permission_classes = [permissions.AllowAny]
    
    def post(self, request, format=None):  # pylint: disable=redefined-builtin 
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        login(request, user)
        return super(UserLoginView, self).post(request, format=None)


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
