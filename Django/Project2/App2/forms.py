from django import forms
from App2.models import Users


class UserSignUp(forms.ModelForm):
    class Meta:
        model = Users
        fields='__all__'
        

