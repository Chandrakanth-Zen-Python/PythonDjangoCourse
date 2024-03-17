from django import forms
from MyApp.models import 


class MyForm(forms.Form):

    name=forms.CharField()

    email=forms.EmailField()

    text=forms.CharField(widget=forms.Textarea())