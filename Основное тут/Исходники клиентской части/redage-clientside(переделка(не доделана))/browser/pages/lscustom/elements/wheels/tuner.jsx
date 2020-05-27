import React, { Component } from 'react';
import { connect } from 'react-redux';

import WheelLogo from '../../../../assets/img/lscustom/wheel.png'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div class="logo_categories">
                    <img src={WheelLogo} alt="WheelLogo" width="50px" height="50px"/>
                    <p>Тюнер</p>
                </div>

                <div id="-1" class="item">
                    <p>Стандартные диски</p>
                    <p>*price*</p>
                </div>

                <div id="0" class="item">
                    <p>Cosmo</p>
                    <p>*price*</p>
                </div>

                <div id="1" class="item">
                    <p>Super Mesh</p>
                    <p>*price*</p>
                </div>

                <div id="2" class="item">
                    <p>Outsider</p>
                    <p>*price*</p>
                </div>

                <div id="3" class="item">
                    <p>Rollas</p>
                    <p>*price*</p>
                </div>

                <div id="4" class="item">
                    <p>Driftmeister</p>
                    <p>*price*</p>
                </div>

                <div id="5" class="item">
                    <p>Slicer</p>
                    <p>*price*</p>
                </div>

                <div id="6" class="item">
                    <p>El Quatro</p>
                    <p>*price*</p>
                </div>

                <div id="7" class="item">
                    <p>Dubbed</p>
                    <p>*price*</p>
                </div>

                <div id="8" class="item">
                    <p>Five Star</p>
                    <p>*price*</p>
                </div>

                <div id="9" class="item">
                    <p>Slideways</p>
                    <p>*price*</p>
                </div>

                <div id="10" class="item">
                    <p>Apex</p>
                    <p>*price*</p>
                </div>

                <div id="11" class="item">
                    <p>Stanced EG</p>
                    <p>*price*</p>
                </div>

                <div id="12" class="item">
                    <p>Countersteer</p>
                    <p>*price*</p>
                </div>

                <div id="13" class="item">
                    <p>Endo v.1</p>
                    <p>*price*</p>
                </div>

                <div id="14" class="item">
                    <p>Endo v.2 Dish</p>
                    <p>*price*</p>
                </div>

                <div id="15" class="item">
                    <p>Gruppe Z</p>
                    <p>*price*</p>
                </div>

                <div id="16" class="item">
                    <p>Choku-Dori</p>
                    <p>*price*</p>
                </div>


                <div id="17" class="item">
                    <p>Chicane</p>
                    <p>*price*</p>
                </div>

                <div id="18" class="item">
                    <p>Saisoku</p>
                    <p>*price*</p>
                </div>

                <div id="19" class="item">
                    <p>Dished Eight</p>
                    <p>*price*</p>
                </div>

                <div id="20" class="item">
                    <p>FujiWara</p>
                    <p>*price*</p>
                </div>

                <div id="21" class="item">
                    <p>Zokusha</p>
                    <p>*price*</p>
                </div>

                <div id="22" class="item">
                    <p>Battle VII</p>
                    <p>*price*</p>
                </div>

                <div id="23" class="item">
                    <p>Rally Master</p>
                    <p>*price*</p>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps)(Home);