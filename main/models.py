from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
# Класс для комментариев
class Comments(models.Model):
  user = models.ForeignKey(
    User,
    verbose_name="Пользователь",
    on_delete=models.CASCADE)
  text = models.TextField("Комментарий")
  created = models.DateTimeField("Дата добавления", auto_now_add=True, null=True)
  moderation = models.BooleanField("Модерация", default=False)

  class Meta:
    verbose_name = "Комментарий"
    verbose_name_plural = "Комментарии"

    def __str__(self):
      return "{}".format(self.user)