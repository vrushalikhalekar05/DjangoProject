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
        
        user = User.objects.get(id=self.context['request'].user.id)
         
        sg = sendgrid.SendGridAPIClient(apikey='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')
        from_email = Email("test@example.com")
        to_email = Email(email)
        print("hiii")
       
        subject = '' +user.first_name + ' ' + user.last_name+ ' want to meet you'
       
        content = Content("text/plain", "this person want to meet becose \n"+ reson +"\n you plise give responce on clik on following links\n" + "http://localhost:4200/contact-person/?token="+token)
        mail = Mail(from_email, subject, to_email, content)
        
        response = sg.client.mail.send.post(request_body=mail.get())
        print(response.status_code)
        print(response.body)
        print(response.headers)

        
        return  ContactPerson.objects.create(user=user, **validate_data)
