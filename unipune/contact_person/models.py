from django.db import models
from user.models import User

# Create your models here.
class ContactPerson(models.Model):
    """
       Abstract model class for Timestamps
    """
    email = models.CharField(max_length=255)
    name = models.CharField(max_length=50)
    reson = models.TextField()
    status = models.CharField(max_length=1)
    date_to_meet = models.DateTimeField(null=True, blank=True)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name=None)
