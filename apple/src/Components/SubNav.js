import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

display: flex;

img {
        width: 5%;
        height: 2rem;
}
`;

const SubNav = (props) => {
        return ( 
                <StyledDiv>
                        {props.data.map(data => 
                        <div>
                        <img 
                        src={data.imageUrl}
                         alt={data.id}/>
                         <p>{data.title}</p>
                         </div>)}
                </StyledDiv>
         );
}
 
export default SubNav;