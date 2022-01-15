import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const stringTime = new Date().toLocaleTimeString() // сетаем в стейт на 9 строке. string time вынесли на самый верх, чтобы useState [date,setDate] видел ее

    const [timerId, setTimerId] = useState<number>(0) // стейт просто для записи айдишки у window.setInterval
    const [date, setDate] = useState<string>(stringTime) // берем из переменной в 5 строке
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => { // в id записывается id У window.setInterval
            let date = new Date().toLocaleTimeString()
            setDate(date)
        }, 1000)
        setTimerId(id) // сетаем id
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringDate = new Date().toLocaleDateString() // при наведении на время отрисуется само. обновится тоже при наведении и само

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {date}
                {/* берем значение из стейта. Раньше было stringTime. Оно отрисовывалось сразу при загрузке страницы и начинало считать (но не перерисовывалось. считалось под капотом)
                // сейчас тоже отрисовывается при загрузке страницы, но не считает пока не нажмем кнопку*/}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
