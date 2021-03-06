(function()
{
  const pack = {
    id: 'syntax-basics',
    title: '기본 문법 훈련',
    levels: [
      {
        id: 'operators',
        title: '기본 연산자',
        description: '기본적인 입력과 출력을 훈련합니다.',
        problems: [
          {
            id: 'a_plus_b',
            name: 'A + B'
          },
          {
            id: 'rect_area',
            name: '직사각형 넓이 구하기'
          },
          {
            id: 'apple_distribution',
            name: '사과 나누기'
          },
          {
            id: 'c_to_f',
            name: '섭시 온도를 화시로 바꾸기'
          },
          {
            id: 'seconds_formating',
            name: '초를 시간 형식에 맞추기'
          },
          {
            id: 'last_number',
            name: '마지막 수'
          },
          {
            id: 'digit_10',
            name: '십의 자리'
          },
          {
            id: 'decimal',
            name: '소수부'
          },
          {
            id: 'mean',
            name: '수의 평균 구하기'
          },
          {
            id: 'total_price',
            name: '총 가격'
          },
          {
            id: 'money_count',
            name: '지폐의 수'
          }
        ]
      }
    ]
  };
  loadedProblemPack(pack);
})();