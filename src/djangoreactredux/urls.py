from django.conf import settings
from django.conf.urls import include, url
from django.views.decorators.cache import cache_page
from rest_framework.documentation import include_docs_urls
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter

import xadmin
from base import views as base_views

from users.views import SmsCodeViewSet, UserViewSet

router = DefaultRouter()
router.register(r'smscodes', SmsCodeViewSet, base_name="smscodes")
router.register(r'users', UserViewSet, base_name="users")

urlpatterns = [
    url(r'^xadmin/', xadmin.site.urls),
    url(r'^login/', obtain_jwt_token),
    url(r'^api/', include(router.urls), name="api"),
    url(r'docs/', include_docs_urls(title="文档功能")),

    # url(r'^api/v1/accounts/', include('accounts.urls', namespace='accounts')),
    # url(r'^api/v1/getdata/', include('base.urls', namespace='base')),

    # catch all others because of how history is handled by react router - cache this page because it will never change
    url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(base_views.IndexView.as_view()), name='index'),
]
