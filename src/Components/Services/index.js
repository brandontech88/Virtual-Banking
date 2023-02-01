import React from 'react';
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH1,  ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../Images/Icon1.png';
import Icon2 from '../Images/Icon1.png';
import Icon3 from '../Images/Icon1.png';

const Services = () => {
  return (
    <>
        


<ServicesContainer id="services">
    <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src = {Icon1}/>
     
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>
                We help reduce your fees and increase your overall revenue.
            </ServicesP>
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src = {Icon2}/>
     
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
                You can access our platform online anywhere in the world.
            </ServicesP>
        </ServicesCard>

        <ServicesCard>
            <ServicesIcon src = {Icon3}/>
     
            <ServicesH2>Premium benifits</ServicesH2>
            <ServicesP>
                Unlock our special membership card that returns 5% cash back.
            </ServicesP>
        </ServicesCard>
</ServicesWrapper>
</ServicesContainer>
    </>
  )
}

export default Services;
