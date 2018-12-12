from django.shortcuts import render
from .serializers import ContactPersonSerializer
from rest_framework import viewsets
from .models import ContactPerson

# Create your views here.
class ContactPersonViewset(viewsets.ModelViewSet):                  #pylint: disable=too-many-ancestors
    """
     OrderViewset is used to OrderAPI.
    """
    http_method_names = ('get', 'post', 'patch', 'delete')
    serializer_class = ContactPersonSerializer
    queryset = ContactPerson.objects.all()
    def get_queryset(self):
        return ContactPerson.objects.filter(user=self.request.user)
