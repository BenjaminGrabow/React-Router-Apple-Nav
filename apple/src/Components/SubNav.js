import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

display: flex;
width: 100%;
background-color: #fff;


img {
        width: 30%;
        height: 2rem;
        padding: 1rem;
}

p {
        font-size: .5rem;
}
`;



const SubNav = (props) => {
        return ( 
                <StyledDiv>
                        {props.data.map(data => 
                        <div style={props.styleD}>
                        <img 
                        src={data.imageUrl}
                         alt={data.id}
                         />
                         <p style={props.styleP}>{data.title}</p>
                         </div>
                         )}
                </StyledDiv>
         );
}
 
export default SubNav;

