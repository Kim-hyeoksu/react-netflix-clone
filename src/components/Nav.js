import React, { useEffect, useState } from 'react'
import "./Nav.css"
export default function Nav() {
  const [show, setShow] = useState(false)

  //이벤트 리스너는 컴포넌트가 생성될 때 한번만 등록해주면 된다(2번째 인자로 빈 배열)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    //언마운트될 때 스크롤에 대한 이벤트가 발생할 때 호출되는 함수를 더이상 호출되지 않게 해당 이벤트 리스너를 없애준다
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])
  
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img 
      alt='Netflix logo'
      src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png"
      className='nav__logo'
      //새로고침
      onClick={()=>window.location.reload}/>
      <img 
      alt='User logged'
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      className='nav__avatar'/>
    </nav>
  )
}
