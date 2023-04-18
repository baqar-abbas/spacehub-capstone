/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    missionsData:
    [
      {
      mission_name: 'Thaicom',
      mission_id: '9D1B7E',
      manufacturers: ['Orbital ATK'],
      payload_ids: ['Thaicom 6', 'Thaicom 8'],
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
      website: 'http://www.thaicom.net/en/satellites/overview',
      twitter: 'https://twitter.com/thaicomplc',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    },
    {
      mission_name: 'Thaicom',
      mission_id: '9D1B7E0',
      manufacturers: ['Orbital ATK'],
      payload_ids: ['Thaicom 6', 'Thaicom 8'],
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
      website: 'http://www.thaicom.net/en/satellites/overview',
      twitter: 'https://twitter.com/thaicomplc',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    },
    {
      mission_name: 'Thaicom',
      mission_id: '9D1B7E0',
      manufacturers: ['Orbital ATK'],
      payload_ids: ['Thaicom 6', 'Thaicom 8'],
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
      website: 'http://www.thaicom.net/en/satellites/overview',
      twitter: 'https://twitter.com/thaicomplc',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    },
    {
      mission_name: 'Thaicom',
      mission_id: '9D1B7E0',
      manufacturers: ['Orbital ATK'],
      payload_ids: ['Thaicom 6', 'Thaicom 8'],
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
      website: 'http://www.thaicom.net/en/satellites/overview',
      twitter: 'https://twitter.com/thaicomplc',
      description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    }
  ],
  isSubscribed: false,
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    subscribe(state, action) {
      state.isSubscribed != isSubscribed;
    }
  },
});

export default missionsSlice.reducer;
