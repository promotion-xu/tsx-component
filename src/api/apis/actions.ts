

export const LIVENESS  = 'liveness';

const request = {
  /** 
     * 活检接口 参数为{videoFile:value}
     * */
    [LIVENESS](obj: Gateway.LivenessRequest.AsObject): Promise<Gateway.LivenessResponse> {

      const api = new Gateway.LivenessRequest();
      api.setVideoFile(obj.videoFile)

      let promise = createPromise<Gateway.LivenessResponse>('liveness', api);

      return promise;
  },
}

export default request;