from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import *

# Create your views here.
def main_ind(request) :
    return render(request, 'main/index2.html')

def samsung_ind(request) :
    return render(request, 'main/삼성의료원.html')

def cha_ind(request) :
    return render(request, 'main/차병원.html')

def sungmo_ind(request) :
    return render(request, 'main/0215_new_do.html')

def index_ind(request) :
    return render(request, 'main/index.html')

def index(request) :
    # Category 테이블에 있는 모든 데이터를 추출
    categories = Category.objects.all()
    # Restaurant 테이블에 있는 모든 데이터를 추출
    restaurants= Restaurant.objects.all()

    # html 파일에서 사용할 dict 구성
    content = {'categories' : categories, 'restaurants':restaurants}

    # return HttpResponse("메인 페이지 입니다.")
    # 구성한 dict를 html 파일로 넘겨서 rendering 진행 - 카테고리 데이터, 레스토랑 데이터가 html파일로 전달됨
    return render(request, 'main/index.html', content)

def restaurantDetail(request, res_id) : # res_id 매개변수는 url.py에서 전달됨
    # print(res_id) # 맛집 id가 제대로 전달되고 있는지 확인하는 코드

    # 전달된 맛집 id를 이용해 db 테이블에서 해당 맛집 정보 얻어오기
    restaurant = Restaurant.objects.get(id=res_id)
    #해당 맛집 정보를 dict로 생성
    content = {'restaurant' : restaurant}
    # return HttpResponse("음식점 세부 내용 페이지 입니다.")
    return render(request, 'main/restaurantDetail.html', content)

def restaurantUpdate(request,res_id) :
    # 카테고리 수정을 위해서 Category 테이블의 모든 데이터 추출
    categories = Category.objects.all()
    # 해당 맛집 내용 수정을 위해서 Restaurant 테이블의 해당 id 레코드를 추출
    restaurant = Restaurant.objects.get(id=res_id)
    # html 파일에 전달할 dict 구성
    content = {'categories':categories,'restaurant':restaurant}
    return render(request,'main/restaurantUpdate.html',content)

def Update_restaurant(request) :
    resId = request.POST['resId'] # 맛집 id 얻어오기
    change_category_id = request.POST['resCategory'] # 맛집 카테고리 id 얻어오기
    # 클라이언트에게 넘겨받은 category_id를 사용해서 카테고리 테이블에서 해당 레코드를 추출한 후 레코드 인스턴스를 저장해야함
    change_category = Category.objects.get(id=change_category_id)
    change_name = request.POST['resTitle'] # 맛집이름
    change_link = request.POST['resLink'] # 맛집 링크
    change_content = request.POST['resContent'] # 맛집 세부내용

    # 위에서 전달받은 데이터를 새로운 레코드로 추가 저장한느 것이 아니고, 기존에 있던 레코드의 내용을 수정하는 것이므로
    # 먼저 해당(이미 저장되어 있는) db 테이블에서 가져와서(get()사용)
    before_res = Restaurant.objects.get(id=resId) # 수정할 맛집 데이터를 select한 후
    # 수정할 데이터 객체에 새로운 값을 대입한 후
    before_res.category = change_category
    before_res.restaurant_name = change_name
    before_res.restaurant_link = change_link
    before_res.restaurant_content = change_content

    # 가져온 객체에 다시 저장(save()) -> update 발생
    before_res.save() # 해당 레코드가 수정됨
    # return HttpResponse('내용을 수정합니다.')
    # 맛집 수정 완료 후 출력할 페이지 redirect - 수정된 결괄르 보여줄 페이지(상세보기 페이지에서 수정결과 확인)
    ## return HttpResponseRedirect(reverse('index'))
    # 맛집 id가 파라미터로 전송되어야 함 reverse( , kwarge={})
    return HttpResponseRedirect(reverse('resDetailPage',kwargs={'res_id': resId}))


