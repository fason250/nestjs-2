import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto, UpdateSongDto } from './dto';

@Injectable()
export class SongsService {
  private songsDb = [
    {
      id: 1,
      title: 'Blinding Lights',
      artists: ['The Weeknd'],
      releasedDate: '2019-11-29',
      duration: 200,
    },
    {
      id: 2,
      title: 'Shape of You',
      artists: ['Ed Sheeran'],
      releasedDate: '2017-01-06',
      duration: 233,
    },
    {
      id: 3,
      title: 'Levitating',
      artists: ['Dua Lipa', 'DaBaby'],
      releasedDate: '2020-10-02',
      duration: 203,
    },
    {
      id: 4,
      title: 'Save Your Tears',
      artists: ['The Weeknd'],
      releasedDate: '2020-08-09',
      duration: 215,
    },
    {
      id: 5,
      title: 'Uptown Funk',
      artists: ['Mark Ronson', 'Bruno Mars'],
      releasedDate: '2014-11-10',
      duration: 270,
    },
  ];

  getAllSongs() {
    return this.songsDb;
  }

  addSong(dto: CreateSongDto) {
    return this.songsDb.push(dto);
  }

  getSingleSong(songId: number) {
    const song = this.songsDb.find((song) => song.id === songId);
    if (!song) {
      throw new NotFoundException("THIS song wasn't found");
    }

    return song;
  }

  updateSong(songId: number, dto: UpdateSongDto) {
    console.log('dto passed: ', dto);
    const songIndex = this.songsDb.findIndex((item) => item.id === songId);
    if (songIndex === -1) {
      throw new NotFoundException('Song not found');
    }
    const currentSong = this.songsDb[songIndex];
    console.log('current song', currentSong);

    const newDataPassed = Object.fromEntries(
      Object.entries(dto).filter(([, value]) => value !== undefined),
    );
    const updatedSong = { ...currentSong, ...newDataPassed };
    console.log('updated song', updatedSong);

    this.songsDb[songIndex] = updatedSong;

    return updatedSong;
  }

  deleteSong(songId: number) {
    const db = this.songsDb.filter((song) => song.id !== songId);
    this.songsDb = db;
    return { success: true, message: 'song deleted successfully' };
  }
}
