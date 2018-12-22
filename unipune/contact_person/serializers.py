from rest_framework import serializers
from .models import ContactPerson
import sendgrid
from sendgrid.helpers.mail import *
from user.models import User 
		

class ContactPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactPerson
        fields = ('id', 'email', 'name', 'reson', 'status', 'date_to_meet')

    def create(self,  validate_data):
        email = validate_data.get('email')
        
        reson = validate_data.get('reson')
        
        token = self.context['request'].data.get('token')
        
        user = self.context['request'].user
         
        sg = sendgrid.SendGridAPIClient(apikey='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')
        from_email = Email("PUSecuritySystem@example.com")
        to_email = Email(email)
       
        subject = '' +user.first_name + ' ' + user.last_name+ ' want to meet you'
       
        res = ContactPerson.objects.create(user=user, **validate_data)
        content = Content("text/plain", "this person want to meet becose \n"+ reson +"\n you plise give responce on clik on following links\n" + "http://localhost:4200/date/?token="+token+'&id='+str(res.id))
        mail = Mail(from_email, subject, to_email, content)
        
        response = sg.client.mail.send.post(request_body=mail.get())
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return res
