from datetime import datetime

from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    """
    用户管理
    后台管理员用户名：LearnSEL
    邮箱：info@learnsel.com
    密码：info@learnsel.com
    """
    birthday = models.DateField(null=True, blank=True, verbose_name="出生年月", help_text="出生年月自动计算年龄")
    gender = models.CharField(max_length=6, choices=(("male", "男"), ("female", "女")), default="male", verbose_name="性别", help_text="性别默认男")
    mobile = models.CharField(null=True, blank=True, max_length=11, verbose_name="电话", help_text="中国大陆手机号")
    email = models.CharField(max_length=100, null=True, blank=True, verbose_name="邮箱", help_text="邮箱号选填")

    class Meta:
        verbose_name = "用户"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username


class VerifyCode(models.Model):
    """
    短信验证码
    """
    code = models.CharField(max_length=10, verbose_name="验证码", help_text="云片网发送")
    mobile = models.CharField(max_length=11, verbose_name="电话", help_text="中国大陆手机号")
    add_time = models.DateTimeField(default=datetime.now, verbose_name="添加时间", help_text="短信发送时间")

    class Meta:
        verbose_name = "短信验证码"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.code
