import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


class Introduction extends React.Component
{
  constructor(){
    super();
    this.state={
      height: '',
      width: '',
    }
    this.updateDimensions=this.updateDimensions.bind(this);
  }
  updateDimensions()
  {
    console.log("updating dimension"+window.innerWidth);
    this.setState({height: window.innerHeight,width: window.innerWidth});
    console.log(this.state.width);
  }
  componentDidMount()
  {
    window.addEventListener("resize", this.updateDimensions);
  }
  render()
  {
    var style = {
      height: 300,
      width: '100%',
      textAlign: 'left',
      padding: '10px',
      backgroundColor:'rgba(0,0,0,0.0)',
      display: 'inline-block',
      color: 'white',
    };
    const labelStyle={
      color: 'white',
      fontWeight: '400px',
      fontSize: '20px',
    }
    const buttonStyle={
      padding: '10px',
      backgroundColor:'#EC5509',
      borderRadius: '4px',
    };
    var styles={
      divRowStyle:{
        backgroundImage: `url(${"../images/intro-back.jpg"})`,
        backgroundSize: 'cover',
      },
      styleRow:{
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "60px",
        paddingRight: "60px",
        textAlign: "justify",
      },
      styleRowGrey:{
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "60px",
        paddingRight: "60px",
        textAlign: "justify",
        backgroundColor: "#efefef",
      },
      styleRowGreyCenter:{
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "260px",
        paddingRight: "260px",
        textAlign: "center",
        backgroundColor: "#efefef",
      },
      styleRowGreyCenter2:{
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "40px",
        paddingRight: "40px",
        textAlign: "center",
        backgroundColor: "#efefef",
      },
      styleRowFooter1:{
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "60px",
        paddingRight: "60px",
        textAlign: "justify",
        backgroundColor: "#c6c6c6",
      },
      styleRowFooter2:{
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "60px",
        paddingRight: "60px",
        textAlign: "justify",
        backgroundColor: "#444444",
        color: "white",
      }
    }
    return(
      <div>
      <div className="row" style={styles.divRowStyle}>
      <div className="col-md-3"></div>
      <div className="col-sm-12 col-md-6">
      <Paper style={style} zDepth={0} >
      <br/>
      <br/>
      <br/>
      <h1>Conversational User Experience Platform.<br/>
      Now we are talking.</h1><br/>
      <h3>Build brand-unique, natural language interactions<br/>
      for bots, applications, services, and devices.<br/>

        </h3>
      <br/>
      <br/>
      <br/>
      <Link to='/Register'><RaisedButton label="GET STARTED FREE" labelStyle={labelStyle}
      backgroundColor='#EC5509' style={buttonStyle} /></Link>
      </Paper>
      </div>
      <div className="col-md-3"></div>
      </div>

      <div className="row" style={styles.styleRow}>
      <div className="col-sm-12 col-md-8">
      <h1>Voice-Enable Your Product with Lucy</h1>
      <span><a href="#">Learn</a> | <a href="#">Design</a> | <a href="#">Build</a> | <a href="#">Launch</a> | <a href="#">What is New</a></span><br/><br/>
      <span>Use the Lucy Voice Service (LVS) to add intelligent voice control to any connected product that has a microphone and speaker. Your customers will be able to ask Lucy to play music, answer questions, get news and local information, control smart home products, and more on their voice-enabled products. <br/><a href="#">Get started with LVS »</a></span>
      </div>
      <div className="col-sm-12 col-md-4">
      <img src="../images/main.png" alt="Voice-Enable Your Product with Lucy" className="img-responsive"/>
      </div>
      </div>
      <div className="row" style={styles.styleRowGrey}>
      <div className="col-sm-12 col-md-12">
      <h1>How LVS Works</h1>
      <span>As an LVS developer, you can build products with access to Lucy’s growing list of capabilities through our regular API updates, feature launches, and from Lucy skills contributed by our active developer community. Best of all, LVS is free to use.</span>
      </div>
      </div>
      <div className="row" style={styles.styleRowGrey}>
      <div className="col-sm-12 col-md-4">
      <img src="../images/mic.png" alt="Natural Voice Control" className="img-responsive"/>
      <h3>Natural Voice Control</h3>
      <span>Lucy has finely tuned automatic speech recognition (ASR) and natural language understanding (NLU) engines that recognize and respond to voice requests instantly.
      <br/><a href="#">See more LVS features »</a></span>
      </div>
      <div className="col-sm-12 col-md-4">
      <img src="../images/graph.png" alt="" className="img-responsive"/>
      <h3>Always Getting Smarter</h3>
      <span>Lucy is always getting smarter with new capabilities and services through machine learning, regular API updates, feature launches, and custom skills from the Lucy Skills Kit (LSK).</span>
      </div>
      <div className="col-sm-12 col-md-4">
      <img src="../images/form.png" alt="" className="img-responsive"/>
      <h3>Free, Easy Integration</h3>
      <span>The LVS API is a programming language agnostic service that makes it easy to integrate Lucy into your devices, services, and applications. Best of all, it’s free.
      <br/><a href="#">Get started »</a></span>
      </div>
      </div>
      <div className="row" style={styles.styleRow}>
      <div className="col-sm-12 col-md-4">
      <img src="../images/globe.png" alt="" className="img-responsive"/>
      </div>
      <div className="col-sm-12 col-md-8">
      <h2>LVS Now Available for India</h2>
      <span>We’re excited to announce that LVS is now available for developers building products. LVS localization provides you with language and region-specific voice services to expand your audience and delight new customers.
      <br/><a href="#">Learn more on the Alexa Blog »</a></span>
      </div>
      </div>
      <div className="row" style={styles.styleRowGrey}>
      <div className="col-md-2"></div>
      <div className="col-sm-12 col-md-8" style={styles.styleRowGreyCenter2}>
      <img src="../images/features.png" alt="Design Voice Experiences" className="img-responsive"/>
      <br/>
      <h1>Design Voice Experiences</h1>
      <span>Whether you’re building a hand-held device like a TV remote or developing a hands-free experience for a connected speaker, LVS provides flexibility to design the best voice experience for your product.
      <br/><a href="#">Read the design guidelines »</a></span>
      </div>
      <div className="col-md-2"></div>
      </div>
      <div className="row" style={styles.styleRow}>
      <div className="col-sm-12 col-md-7">
      <h1>Build Lucy Directly into Your Device</h1>
      <span>LVS provides software development tools to help you easily build products with Lucy. Whether you are building a hand-held device like a TV remote or smart watch or developing a hands-free experience for a connected speaker or home intercom system, we provide you with the development tools to create the best user experience for your Lucy-enabled product.
      <br/><a href="#">See documentation »</a></span>
      </div>
      <div className="col-sm-12 col-md-5">
      <img src="../images/main_2.png" alt="" className="img-responsive"/>
      </div>
      </div>
      <div className="row" style={styles.styleRowGrey}>
      <div className="col-sm-12 col-md-5">
      <img src="../images/devices.png" alt="" className="img-responsive"/>
      </div>
      <div className="col-sm-12 col-md-7">
      <h1>Launch New Products with Lucy</h1>
      <span>Our Marketing and Brand Guidelines will provide you with an Lucy brand and messaging overview for how to integrate Lucy into your marketing, including packaging, promotional materials, and advertising. It also includes an overview of marketing recommendations and opportunities. Your product will also need to go through certification for access to Music, Audible, and/or third-party media services.</span>
      </div>
      </div>
      <div className="row" style={styles.styleRowFooter1}>
      <div className="col-md-2">
      </div>
      <div className="col-sm-6 col-md-2">
      <img src="../images/book.png" alt=""/>
      <h4>Learn</h4>
      <span>
      <a href="#">Lucy Features</a><br/>
      <a href="#">LVS Forum</a><br/>
      <a href="#">FAQs</a><br/>
      <a href="#">Lucy Blog</a><br/>
      </span>
      </div>
      <div className="col-sm-6 col-md-2">
      <img src="../images/design.png" alt=""/>
      <h4>Design</h4>
      <span>
      <a href="#">Designing for LVS</a><br/>
      <a href="#">Functional Design Guide</a><br/>
      <a href="#">UX Design Guidelines</a><br/>
      </span>
      </div>
      <div className="col-sm-6 col-md-2">
      <img src="../images/tools.png" alt=""/>
      <h4>Build</h4>
      <span>
      <a href="#">Start Building</a><br/>
      <a href="#">Projects and Sample Code</a><br/>
      <a href="#">API and Reference</a><br/>
      </span>
      </div>
      <div className="col-sm-6 col-md-2">
      <img src="../images/launch.png" alt=""/>
      <h4>Launch</h4>
      <span>
      <a href="#">Marketing Brand Guidelines</a><br/>
      </span>
      </div>
      </div>
      <div className="row" style={styles.styleRowFooter2}>
      <div className="col-sm-12 col-md-3">
      <span>© 2017 Lucy.ai</span>
      </div>
      <div className="col-sm-12 col-md-5"></div>
      <div className="col-sm-12 col-md-4">
      <span>Third-party and open-source licenses | Terms of Use and Privacy Policy</span>
      </div>
      </div>
      </div>
      )
}

}
export default Introduction;
