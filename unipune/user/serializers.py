
from .models import User
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import authenticate
from rest_framework import serializers
#from twilio.rest import Client

class UserLoginSerializer(serializers.ModelSerializer):
    """
          User Authentication Serializer
    """
    email = serializers.EmailField(required=True, allow_blank=False)

    class Meta:
        model = User
        fields = (
            'password',
            'email',
        )
        extra_kwargs = {
            'password': {
                'write_only': True
            },
            'first_name': {
                'allow_blank': True,
                'required': False
            }
        }

    def validate(self, data):  # pylint: disable=arguments-differ
        """
            User Authentication
        """
        user = authenticate(email=data['email'], password=data['password'])
        if not user:
            raise AuthenticationFailed(detail='Invalid Credentials')
        return user

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id','email','password','first_name','last_name','contact_no','faculty']

    '''def create(self, valid_data):  # pylint: disable=arguments-differ
        email = valid_data.pop('email')
        password = valid_data.pop('password')
        account_sid = 'AC0e5bfb488cbe8bc41bdfb9b88ede331b'
        auth_token = 'your_auth_token'
        client = Client(account_sid, auth_token)

        message = client.messages \
                .create(
                     body="Join Earth's mightiest heroes. Like Kevin Bacon.",
                     from_='+918698350598',
                     to='+919270088467'
                 )

        print(message.sid)
        return User.objects.create_user(email=email,password=password, **valid_data)'''
        
