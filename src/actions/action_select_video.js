

export const SELECT_VIDEO = 'SELECT_VIDEO';

export function selectVideo (selectedVideo){
  return {
    type: SELECT_VIDEO,
    payload: selectedVideo
  };
}