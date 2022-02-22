# main > urls.py
from django.urls import path,include
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.main_ind, name='index2'),
    path('cha/', views.cha_ind, name='cha'),
    path('sungmo/', views.sungmo_ind,name='sungmo'),
    path('index/', views.index_ind, name='index'),

    path('index/restaurantDetail/<str:res_id>', views.restaurantDetail, name='resDetailPage'),  # 맛집 상세보기

    # 맛집 수정하기 버튼을 처리하는 url
    path('index/restaurantDetail/updatePage/update', views.Update_restaurant, name='resUpdate'),

    # <str:변수명> 코드는 url에 내용이 고정되지 않고 상황에 따라 변할때 사용할 수 있는 url 패턴
    # 뒤에 변수는 처리함수에서 파라미터로 받아줘야 함 - 통신규칙임

    path('index/restaurantDetail/updatePage/<str:res_id>', views.restaurantUpdate, name='resUpdatePage'),
    # html 파일을 찾을때는 무조건 Templates 디렉터리안에서 찾는다 # 맛집 내용수정
    # url 뒤에 변수가 추가되어 있으므로 처리함수에서 파라미터로 받아줘야함

    path('index/restaurantCreate/', views.restaurantCreate, name='resCreatePage'),
    path('index/restaurantCreate/create', views.Create_restaurant, name='resCreate'),
    path('index/categoryCreate/', views.categoryCreate, name='cateCreatePage'),
    path('index/categoryCreate/create', views.Create_category, name='cateCreate'),
    path('index/categoryCreate/delete', views.Delete_category, name='cateDelete'),
    path('samsung/', views.samsung_ind, name='samsung'),
]