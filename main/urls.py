from django.conf.urls import url
from django.contrib import admin
from main import views

urlpatterns = [
  url(r'^admin/', admin.site.urls),
  url(r'^$', views.home, name='home'),
  url(r'^aboutbz.html', views.aboutbz, name='aboutbz'),
  url(r'^login_old.html', views.login_old, name='login_old'),
  url(r'^feedback.html', views.feedback, name='feedback'),
  url(r'^feedback_online.html', views.feedback_online, name='feedback_online'),
  url(r'^register.html', views.RegisterFormView.as_view()),
  url(r'^login.html', views.LoginFormView.as_view()),
  url(r'',views.LogoutView, name="logout_user"),
  url(r'^images/(?P<path>.*)$', views.images, name='images'),
]

