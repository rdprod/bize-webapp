from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# Класс для комментариев
class Comment(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  text = models.TextField()

  def __str__(self):
    return '%s %s' % (self.user, self.text)