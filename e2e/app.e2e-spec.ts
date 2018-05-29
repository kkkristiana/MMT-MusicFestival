import { MmtMusicFestivalPage } from './app.po';

describe('mmt-music-festival App', function() {
  let page: MmtMusicFestivalPage;

  beforeEach(() => {
    page = new MmtMusicFestivalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
