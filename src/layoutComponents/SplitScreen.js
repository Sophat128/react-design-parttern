import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;
const Panne = styled.div`
    flex: ${props => props.weight};
`;

const SplitScreen = ({
    children,
    leftWeight= 1,
    rightWeight= 1
}) => {
    const [left, right] = children;
  return (
    <Container>
        <Panne weight={leftWeight}>
            {left}
        </Panne>
        <Panne weight={rightWeight}>
            {right}
        </Panne>
    </Container>
  )
}
// const SplitScreen = ({
//     left: Left,
//     right: Right,
//     leftWeight= 1,
//     rightWeight= 1
// }) => {
//   return (
//     <Container>
//         <Panne weight={leftWeight}>
//             <Left/>
//         </Panne>
//         <Panne weight={rightWeight}>
//             <Right/>
//         </Panne>
//     </Container>
//   )
// }

export default SplitScreen