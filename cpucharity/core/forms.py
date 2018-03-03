from django import forms
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

class LoginForm(forms.Form):
    username = forms.CharField(max_length=32)
    password = forms.CharField(max_length=32)

    def clean(self):
        input = self.cleaned_data

        if authenticate(username=input.get('username'),
         password=input.get('password')) is not None:
            pass
        else:
            self.add_error('username', 'Invalid credentials.')

        return input

class RegisterForm(forms.Form):
    username = forms.CharField(max_length=32)
    password = forms.CharField(max_length=32)
    vpassword = forms.CharField(max_length=32)

    def clean(self):
        input = self.cleaned_data
        password = input.get('password')

        if User.objects.filter(username=input.get('username')).exists():
            self.add_error('username', "Username is taken.")
        if password:
            if input.get('password') != input.get('vpassword'):
                self.add_error('password', 'Passwords do not match.')

        return input
