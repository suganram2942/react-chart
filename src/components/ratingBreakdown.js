import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const RatingBreakdownWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const ChartContainer = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Chart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  position: relative;
  bottom: 20px;
  width: 100%;
  height: 100%;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarAnimation = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${props => `${props.height}px`};
  }
`;

const BarInner = styled.div`
  width: 30px;
  background-color: steelblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 5px 5px 0 0;
  position: absolute;
  bottom: -17px;
  height: ${props => `${props.height}px`};
  transition: height 0.5s ease;
  animation: ${BarAnimation} 0.5s ease;
`;

const Label = styled.span`
  margin-top: 5px;
`;

const XAxis = styled.div`
  position: absolute;
  bottom: -33px;
  width: 100%;
  border-top: 2px solid #fff;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const YAxis = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  border-right: 2px solid #fff;
`;

const YAxisValue = styled.div`
  position: absolute;
  left: -30px;
  bottom: ${props => `${props.bottom}px`};
  width: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: darkgreen;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 33px;
  cursor: pointer;
`;

const XAxisLabel = styled.div`
  margin-top: 40px;
  color: #0056b3;
`;

const YAxisLabel = styled.div`
  position: absolute;
  left: -152px;
  width: 150px;
  bottom: 141px;
  transform: rotate(270deg);
  color: #0056b3;
`;

const RatingBreakdown = () => {
  const initialRatings = [35, 50, 40, 22, 10];
  const yAxis = [0, 10, 20, 30, 40, 50];
  const [ratings, setRatings] = useState(initialRatings);

  const regenerateRatings = () => {
    const newRatings = ratings.map(() => Math.floor(Math.random() * 51));
    setRatings(newRatings);
  };

  return (
    <RatingBreakdownWrapper>
      <h2>Rating Breakdown</h2>
      <ChartContainer>
        <YAxis />
        <XAxis>
          {ratings.map((_, index) => (
            <Label key={index}>{index + 1}</Label>
          ))}
        </XAxis>
        {yAxis.map((value, index) => (
          <YAxisValue key={index} bottom={value * 5}>{value}</YAxisValue>
        ))}
        <YAxisLabel>No of Ratings</YAxisLabel>
        <Chart>
          {ratings.map((count, index) => (
            <Bar key={index}>
              <BarInner height={count * 5}>
                {count}
              </BarInner>
            </Bar>
          ))}
        </Chart>
      </ChartContainer>
      <XAxisLabel>Rating</XAxisLabel>
      <Button onClick={regenerateRatings}>Regenerate</Button>
    </RatingBreakdownWrapper>
  );
};

export default RatingBreakdown;
