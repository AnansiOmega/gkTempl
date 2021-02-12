import React from 'react'
import pic1 from '../imgs/gktempleabtpic.jpg'
import pic2 from '../imgs/gktempleabtpic2.jpg'
import gamgam from '../imgs/gamgampic1.jpg'
import gamgam2 from '../imgs/gamgampic2.jpg'

export const About = () => {
    return(
        <div className='about-page'>
            <div className='pic-cont'>
                <img src={pic1}></img>
                <img src={pic2}></img>
            </div>
            <div className='about-info'>
                <h1>About Us</h1>
                <img src={gamgam}></img>
                <p className='g1p-1'>
                Ganga & Krishnamurthy Temple is being founded by me to honor my charitable grandmother Gangamma. 
                I am commencing with one idol of Naga. 
                The Naga idol will be consecrated to enable women to request God that they get their family property and do charity. 
                In the case of forebears’ property, that they be able to get the property, do charity and fulfill the wishes of the deceased. 
                Later we shall obtain idols of Ganesha, Durgi, Lakshmi, Subrahmanya etc. of whom women and men may make requests. 
                We shall also obtain an idol of Krishna. 
                As of today we are expecting our temple to be a mobile temple. 
                We shall bring the idol to places such as homes or other places where devotees request a service to be performed. 
                The service will also be available virtually. 
                </p>
                <div  className='g1p-2'>
                <h2>History</h2>
                <p>
                Ganga and Krishnamurthy Temple is named after my paternal <a href='https://www.gangalib.org/libraryname.php' target='_blank'>Grandmother Gangamma and her Father Krishnamurthy.</a> 
                She was named after the Water Goddess Ganga. Grandmother Gangamma was a very intelligent, loving, non-discriminating and charitable woman.
                Gangamma's father, Advocate Krishnamurthy, walking 2222 miles, made a pilgrimage from the village Kadaba, Karnataka state, Bharatha, to the city of Kaashi on the bank of the holy river Ganga at the confluence of three rivers. 
                Upon his return, his second child was born. He named the baby 'Ganga'.
                </p>
                </div>
                <span className='g1p-3'>Grandmother Gangamma in 331, 15th Cross, 2nd Block, Jayanagara, Bengaluru 560011.</span>
            </div>
            <div className='more-info'>
                <div className='g2p-1'>
                <h2>My Mission</h2>
                <p>
                I am founding Ganga & Krishnamurthy Temple to honor my charitable grandmother Gangamma. 
                I am commencing with one idol of Naga. 
                The Naga idol will be consecrated to enable women to request God that they get their family property and do charity. 
                In the case of forebears’ property, that they be able to get the property, do charity and fulfill the wishes of the deceased. 
                I do not want Gangamma’s suffering, hard work and sacrifice to go in vain. 
                A whole century later, the <a href="https://www.gangalib.org/gates.php">attitude of Indian men towards women</a> has not improved. 
                The executor is the spokesperson of the soul of the testator! – Russian saying. 
                This saying helped Alfred Nobel’s 26-year-old testator <a href='https://www.gangalib.org/Alfred_Nobel_will.php'>Ragnar Sohlman</a> to implement Nobel’s will and establish <a href='https://www.gangalib.org/index.php'>the Nobel Prize!</a> 
                Later we shall obtain idols of Ganesha, Durgi, Lakshmi, Subrahmanya etc. of whom men and women may make requests. 
                We shall also obtain an idol of Krishna. 
                As of today we are expecting our temple to be a mobile temple. We shall bring the idol to the homes of devotees who request a service to be performed in their home. Until the COVID-19 pandemic is taken care of, we shall perform virtual services. 
                </p>
                </div>
                <img src={gamgam2}></img>
            </div>
        </div>
    )
}