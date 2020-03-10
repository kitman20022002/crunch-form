import React from 'react';

import "./Home.css";
import CreateContactForm from "../../component/CreateContactForm/CreateContactForm";
import Footer from "../../component/Footer/Footer";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={"container-company"}>
                    <img src={"http://resources.theinvulnerable.com.au/CrunchAccounting.png"}
                         alt={"Crunch Accounting"}/>
                </div>
                <CreateContactForm submit={this.submit}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default Home;
