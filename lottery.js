const MAX = 1000000

export const setupLottoDisp = (display, button) => {
    const drawLottoNum = () => {
        let num = Math.floor(Math.random() * MAX)

        display.innerHTML = `Your Number: ${num}`

        return num
    }

    const getLottoResult = (num) => {
        if (num >= 1 && num <= 1000) alert("Congratulations, you've won!")
        else return alert("Too bad, you've lost!")
    }

    const drawLottoNums = () => {
        let lottoNum = null
        let drawCount = 0

        setInterval(() => {
            if (drawCount < 10) {
                lottoNum = drawLottoNum()
                drawCount++
            }
            else {
                clearInterval()
            }
        }, 100)

        setTimeout(() => {
            getLottoResult(lottoNum)
        }, 100 * 11)
    }

    button.addEventListener('click', drawLottoNums)
}
