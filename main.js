// 정규 표현식으로 검색할 문자데이터 생성
const str = `
010-1234-5678
thetin@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
help
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

const h = `  the hello  world       !

`

console.log(
    str.match(/.{1,}(?=@)/g)
)
console.log(
    str.match(/(?<=@).{1,}/g)
)

// 백틱 기호를 통해 문자를 만들 수 있고 따옴표와 다르게
// 문자 줄바꿈 처리 가능

// 생성자 방식 const regexp = new RegExp('the', 'gi')
// 리터럴 방식
const regexp = /\s/g

// const regexp = /\.$/g

// ⓐ이스케이프 문자란
// \(백슬래시) 기호로 본래 기능에서 벗어나 상태가 바뀌는 문자
// 한국어 원화가 적힌거에 있음

// ⓑ 마침표 뒤에만 붙여야하는 $
// 앞 단어가 해당되는 줄이 끝나는 부분을 찾아 일치시킴


// /h..p/g로 하면 h로 시작하고 p로 끝나는 모든 문자를 찾는다
// /https?/g 로 하면 ? 앞에 있는 s가 있을수도 없을수도 있는걸 모두 찾음


// /d{2}/ d라는 문자가 2번 반복되는 걸 찾음
// /d{2,}/ d 문자가 2개 이상 연속되는 걸 찾음 => dddd가 출력

// /\w{2,3}/g \w로 하면 숫자를 포함한 영어와 알파벳을 의미.
//  => 2번이상 3번이하 반복되는 모든 값이 출력되므로 좋진 않음
// ⓒ /\b\w{2,3}\b/g \b로 경계를 만들면 유용. 숫자와 문자가 아닌
// 특수문자를 제외시키기 때문에 '010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog' 이 출력


///\bf\w{1,}\b/g f라는 단어로 시작하고 특수문자 경계 안에 있는 모든 문자
console.log(h.replace(/\s/g, ''))


// console.log(str.match(/the/g)) 라고 해도 결과 변화 없음
console.log(str.match(regexp))
console.log(regexp.test(str))
console.log(str.replace(regexp, 'AAA'))
// 원본 데이터 유지됨
console.log(str)
// MATCH 함수는 셀 범위에서 지정된 항목을 검색하고
// 범위에서 해당 항목이 차지하는 상대 위치를 반환

// 재할당이 가능한 let 으로 바꾼 후 
let strr =  `
010-1234-5678
thetin@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`   // 여기가 문자데이터 끝나는 부분

//정규식으로 대체한 내용을 가져와서 재할당하면
// 원본내용 바뀜
strr = str.replace(regexp, 'AAA')
console.log(strr)