// src/components/RatingBreakdown.js
import React, { useState } from 'react';
import styled from 'styled-components';

const RatingBreakdownWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const ChartContainer = styled.div`
  position: relative;
  width: 400px; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
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
  bottom: 20px; /* Space for X-axis labels */
  width: 100%;
  height: 100%;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const Label = styled.span`
  margin-top: 5px;
`;

const XAxis = styled.div`
  position: absolute;
  bottom: -33px;
  width: 100%;
  border-top: 2px solid #000;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const YAxis = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  border-right: 2px solid #000;
`;

const YAxisLabel = styled.div`
  position: absolute;
  left: -30px;
  bottom: ${props => `${props.bottom}px`};
  width: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const RatingBreakdown = () => {
    const initialRatings = [35, 50, 40, 22, 10];
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
                {[0, 10, 20, 30, 44, 50].map((value, index) => (
                    <YAxisLabel key={index} bottom={value * 5}>{value}</YAxisLabel>
                ))}
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
            <Button style={{marginTop:'33px'}}onClick={regenerateRatings}>Regenerate</Button>
        </RatingBreakdownWrapper>
    );
};

export default RatingBreakdown;
