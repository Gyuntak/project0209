$('.controlButton').each(function(index){ // 5개의 control 버튼이 들어옴
        $(this).hover( // 5개 전부 말고 현재 접근한 controlButton에 올렸을 때 내렸을 때 모두 발생 -> 2가지 경우 발생
            function() { // 마우스를 컨트롤 버튼 위에 올렸을 때
                $(this).attr('src','image/controlButton2.png');
            },
            function() { // 마우스를 컨트롤 버튼 위에서 내렸을 때
                $(this).attr('src','image/controlButton1.png');
            }
        );