import React, {Component} from 'react';
import {Animated} from "react-animated-css";

class Cover extends Component{
    
constructor(props){
    super(props);
    this.state = {
        hover:false,
        display:'none',
        coverClick:false,
        contactsShow:false
    }
}
onMouseOverHandler = (e) => {
    this.setState({
        hover:true
    })
}
onMouseLeaveHandler = (e) => {
    this.setState({
        hover:false
    })
}
onClickHandler = (e) => {
    e.preventDefault();
    this.setState({
        coverClick:true
    })
}
ReturnCoverHadler = (e) => {
    this.setState({
        coverClick:false
    })
}
goToContactsHandler = (e) => {
    this.setState({
        contactsShow:true
    })
}
backToPortfolio = (e) => {
    this.setState({
        contactsShow:false
    })
}
    render(){
        return(
            <div>
            <Animated animationIn="fadeIn" animationOut="fadeOut"  isVisible={true}>
            <div style={this.state.coverClick? styles.containerCoverNone : styles.containerCover}>
                <img style={styles.image} src={require('./images/cover.jpg')} alt="Cover" />
                <h3 onClick={this.onClickHandler} onMouseOver={this.onMouseOverHandler} onMouseLeave={this.onMouseLeaveHandler} style={this.state.hover ? styles.h3Hover:styles.h3}>Go to portfolio</h3>
              
            </div>
            </Animated>
            <div style={this.state.coverClick? styles.portfolio : styles.portfolioNone }>
            <Animated animationIn="fadeIn"  isVisible={true}>
                <header style={styles.header}>
                <img src={require('./images/logo.png')} alt="logo" style={{position:'absolute', height:60, width:80, marginLeft:170}} />
                <p style={{position:'absolute', marginLeft:250, fontFamily:'Quicksand', marginTop:30}}>Fuad Rustamzadeh</p>
                    <ul style={styles.nav}>
                        <li style={styles.navItem} onClick={this.ReturnCoverHadler} >Cover</li>
                        <li style={styles.navItem}  >Portfolio</li>
                        <li style={styles.navItem} onClick={this.goToContactsHandler}  >Contacts</li>
                    </ul>
                </header>
                <div style={this.state.contactsShow?styles.imagesOff:styles.imagesOn}>
                    <img  src={require('./images/1.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/3.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/4.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/5.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/16.jpg')} alt="portfolio" style={styles.portfolioImage}/>

                    <img  src={require('./images/7.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/8.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/9.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/10.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/11.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/12.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/13.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/14.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/15.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/17.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/18.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/19.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/20.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/21.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/22.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/23.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/24.jpg')} alt="portfolio" style={styles.portfolioImage}/>

                </div>
               <div style={this.state.contactsShow? styles.contactsShow : styles.contactsHide}>
                    <Animated animationIn="fadeIn">
               <div style={styles.contactsCard}>
                    <img style={styles.profileImage} src={require("./images/Profile.jpg")} alt="profileImage" />
                    <h3 style={styles.aboutMe}>Welcome to my site</h3>
                    <div style={styles.aboutMeP}>
                        My name is Fuad Rustamzadeh. I am amator photographer. I love to take photo in the street but also I love portraits.
                        I am web developer but photography is my passion. If you want to contact with me, please call or write e-mail:
                        <p style={styles.aboutMeC}>
                        Tel: +994-259-77-39
                        <br/>
                        email: rustam.fuad@gmail.com
                        </p>
                        <Animated animationIn="bounceInUp">
                        <p onClick={this.backToPortfolio} style={{marginTop:170, marginLeft:-110, cursor:'pointer', fontSize:22}}> Back to portfolio </p>
                        </Animated>
                    </div>
                    </div>
                    </Animated>
               </div>
                </Animated>
               
            </div>
            </div>
        )
    }
}

const styles = {
    containerCover:{
        display:'inline-block'
    },
    containerCoverNone:{
        display:'none',
    },
    image:{
        height: '100vh',
        width:'100vw'
    },
    h3:{
        position:'absolute',
        marginTop:-144,
        marginLeft:870,
        color:'white',
        fontFamily:'Quicksand',
        filter:'opacity(.8)',
        fontSize:28
    },
    h3Hover:{
        position:'absolute',
        marginTop:-144,
        marginLeft:870,
        color:'white',
        fontFamily:'Quicksand',
        fontSize:32,
        filter:'opacity(1)',
        cursor:'pointer'
    },
    portfolio:{
        height:'100vh'
    },
    portfolioNone:{
        filter: 'opacity(0)',
        display:'none'
    },
    header:{
        height:'10vh',
        width:'100vw',
        marginTop:-120,
        backgroundColor:'white',
        position:'fixed',
        filter:'opacity(.8)'
    },
    nav:{
        display:'flex',
        flexDirection:'row',
        marginLeft:800,
        marginTop:32,

    },
    navItem:{
        fontFamily:'Quicksand',
        listStyleType:'none',
        marginLeft:20,
        cursor:'pointer'
    },
    imagesOn:{
        display:'flex',
        flexFlow:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:120
    },
    imagesOff:{
        display:'none'
    },
    portfolioImage:{

        margin:10,
        height:350,
        width:'auto',
        borderRadius:20
       
    },
    contactsShow:{
        height:'100hv'
    },
    contactsHide:{
        display:'none'
    },
    contactsCard:{
        height:500,
        width:700,
        backgroundColor:'',
      
    },
    profileImage:{
        height:280,
        width:400,
        borderRadius:200,
        marginTop:200,
        marginLeft:'38%'
    },
    aboutMe:{
        position:'absolute',
        fontFamily:'Quicksand',
        marginTop:-250,
        marginLeft:"55%",

    },
    aboutMeP:{
        position:'absolute',
        fontFamily:'Quicksand',
        marginTop:-200,
        marginLeft:"55%",
        textAlign:'justify',
        width:420
    }
    
}
export default Cover;