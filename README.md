## 실행
### `yarn start`

## Easy-Lottery가 제공하는 것
* 누구도 쉽게 예측할수 없는 랜덤번호로 추첨
  - 기존의 LotteryGame에서 나오는 불평, "공에 흙 채워넣은 것 아니냐?" 라는 소리가 나올 수 없음
  - 랜덤번호는 추첨전 25 블록 전의 블록해쉬로 계산함
  - LotteryGame응모는 추첨천 50블록 전부터는 할 수 없음
* 관리자 없는 EasyLottery게임
  - 누구나 추첨시간이 되면 추첨을 할 수 있음
  - 이때 추첨을 지원한 사람은 가스fee등으로 손해를 봤기때문에 모인 금액의 0.29%을 가져감
  - 기한이 지나거나 , 당첨자가 없으면 아주 적은 양은 없음, 많은 작업을 하지 않기 때문
* 개발자에게 후원
  - 개발자에게 아주아주아주 적은 금액이 들어감 0.01%
  
## 앞으로 개선해야할 것 
* UI 
  - 현재 모인 금액의 그래프 등을 그리면 멋질 것 같음
* 자신의 응모현황, 당첨결과 등을 볼 수 있어야함
  - 스마트컨트랙트 수정 필요
  - Event 사용해야할 듯 -> 비용 등 구글링 후 적용

## 연관 레포지토리
* smartContract
  - [easy-lottery-contract](https://github.com/JinDogNOOB/easy-lottery-contract)

# ScreenShot
<div>
 <img width="900" src="https://user-images.githubusercontent.com/49367014/104805767-c229aa00-5815-11eb-848b-1fc82a66ef2a.PNG">
 <img width="900" src="https://user-images.githubusercontent.com/49367014/104805768-c2c24080-5815-11eb-9897-d94c941ec5cd.PNG">
 <img width="900" src="https://user-images.githubusercontent.com/49367014/104805769-c3f36d80-5815-11eb-9136-0666ec4c7f20.PNG">
 <img width="900" src="https://user-images.githubusercontent.com/49367014/104805771-c48c0400-5815-11eb-94af-21349d8a502a.PNG">
 <img width="900" src="https://user-images.githubusercontent.com/49367014/104805773-c5249a80-5815-11eb-95b1-fbb50576ff63.PNG">
</div>
