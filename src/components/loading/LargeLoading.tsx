import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-align: center;
`;

const Gigantization = keyframes`
    from {
        opacity: 1;
        scale:0;
    }
    to {
        opacity: 0;
        scale:1;
    }
`;

const CircleBox = styled.div`
  height: 150px;
  width: 150px;
  margin: 20px auto 20px;
  position: relative;
`;

const Circle = styled.div`
  height: 150px;
  width: 150px;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background-color: #c7d01c;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  position: absolute;
  animation-name: ${Gigantization};
  opacity: 0;
`;

const Circle1 = styled(Circle)`
  animation-delay: 0s;
`;
const Circle2 = styled(Circle)`
  animation-delay: 2s;
`;
const Circle3 = styled(Circle)`
  animation-delay: 4s;
`;
const Circle4 = styled(Circle)`
  animation-delay: 6s;
`;

const LargeLoading: FC = () => {
  return (
    <>
      <CircleBox>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <Circle3></Circle3>
        <Circle4></Circle4>
      </CircleBox>
      <LoadingText data-testid="waiting-animation">処理を実行中</LoadingText>
    </>
  );
};

export default LargeLoading;
