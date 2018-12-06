import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class Block extends React.Component {
    linkPrefix(elem) {
        return 'http://v3.kiip.me' + elem
    }

    render() {
        return (
            <div className="block">
                <img src="/app/assets/icons/Phones.png" className="phones"/>

                <div className="container">
                    <div className="row">
                        <h2 className="text-center">What We Use</h2>

                        <div className="whatWeUse col-sm-12">
                            <img className="hidden-xs" src="/whatweuse.png" alt=""/>
                            <img src="/whatweuse-mobile.png" className="hidden-md hidden-lg hidden-sm" alt=""/>
                        </div>

                    </div>

                    <div className="row block-what-this-means">

                        <h2 className="text-center">What This Means For You</h2>

                        <div className="col-sm-6 left">

                            <div className="brands row">
                                <div className="col-sm-3">
                                    <img src="app/assets/icons/icon-brands.png"/>
                                </div>
                                <div className="col-sm-9">
                                    <h4>Brands</h4>
                                    <h6>Run more effective campaigns</h6>

                                    <p>Traditional advertising gets you eyeballs and audiences. Kiip gets you people who care and want to buy from you. We reach them when they’re most receptive to your message.</p>
                                    <a href={this.linkPrefix('/brands')}>See How It Works <span
                                        className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
                                </div>


                            </div>


                            <div className="partners row">
                                <div className="col-sm-3">
                                    <img src="app/assets/icons/icon-data.png"/>
                                </div>
                                <div className="col-sm-9">
                                    <h4>Data Partners</h4>
                                    <h6>Glean dynamic insights on mobile audiences</h6>

                                    <p>Traditional data is informed by a url, header bidding, cookie or single source, which means it is often incomplete or outdated. Kiip gives you the current view of the consumer based on actions they’re taking right now on their mobile device. </p>
                                    <a href={this.linkPrefix('/data')}>Use Kiip to Meet Your Objectives <span
                                        className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
                                </div>

                            </div>

                        </div>

                        <div className="col-sm-6 right">

                            <div className="developers row">

                                <div className="col-sm-3">
                                    <img src="app/assets/icons/icon-dev.png"/>
                                </div>

                                <div className="col-sm-9">
                                    <h4>Developers</h4>
                                    <h6>Monetize your app with recognizable brands</h6>

                                    <p>We deliver value to your users without interrupting their experience. This boosts user engagement and app loyalty, while putting money in your pocket.</p>
                                    <a href={this.linkPrefix('/performance-marketers')}>Learn How to Integrate
                                        Kiip <span
                                            className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
                                </div>


                            </div>

                            <div className="everyone row">
                                <div className="col-sm-3">
                                    <img src="app/assets/icons/icon-everyone.png"/>
                                </div>
                                <div className="col-sm-9">
                                    <h4>Everyone Else</h4>
                                    <h6>Receive real value from brands</h6>

                                    <p>When you least expect it, we’ll surprise you with rewards like discounts, tips and virtual currency, in your favorite apps and connected devices. It’s our way of saying: “You’re awesome. Kiip doing what you’re doing!”</p>

                                    <div>
                                        <a href={this.linkPrefix('/rewards')}>Find Out More About Our Rewards <span
                                            className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></a>
                                    </div>


                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="row linerline">
                        <div className="horizontal-line"></div>
                    </div>
                    <div className="row block-why-works">
                        <div className="col-md-6">
                            <h3>Why Our Approach Works</h3>

                            <p>
                                We approach the mobile experience as a series of moments. For brands, moments offer an engaging way to surprise and delight consumers.
                            </p>

                            <p>
                                We precisely categorize mobile moments across our mobile app and mobile web inventory to understand consumers’ immediate actions and greet them with the most appropriate branded response.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block;
