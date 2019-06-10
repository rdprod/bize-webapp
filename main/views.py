from django.shortcuts import render
from django.contrib import auth
from django.http import HttpResponseRedirect
from django.views.generic.base import View
from django.views.generic.edit import FormView
from .forms import RegisterForm, CommentForm
from .models import Comment 
from django.shortcuts import redirect


# Опять же, спасибо django за готовую форму аутентификации.
from django.contrib.auth.forms import AuthenticationForm

# Функция для установки сессионного ключа.
# По нему django будет определять, выполнил ли вход пользователь.
from django.contrib.auth import login

from django.contrib.auth import logout



# Create your views here.
def home(request):
  username = auth.get_user(request)
  return render(request, 'main/index.html')
def aboutbz(request):
  return render(request, 'main/aboutbz.html')
def images(request):
  return render(request, 'static/images')


# РЕГИСТРАЦИЯ
class RegisterFormView(FormView):
  form_class = RegisterForm
  
  # Ссылка, на которую будет перенаправляться пользователь в случае успешной регистрации.
  # В данном случае указана ссылка на страницу входа для зарегистрированных пользователей.
  success_url = "/"
  
  # Шаблон, который будет использоваться при отображении представления.
  template_name = "main/register.html"

  def form_valid(self, form):
    # Создаём пользователя, если данные в форму были введены корректно.
    form.save()

    # Вызываем метод базового класса
    return super(RegisterFormView, self).form_valid(form)


# ВХОД
class LoginFormView(FormView):
  form_class = AuthenticationForm

  # Аналогично регистрации, только используем шаблон аутентификации.
  template_name = "main/login.html"

  # В случае успеха перенаправим на главную.
  success_url = "/feedback.html/"

  def form_valid(self, form):
    # Получаем объект пользователя на основе введённых в форму данных.
    self.user = form.get_user()

    # Выполняем аутентификацию пользователя.
    login(self.request, self.user)
    return super(LoginFormView, self).form_valid(form)


# ВЫХОД
class LogoutView(View):
  def get(self, request):
    # Выполняем выход для пользователя, запросившего данное представление.
    logout(request)

    # После чего, перенаправляем пользователя на главную страницу.
    return HttpResponseRedirect("/")



# КОММЕНТАРИИ
def feedback(request):
  if request.method == "POST":
    form = CommentForm(request.POST)
    if form.is_valid():
      comment = form.save(commit=False)
      comment.user = request.user
      comment.save()
      return redirect('feedback')
  else: 
    form = CommentForm()

  co = Comment.objects.all()
  context = {'form': form, 'comments': co}
  return render(request, 'main/feedback.html', context)