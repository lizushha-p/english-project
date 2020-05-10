import React, {Component} from 'react'
import './index.css'

class Loader extends Component{
  render(){
    return(
      <div class="loader">
        <div class="l_main">
          <div class="l_square"><span></span><span></span><span></span></div>
          <div class="l_square"><span></span><span></span><span></span></div>
          <div class="l_square"><span></span><span></span><span></span></div>
          <div class="l_square"><span></span><span></span><span></span></div>
        </div>
      </div>
    )
  }
}

export default Loader