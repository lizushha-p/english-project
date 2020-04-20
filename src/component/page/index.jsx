import React, {Component} from 'react'
import Header from '../../modules/header/index'

class Page extends Component{
  render(){
    const {isShow} = this.props
    return(
      <div>
        {isShow
        ? <Header/>
          : null
        }
        {this.props.children}
      </div>
    )
  }
}

export default Page