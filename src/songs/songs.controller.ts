import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto, UpdateSongDto } from './dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  //get all songs -> http://localhost:3000/api/v1/songs (GET)
  @Get()
  getAllSongs() {
    return this.songsService.getAllSongs();
  }
  // add song  -> http://localhost:3000/api/v1/songs (POST)
  @Post()
  addSong(@Body() dto: CreateSongDto) {
    return this.songsService.addSong(dto);
  }
  //get song by id -> http://localhost:3000/api/v1/songs/1 (GET)
  @Get(':songId')
  getSingleSong(@Param('songId', ParseIntPipe) songId: number) {
    return this.songsService.getSingleSong(songId);
  }
  //update song by id -> http://localhost:3000/api/v1/songs/1 (PUT)
  @Put(':songId')
  updateSong(
    @Param('songId', ParseIntPipe) songId: number,
    @Body() dto: UpdateSongDto,
  ) {
    return this.songsService.updateSong(songId, dto);
  }
  //delete song by id -> http://localhost:3000/api/v1/songs/1 (DELETE)
  @Delete(':songId')
  deleteSong(@Param('songId', ParseIntPipe) songId: number) {
    return this.songsService.deleteSong(songId);
  }
}
