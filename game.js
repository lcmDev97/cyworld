const startWord = () => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText
    if(!myword){
        return document.getElementById("result").innerText = "단어를 입력해주세요"
    }

    let lastword = word[word.length - 1]
    let firstword = myword[0]

    if(lastword === firstword){
        document.getElementById("result").innerText = "정답입니다."
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    }else{
        document.getElementById("result").innerText = "떙"
        document.getElementById("myword").value = ""
    }

}

const startLotto = () => {
    let lotto = []
    for(let i = 0; i < 6; i++){
        let num = Math.floor(Math.random() * 44) + 1
        
        for(let x in lotto){
            while(num === lotto[x]) {
                num = Math.floor(Math.random() * 44) + 1
            }
        }
        lotto.push(num);
    }
    lotto.sort((a,b)=>a-b)

    // lotto 배열 만듬 = [8,12,23,32,41,44] 이제 바꿔주기만 하면됨
    for(let i = 0; i < 6; i++){
        document.getElementById(`lotto${i+1}`).innerText = lotto[i]
    }
    document.getElementById("game__subtitle").innerText = "당첨되면 날 잊지 말아줘..."
    document.getElementById("game__lotto__button").innerText = "재추첨"
}