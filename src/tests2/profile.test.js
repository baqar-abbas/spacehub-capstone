import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile component', () => {
  const mockedMissions = [
    { mission_id: 1, mission_name: 'Mission 1', isSubscribed: true },
    { mission_id: 2, mission_name: 'Mission 2', isSubscribed: false },
    { mission_id: 3, mission_name: 'Mission 3', isSubscribed: true },
  ];

  const mockedRockets = [
    { id: 1, name: 'Rocket 1', reserved: true },
    { id: 2, name: 'Rocket 2', reserved: false },
    { id: 3, name: 'Rocket 3', reserved: true },
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: { missionsData: mockedMissions },
      rockets: mockedRockets,
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should render subscribed missions correctly', () => {
    const { getByText } = render(<Profile />);

    expect(getByText('My Missions')).toBeInTheDocument();

    mockedMissions
      .filter((mission) => mission.isSubscribed === true)
      .forEach((mission) => {
        expect(getByText(mission.mission_name)).toBeInTheDocument();
      });
  });

  it('should render subscribed rockets correctly', () => {
    const { getByText } = render(<Profile />);

    expect(getByText('my rockets')).toBeInTheDocument();

    mockedRockets
      .filter((rocket) => rocket.reserved === true)
      .forEach((rocket) => {
        expect(getByText(rocket.name)).toBeInTheDocument();
      });
  });
});
