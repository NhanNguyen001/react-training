import React from 'react';
/* css */
import './styles.css';

interface ITimeline {
  id: string;
  title: string;
  sub: string;
}

interface ITimelineDefaultProps {
  direction?: 'left' | 'center' | 'right';
  pivot?: 'vertical' | 'horizontal';
}

interface ITimelineProps extends ITimelineDefaultProps {
  timelines: ITimeline[];
}

const TimelineItem: React.FC<ITimeline> = props => (
  <div className='react-timeline__event'>
    <div className='react-timeline__icons' />
    <div className='react-timeline_content'>
      <div className='react-timeline__title'>print title</div>
      <div className='react-timeline__lead'>print sub if available</div>
    </div>
  </div>
);

export const Timeline: React.FC<ITimelineProps> = ({ timelines, direction, pivot }) => (
  <div
    className={`react-timeline react-timeline--${pivot} react-timeline--${direction}`}
  >
    print list timelines
  </div>
);

const defaultProps: ITimelineDefaultProps = {
  direction: 'left',
  pivot: 'vertical'
};

Timeline.defaultProps = defaultProps;

export default Timeline;

/**
 * Usage
 *
<Timeline
  pivot="vertical"
  direction="center"
  timelines={[
    {
      id: 1,
      title: 'C.A. Alexander, A Pattern Language, New York,, 1977.',
      sub: '10 May 2020',
    },
    {
      id: 2,
      title: 'E. Yourdon, L. Constantine, Structured Design, N.J.,, 1978.',
      sub: '12 May 2020',
    },
    {
      id: 3,
      title: 'C.A. Alexander, The Timeless Way of Building, New York,, 1979.',
      sub: '05 July 2020',
    }
  ]} />
 */
