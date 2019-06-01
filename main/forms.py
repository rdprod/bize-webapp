from django.contrib.auth.models import User
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.forms import ModelForm
from .models import Comments

# Форма регистрации
class RegisterForm(UserCreationForm):
  username = forms.CharField(label = "Nickname")
  email = forms.EmailField(label = "E-mail")
  first_name = forms.CharField(label = "Name")
  last_name = forms.CharField(label = "Surname")
  
  class Meta:
    model = User
    fields = ('username', 'email', 'first_name', 'last_name', )


# Форма для комментариев
class CommentForm(ModelForm):

  class Meta:
    model = Comments
    fields = ('text', )