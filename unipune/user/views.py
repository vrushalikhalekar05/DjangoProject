from django.shortcuts import render
from .serializers import UserLoginSerializer
from django.contrib.auth import login
from knox.views import LoginView as KnoxLoginView
from rest_framework import permissions

class UserLoginView(KnoxLoginView):
    """
       Login View overriding the base knox login view
    """
    permission_classes = [permissions.AllowAny]
    
    def post(self, request, format=None):  # pylint: disable=redefined-builtin
        print("*****************",request.data) 
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        login(request, user)
        return super(UserLoginView, self).post(request, format=None)

