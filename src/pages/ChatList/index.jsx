import React, { useState, useEffect,useRef } from 'react';
import test from './test.svg'
import Modal from "./modal";
import NewModal from "./newmodal";
import styles from './MyComponent.module.css';
import axios  from "axios";
import {Link} from "react-router-dom";
// 연습용 get delete
import { fetchData, deleteData } from './Testapi';
export default function ChatList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isnewModalOpen, setnewIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const opennewModal = () => setnewIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  const closenewModal = () => setnewIsModalOpen(false);


  // 기본적으로 작동하는 이벤트를 막고 새로운 함수를 할당
  // const open = (e) => {
  //     e.preventDefault();
  //     openModal();
  //
  // }

  const timer=useRef(null);
  const [isclick, setclick] = useState(false);
  const  handlemousedown=()=>{
    setclick(true);
    timer.current=setTimeout(openModal,1100);
    // 1.5초 누르면 openModal함수 실행

  }
  // 마우스 때지면 타이머 초기화
  const  handlemouseup=()=>{
    setclick(false);
    clearTimeout(timer.current);
  }


  const  Opennewmodal=()=>{
    opennewModal();
    closeModal();

  }
  const  Delete=(data)=>{
    handleDelete(data.id)

  }

  // 마우스 올렷을때 강조하고 싶은데
  const [isHighlighted, setIsHighlighted] = useState(false); // 강조 효과를 위한 상태 값

  function handleMouseOver() {
    setIsHighlighted(true); // 마우스가 위에 있을 때 상태 값을 true로 변경
  }

  function handleMouseLeave() {
    setIsHighlighted(false); // 마우스가 벗어날 때 상태 값을 false로 변경
  }

  const textStyle = {
    fontWeight: isHighlighted ? 'bold' : 'normal', // 강조 효과를 위한 CSS 속성
    color: isHighlighted ? 'red' : 'black'

  };
// 데이터 조회 삭제
  const [data, setData] = useState([]);

  // 컴포넌트가 마운트 될 때 fetchData를 호출
  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    loadData();
  }, []);

  // 삭제 후 데이터 다시 불러오기
  const handleDelete = async (id) => {
    await deleteData(id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    closenewModal();// yes 버튼 눌렸을 때 다시 초기화면으로 나가기

  };

  return (


      <div className={styles.AppHeader}>

        <header>
          <h1>helllo</h1>
        </header>
        <div>

        {/*  test*/}
        <ul>
          {/*data is requeseted getdata*/}
          {data.map(user =>
              (
              <li key={user.id}>
               <p  onMouseDown={handlemousedown} onMouseUp={handlemouseup} > id:{user.username} <br/>
                phone:({user.phone})</p>

              </li>
          ))}
        </ul>
          {/*<h3>{console.log(axios.get())} </h3>*/}
          {/*여기서는 브라우저의 기본오른쪽 버튼을 막고 모달폼을여는 함수를 할당 */}
          {/*<img src={test} onContextMenu={event => open(event)} alt=""/>*/}

          {/*일정시간이상 누르고 있으면 모달폼 열림*/}
          {/*    / 안붙이면 현재 url에 + 해서 연결  new/signup*/}



          {/*채팅방  눌럿을때 들어가는 건 어떻게 구현??*/}
          {/*채팅방 url 연결*/}



            <img src={test}  onMouseDown={handlemousedown} onMouseUp={handlemouseup} alt=""/>
          {/*</Link>*/}
          {/*<p onMouseDown={handlemousedown} onMouseUp={handlemouseup}>hello</p>*/}


          {/*채팅방 나가기 눌렀을때*/}

          <NewModal isOpen={isnewModalOpen} closeModal={closenewModal}  >
              <br/>

            <h4 >채팅방을 한번 삭제하면 복원할 수 없습니다 <br/>채팅방에서 나가시겠습니까?</h4>
            <div  >
              {/*  여기를 처리를 어떻게해야될지*/}
              <h2  onClick={() => handleDelete()} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={textStyle}> yes</h2>
              <h2 onClick={closenewModal} >no</h2>


            </div>

          </NewModal>




          <Modal isOpen={isModalOpen} closeModal={closeModal} >
            {/*onclick식 작동할 함수 넣기*/}

              <br/>
            <br/>


            <h1 style={{color:"red"}} onClick={Opennewmodal}  onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={textStyle}>채팅방 나가기</h1>
            <br/>

            <h1 onClick={closeModal} >취소</h1>


          </Modal>

        </div>



      </div>




  )
}
