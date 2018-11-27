import React, {Component} from 'react';

class Cover extends Component{
    
constructor(props){
    super(props);
    this.state = {
        hover:false,
        display:'none',
        coverClick:false,

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
    render(){
        return(
            <div>
            <div style={this.state.coverClick? styles.containerCoverNone : styles.containerCover}>
                <img style={styles.image} src={require('./images/cover.jpg')} alt="Cover" />
                <h3 onClick={this.onClickHandler} onMouseOver={this.onMouseOverHandler} onMouseLeave={this.onMouseLeaveHandler} style={this.state.hover ? styles.h3Hover:styles.h3}>Go to portfolio</h3>
              
            </div>
            <div style={this.state.coverClick? styles.portfolio : styles.portfolioNone }>
                <header style={styles.header}>
                    <ul style={styles.nav}>
                        <li style={styles.navItem}>Cover</li>
                        <li style={styles.navItem}>Portfolio</li>
                        <li style={styles.navItem}>Contacts</li>
                    </ul>
                    </header>
                <div style={styles.images}>
                    <img  src={require('./images/1.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/3.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/4.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/5.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/1.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/2.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/3.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/4.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/5.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/1.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/3.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/4.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/5.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/1.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/2.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/3.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/4.jpg')} alt="portfolio" style={styles.portfolioImage}/>
                    <img  src={require('./images/5.jpg')} alt="portfolio" style={styles.portfolioImage}/>

                </div>
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
        display:'none'
    },
    image:{
        height: '100vh',
        width:'100vw'
    },
    h3:{
        position:'absolute',
        marginTop:-244,
        marginLeft:270,
        color:'white',
        fontFamily:'Monserrat',
        filter:'opacity(.5)'
    },
    h3Hover:{
        position:'absolute',
        marginTop:-244,
        marginLeft:270,
        color:'white',
        fontFamily:'Monserrat',
        filter:'opacity(1)',
        cursor:'pointer'
    },
    portfolio:{
        height:'100vh'
    },
    portfolioNone:{
        display:'none'
    },
    header:{
        height:'10vh',
        width:'100vw',
        marginTop:-120,
        backgroundColor:'white',
        position:'fixed'
    },
    nav:{
        display:'flex',
        flexDirection:'row',
        marginLeft:800

    },
    navItem:{
        fontFamily:'Monserrat',
        listStyleType:'none',
        marginLeft:20
    },
    images:{
        display:'flex',
        flexFlow:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:120
    },
    portfolioImage:{

        margin:10,
        height:220,
        width:'auto',
        borderRadius:20
       
    }
}
export default Cover;