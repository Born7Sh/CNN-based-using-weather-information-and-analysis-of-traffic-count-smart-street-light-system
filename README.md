# CNN을 기반으로한 기상정보 및 통행량 분석을 통한 스마트 교통 가로등(CNN based using weather information and analysis of traffic count smart street light system)

## 1. 참여자
최인호, 황석주, 장호민, 김지우

## 2. 개발배경
1. 가로등의 지리적 이점을 활용할 기능적 차별의 필요성
2. 가로등 사용 에너지의 비효율성 해결의 필요성
3. 도로 가로등의 기능적 확장에 대한 수요
4. 스마트 가로등 높은 활용도로 꾸준한 수요 발생

## 3. 개발 목표
1. 주변 환경의 변화에 따른 조도 조절을 통한 에너지 효율 증대 
2. 데이터를 수집 및 가공하여 적절하게 활용
3. 서버와 통신하며 현재 상태를 실시간으로 알리고 조절 
4. 가로등 주변 통행량 측정 및 카메라 영상 제공
5. 차량 및 사람의 통행을 감지하고 가로등을 효율적으로 운용
6. 기상 정보를 통해 가로등의 상태 및 기능을 적절하게 유지하고 관리

## 4. 기능
1. object detection 차량 및 사람 탐지 가능
![image](https://user-images.githubusercontent.com/20091175/123535719-944f7680-d760-11eb-9054-f3e74bd53a01.png)
2. 알고리즘에 따라 가로등의 빛의 밝기가 바뀜.
<img src = "https://user-images.githubusercontent.com/20091175/123535752-ce207d00-d760-11eb-8d16-24d34bd58cac.jpg" width = "250" height="400">
2-1. 날씨, 미세먼지 등에 따른 밝기 변화 <br>
2-2. 밝기에 따른 변화 <br>
2-3. 사람 및 차의 통행량에 따른 밝기 변화 <br>
2-4. 가로등 밝기가 1번 가로등 부터 순차적으로 켜지거나 밝기가 세짐.<br>
3. Web site
<img src ="https://user-images.githubusercontent.com/20091175/123535647-12f7e400-d760-11eb-8e02-4b73a7d07839.png">
4. 차량번호 추적 기능 -> 문제가 있는 차량 조회가능
## 차량번호 인식 되는 데이터 영역 표시와 분석한 사진
<img src ="https://user-images.githubusercontent.com/20091175/123535673-42a6ec00-d760-11eb-926a-b58510fc66a7.png">
<img src ="https://user-images.githubusercontent.com/20091175/123535682-581c1600-d760-11eb-9987-545ee6331f73.png">








