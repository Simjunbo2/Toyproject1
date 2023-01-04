const quotes = [ 
{ 
  quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.", 
  author: "사무엘 존슨" 
},    
{ 
  quote: "늦었다고 생각할 때가 가장 늦은 법이다.",
  author: "박명수",
},
{
  quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
  author: "괴테",
},
{
  quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 ",
  author: "찰리 채플린",
},
{
  quote: "1퍼센트의 가능성, 그것이 나의 길이다",
  author: "나폴레옹",
},
{
  quote: "화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며 자신의 행동에 쏟아 붓는 사랑의 정도이다.",
  author: "머더 테레사",
},
{
  quote:  "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
  author: "톨스토이",
},
{
  quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
  author: "헬렌 켈러",
},
{
  quote: "도저히 손댈 수가 없는 곤란에 부딪혔다면 과감하게 그 속으로 뛰어들라 . 그리하면 불가능하다고 생각했던 일이 가능해진다.",
  author: "???",
},
{
    quote: "모든것들에는 나름의 경이로움과 심지어 어둠과 침묵이 있고 , 내가 어떤 상태에 있더라도 나는 그속에서 만족하는 법을 배운다.",
    author: "헬렌 켈러",
},
           










];
 
const quote =  document.querySelector("#quote span:first-child");  
const author =  document.querySelector("#quote span:last-child");  
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];  

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;