def restaurantCreate(request) :
    # Category table의 Category명을 가져와서 화면에 출력
    # Category table의 Category명을 가져오기
    categories = Category.objects.all()
    # dict로 구성
    content = {'categories':categories}
    # return HttpResponse("음식점 등록 페이지 입니다.")
    # 생ㅅ어한 dict content를 html 파일로 전송해서 렌더링진행
    return render(request, 'main/restaurantCreate.html',content)
    # restaurantCreate.html파일로 content가 전송되므로
    # restaurantCreate.html파일에 장고 프론트코드를 추가해서 content 내용이 출력되게 해야함

def Create_restaurant(request) :
    # 사용자가 입력한 카테고리, 맛집이름, 관련링크, 상세내용, 장소키워드를 얻어와서
    # 카테고리
    cate_id = request.POST['resCategory']
    # ValueError: Cannot assign "'일식'": "Restaurant.category" must be a "Category" instance.
    category = Category.objects.get(id=cate_id) # 해당 id 데이터가 Category 테이블에 없으면 Null값이 반환
    # 만약 Category값이 Null이면 기본그룹이 저장됨
    # 맛집이름
    name = request.POST['resTitle']
    # 관련링크
    link = request.POST['resLink']
    # 상세내용
    content = request.POST['resContent']
    # 장소 키워드

    # DB내의 테이블레 저장할때는 models.py파일내의 class를 활용
    # 테이블객체 변수 = 클래스명(필드명=값, 필드명=값, .....)
    new_rest = Restaurant(category=category,
                          restaurant_name=name,
                          restaurant_link=link,
                          restaurant_content=content,
                          )
    # 테이블객체변수.save()
    new_rest.save()

    # 아래 문장에 추가해서 강제응답하도록 코드를 수정하시오.
    # return HttpResponse("입력한 " + cate_id+' '+ name+' '+ link+' '+ content+' '+ keyw+' '+ "데이터를 DB에 저장하겠습니다.")

    # db 저장이 완료된 후 저장된 내용을 표시하기 위해 페이지 이동 -> http://127.0.0.1:8000 url로 이동(index로 이름지어져 있음)
    return HttpResponseRedirect(reverse('main:index'))


def categoryCreate(request) :
    # Category 테이블에 저장되어 있는 모든 데이터를 얻어오기
    categories = Category.objects.all() # 해당 테이블의 모든 데이터 가져오기
    # html파일에 rendering 하기 위해 dict 구성
    content = {'categories': categories}
    # return HttpResponse("분류 등록 페이지 입니다.")
    return render(request, 'main/categoryCreate.html', content)
    # categoryCreate.html 파일로 content data가 같이 전송됨 - html파일을 장고 프론트코드로 전달된 content가 반영되게 수정

def Create_category(request) : #새로운 카테고리 생성 함수 , http://127.0.0.1:8000/catagoryCreate/create url 요청에 응답하는 함수
    category_name = request.POST['categoryName'] # 사용자가 입력한 값 얻어오기(post 방식으로 전송되었으므로 .POST[] 사용
    # DB에 저장
    new_category = Category(category_name=category_name) # db에 저장할 준비
    new_category.save() # db에 저장
    return HttpResponseRedirect(reverse('main:index')) # db 저장 후에 http://127.0.0.1:8000 재 요청하는 코드
    # 재 요청된 후에는 새로 추가된 카테고리가
    # return HttpResponse(category_name + "값이 새 카테고리로 DB에 저장되었습니다.")


def Delete_category(request) :
    # 사용자가 특정 카테고리의 삭제버튼을 누르면 응답하는 함수
    # categoryId 이름의 변수에 삭제하고자 하는 category id값을 post방식으로 전달해 준다
    cate_id = request.POST['categoryId'] # hidden 태그에 의해 전달된 id값 얻어오기
    # db에서 삭제하기 위해 get 함수를 이용 해당 id의 객체를 얻는다.
    del_cate = Category.objects.get(id=cate_id) # 클라이언트에서 전달된 category id 값과 일치하는 레코드
    del_cate.delete() # 추출된 레코드를 최종 삭제
    # 카테고리 삭제 후 카테고리 추가하는 페이지를 재요청
    return  HttpResponseRedirect(reverse('main:cateCreatePage'))
