import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionItemHead from '../components/missionItemsHead';

describe('MissionItems', () => {
  test('renders mission headers', () => {
    render(<MissionItemHead />);
    const element = screen.getByText('Mission');
    expect(element).toBeInTheDocument();
  });
  test('renders mission headers', () => {
    render(<MissionItemHead />);
    const description = screen.getByText('Description');
    expect(description).toBeInTheDocument();
  });
});
