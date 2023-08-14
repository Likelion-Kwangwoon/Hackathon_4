import img from './img.svg';
import {Link }from 'react-router-dom';
import styles from './MyComponent.module.css';
import {useState} from "react";
import axios from "axios";
// 서버와 통신할때 spa 유지하면서 ajax
import Button from "./button";
const ComSignup= () => {

    return (
        <div className='ComSignup'>
            <header className="App-header">
                <img src={img} alt="xx"/>
                <br/><br/>
                <div >
                    회원가입 완료
                </div>
                <br/><br/>
                <p className={styles.a} >친구들과 대화를 통해 필요한 정보를 찾아보세요.</p>
                {/*로그인페이지 연결하면 될듯?*/}
                <br/>
                <br/><br/>
                <div className={styles.container}>

                <Link to ='/login'>
                    <Button
                    text={'로그인'}
                    backgroundColor ={'rgb(152,98,222)'}
                    outlined ={true}
                    borderColor ={'rgb(236,240,243)'}
                />
                </Link>
                </div>
            </header>
        </div>

    );
};

export default ComSignup;