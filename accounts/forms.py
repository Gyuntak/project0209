from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class UserForm(UserCreationForm) :
    email = forms.EmailField(label="이메일") # 이메일은 EmailField로 수정하여 형식 체크 기능 사용

    class Meta : # 기존 장고에서 제공하는 user 모델을 그대로 사용
        model = User
        fields = ("username","email")