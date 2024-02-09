/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react';

interface TimerProps {}

interface TimerState {
  timer: number;
}

class Timer extends Component<TimerProps, TimerState> {
  private timerId: any | null = null;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      timer: 0
    };
  }

  componentDidMount(): void {
    console.log('Component mounted');
    this.startTimer();
  }

  componentDidUpdate(): void {
    console.log('Component updated');
  }

  componentWillUnmount(): void {
    console.log('Component will unmount');
    this.stopTimer();
  }

  startTimer(): void {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1
      }));
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <p>Timer: {this.state.timer}</p>
        
      </div>
    );
  }
}

export default Timer;
