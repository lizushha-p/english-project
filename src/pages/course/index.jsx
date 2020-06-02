import React, { Component } from 'react'
import HeaderAfter from '../../modules/header_after'
import {ReactComponent as ImageFriendRequest} from './assets/friend_request.svg'
import {ReactComponent as ImageWhereIsMT} from './assets/where_is_my_towl.svg'
import {ReactComponent as ImageToHire} from './assets/to-hire.svg'
import {ReactComponent as ImageButton} from './assets/button.svg'
import './index.css'

class Course extends Component{
  render(){
    return(
      <div>
         <div>
        <HeaderAfter />
        </div>
        <div className='course_friend-request'>
          <div>
            <div className='course_active_title'>
              <h1>A Friend Request</h1>
              <button><a href='/friend-request'><ImageButton /></a></button>
            </div>
            <p>В этой главе вы познакомитесь с Катей — русской девушкой, живущей в Лондоне. 
              Вы поможете ей выбрать подарок для кого-то очень особенного, а также научитесь представляться 
              и отвечать на <br/> общие вопросы.
            </p>
            <p><strong>Грамматика</strong><br/>Вы узнаете, как грамотно предствляться <br/> незнакомым людям, задавать им вопросы и <br/> отвечать на них. 
              А еще мы расскажем про три <br/> самые распространенные ошибки, с которыми сталкиваются те, кто только начинает 
              учить <br/> английский.
            </p>
            <p>
              <strong>Слова:</strong> Present, to play, feel
            </p>
          </div>
          <div>
            <ImageFriendRequest />
          </div>
        </div>
        <div className='course_where_is_my_towl'>
          <div>
            <ImageWhereIsMT />
          </div>
          <div>
            <h1>Where Is My Towel?</h1>
              <p>В этой главе вы побываете в гостиницах, научитесь<br/>уверенно разговаривать с сотрудником ресепшн 
                во <br/>время регистрации, и сможете правильно <br/>пожаловаться, если в номере что-то не так.
              </p>
              <p><strong>Грамматика</strong><br/>Вы научитесь использовать Present Simple, <br/>чтобы объясняться с 
              сотрудниками гостиницы, <br/>просить то, что вам нужно, и вежливо<br/> указывать на недостатки.
              </p>
              <p>
                <strong>Слова:</strong> Delicious, terrible, huge, expensive, dirty, towel, <br/>swimming pool, 
                view, ground floor, first floor, remote <br/>control, air conditioner, hair dryer
              </p>
          </div>
        </div>
        <div className='course_to_hire'>
        <div>
            <h1>To Hire or Not to Hire</h1>
            <p>В этой главе вы узнаете, как о профессиях говорят специалисты по найму сотрудников, 
              побываете на ярмарке вакансий, научитесь говорить о профессиональных навыках людей, 
              и даже окажетесь перед необычным моральным выбором, помогая выбрать подходящего кандидата на должность.
            </p>
            <p><strong>Грамматика</strong><br/>Вы узнаете, как использовать Present Simple, чтобы написать резюме 
            на английском и научитесь задавать вопросы о других людях.
            </p>
            <p>
              <strong>Слова:</strong> Team player, communicative, punctual, reliable, adaptable, responsible, well-organized
            </p>
          </div>
          <div>
            <ImageToHire />
          </div>
        </div>
      </div>
    )
  }
}

export default Course

