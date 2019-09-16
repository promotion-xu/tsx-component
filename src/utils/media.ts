const MediaUtils = {
  /**
  * 获取用户媒体设备(处理兼容的问题)
  * @param videoEnable {boolean} - 是否启用摄像头
  * @param audioEnable {boolean} - 是否启用麦克风
  * @param callback {Function} - 处理回调
  * @param disabledStatus {boolean} - 当摄像头调用成功才允许点击开始检索
  */
  openStream: function (videoEnable: boolean, audioEnable: boolean, callback: any, callbacktwo: any) {
    // navigator.getUserMedia = navigator.getUserMedia
    const constraints = { video: videoEnable, audio: audioEnable };
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        callbacktwo(false);
        callback(null, stream);
      })['catch'](function (err) {
        callback('未检测到摄像头, code=001');
      });
    } else if (navigator.getUserMedia) {
      navigator.getUserMedia(constraints, function (stream) {
        callback(null, stream);
      }, function (err) {
        callback('未检测到摄像头, code=002');
      });
    } else {
      callback(new Error('未检测到摄像头, code=003'));
    }
  },

  /**
  * 关闭媒体流
  * @param stream {MediaStream} - 需要关闭的流
  */
  closeStream: function (stream: any) {
    if (typeof stream.stop === 'function' || stream === undefined) {
      stream.stop();
    }
    else {
      const trackList = [stream.getAudioTracks(), stream.getVideoTracks()];

      for (let i = 0; i < trackList.length; i++) {
        const tracks = trackList[i];
        if (tracks && tracks.length > 0) {
          for (let j = 0; j < tracks.length; j++) {
            const track = tracks[j];
            if (typeof track.stop === 'function') {
              track.stop();
            }
          }
        }
      }
    }
  }
};
export default MediaUtils