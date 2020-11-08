import React from 'react';
import styled from 'styled-components';

const Main = styled.div `
    width: 200px;
    height: 200px;
    border: 1px grey solid;
`
const Pedal1 = styled.div `
    height: 40px;
    width: 40px;
    transform: rotate(20deg);
    background-color:  #66c2ff;
    clip-path: polygon(50% 0%, 82% 50%, 50% 100%, 18% 51%);
`
const Pedal2 = styled.div `
    height: 40px;
    width: 40px;
    transform: rotate(60deg);
    background-color:  #66c2ff;
    clip-path: polygon(50% 0%, 82% 50%, 50% 100%, 18% 51%);
`
const Pedal3 = styled.div `
    height: 40px;
    width: 40px;
    transform: rotate(135deg);
    background-color:  #66c2ff;
    clip-path: polygon(50% 0%, 82% 50%, 50% 100%, 18% 51%);
`
const Pedal4 = styled.div `
    height: 40px;
    width: 40px;
    transform: rotate(-40deg);
    background-color:  #66c2ff;
    clip-path: polygon(50% 0%, 82% 50%, 50% 100%, 18% 51%);
`
const Pedal5 = styled.div `
    height: 40px;
    width: 40px;
    transform: rotate(-135deg);
    background-color:  #66c2ff;
    clip-path: polygon(50% 0%, 82% 50%, 50% 100%, 18% 51%);
`
const Bud = styled.div `
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px white solid;
    background-color: #ffff1a;
    // align-self: center;
`

const Flower = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ForgetMeNots = () => {
    return (
        <Main>
            <Flower>
                <Pedal1 />
                <Pedal2 />
                <Pedal3 />
                <Bud />
                <Pedal4 />
                <Pedal5 />
            </Flower>    
        </Main>    
    );
}

export default ForgetMeNots;