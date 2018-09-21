import React from 'react'
import styled from 'styled-components'
import CalendarIcon from './CalendarIcon'
import moment from 'moment'

const DateContainer = styled.time`
  display: flex;
  font-family: 'Merriweather', Georgia, Arial;
  font-style: italic;
  line-height: 1.5;
  color: ${props => props.light ? 'rgba(255, 255, 255, .87)' : 'rgba(33, 33, 33, .34)'};

  .icon--calendar {
    width: 14px;
    height: 24px;
    margin-right: 8px;
    fill: ${props => props.light ? 'rgba(255, 255, 255, .87)' : 'rgba(33, 33, 33, .31)'};
  }
`

const PublishDate = ({ publishDate, light }) => (
  <DateContainer light={light}>
    <CalendarIcon />
    Published on&nbsp;
      <time dateTime={moment(publishDate).format('YYYY-MM-DD')}>
      {moment(parseInt(publishDate)).format('Do of MMMM, YYYY')}
    </time>
  </DateContainer>

)

export default PublishDate