// package: sensetime.gateway
// file: gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server-internal.proto

import * as gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb from "../../../../gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server-internal_pb";
import * as gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb from "../../../../gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GatewayInternalVerifyToken = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.VerifyTokenRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.VerifyTokenResponse;
};

type GatewayInternalReFreshToken = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.ReFreshTokenRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.ReFreshTokenResponse;
};

type GatewayInternalLiveness = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LivenessRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LivenessResponse;
};

type GatewayInternalAuthorizationInternal = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AuthorizationInternalRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AuthorizationInternalResponse;
};

type GatewayInternalUnAuth = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthResponse;
};

type GatewayInternalAlertCompare = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareResponse;
};

type GatewayInternalAlertCompareGet = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetResponse;
};

type GatewayInternalAlertCompareList = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListResponse;
};

type GatewayInternalAlertHitUpdate = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AlertHitUpdateRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AlertHitUpdateResponse;
};

type GatewayInternalIdentityVerify = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyResponse;
};

type GatewayInternalIdentityVerifyGet = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetResponse;
};

type GatewayInternalIdentityVerifyList = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListResponse;
};

type GatewayInternalFeatureSyncList = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FeatureSyncListRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FeatureSyncListResponse;
};

type GatewayInternalUserAdd = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserAddRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserAddResponse;
};

type GatewayInternalUserDelete = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserDeleteRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserDeleteResponse;
};

type GatewayInternalUserUpdate = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateResponse;
};

type GatewayInternalUserUpdatePassword = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdatePasswordRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdatePasswordResponse;
};

type GatewayInternalUserUpdateImage = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateImageRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateImageResponse;
};

type GatewayInternalUserList = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserListRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserListResponse;
};

type GatewayInternalUserGet = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserGetResponse;
};

type GatewayInternalLogList = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LogListRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LogListResponse;
};

type GatewayInternalDeviceAdd = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceAddRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceAddResponse;
};

type GatewayInternalDeviceDelete = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceDeleteRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceDeleteResponse;
};

type GatewayInternalDeviceUpdate = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceUpdateRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceUpdateResponse;
};

type GatewayInternalDeviceList = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceListRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceListResponse;
};

type GatewayInternalDeviceGet = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceGetResponse;
};

type GatewayInternalUpdateMiddleWareConfig = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UpdateMiddleWareConfigRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UpdateMiddleWareConfigResponse;
};

type GatewayInternalIndexBaseInfoGet = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexBaseInfoGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexBaseInfoGetResponse;
};

type GatewayInternalIndexAlertCompareGet = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexAlertCompareGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexAlertCompareGetResponse;
};

type GatewayInternalFaceDetect = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FaceDetectRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FaceDetectResponse;
};

type GatewayInternalSystemConfigGet = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigGetResponse;
};

type GatewayInternalSystemConfigUpdate = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigUpdateRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigUpdateResponse;
};

type GatewayInternalSystemLogoUpdate = {
  readonly methodName: string;
  readonly service: typeof GatewayInternal;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemLogoUpdateRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemLogoUpdateResponse;
};

export class GatewayInternal {
  static readonly serviceName: string;
  static readonly VerifyToken: GatewayInternalVerifyToken;
  static readonly ReFreshToken: GatewayInternalReFreshToken;
  static readonly Liveness: GatewayInternalLiveness;
  static readonly AuthorizationInternal: GatewayInternalAuthorizationInternal;
  static readonly UnAuth: GatewayInternalUnAuth;
  static readonly AlertCompare: GatewayInternalAlertCompare;
  static readonly AlertCompareGet: GatewayInternalAlertCompareGet;
  static readonly AlertCompareList: GatewayInternalAlertCompareList;
  static readonly AlertHitUpdate: GatewayInternalAlertHitUpdate;
  static readonly IdentityVerify: GatewayInternalIdentityVerify;
  static readonly IdentityVerifyGet: GatewayInternalIdentityVerifyGet;
  static readonly IdentityVerifyList: GatewayInternalIdentityVerifyList;
  static readonly FeatureSyncList: GatewayInternalFeatureSyncList;
  static readonly UserAdd: GatewayInternalUserAdd;
  static readonly UserDelete: GatewayInternalUserDelete;
  static readonly UserUpdate: GatewayInternalUserUpdate;
  static readonly UserUpdatePassword: GatewayInternalUserUpdatePassword;
  static readonly UserUpdateImage: GatewayInternalUserUpdateImage;
  static readonly UserList: GatewayInternalUserList;
  static readonly UserGet: GatewayInternalUserGet;
  static readonly LogList: GatewayInternalLogList;
  static readonly DeviceAdd: GatewayInternalDeviceAdd;
  static readonly DeviceDelete: GatewayInternalDeviceDelete;
  static readonly DeviceUpdate: GatewayInternalDeviceUpdate;
  static readonly DeviceList: GatewayInternalDeviceList;
  static readonly DeviceGet: GatewayInternalDeviceGet;
  static readonly UpdateMiddleWareConfig: GatewayInternalUpdateMiddleWareConfig;
  static readonly IndexBaseInfoGet: GatewayInternalIndexBaseInfoGet;
  static readonly IndexAlertCompareGet: GatewayInternalIndexAlertCompareGet;
  static readonly FaceDetect: GatewayInternalFaceDetect;
  static readonly SystemConfigGet: GatewayInternalSystemConfigGet;
  static readonly SystemConfigUpdate: GatewayInternalSystemConfigUpdate;
  static readonly SystemLogoUpdate: GatewayInternalSystemLogoUpdate;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class GatewayInternalClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  verifyToken(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.VerifyTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.VerifyTokenResponse|null) => void
  ): UnaryResponse;
  verifyToken(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.VerifyTokenRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.VerifyTokenResponse|null) => void
  ): UnaryResponse;
  reFreshToken(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.ReFreshTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.ReFreshTokenResponse|null) => void
  ): UnaryResponse;
  reFreshToken(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.ReFreshTokenRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.ReFreshTokenResponse|null) => void
  ): UnaryResponse;
  liveness(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LivenessRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LivenessResponse|null) => void
  ): UnaryResponse;
  liveness(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LivenessRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LivenessResponse|null) => void
  ): UnaryResponse;
  authorizationInternal(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AuthorizationInternalRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AuthorizationInternalResponse|null) => void
  ): UnaryResponse;
  authorizationInternal(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AuthorizationInternalRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AuthorizationInternalResponse|null) => void
  ): UnaryResponse;
  unAuth(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthResponse|null) => void
  ): UnaryResponse;
  unAuth(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthResponse|null) => void
  ): UnaryResponse;
  alertCompare(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareResponse|null) => void
  ): UnaryResponse;
  alertCompare(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareResponse|null) => void
  ): UnaryResponse;
  alertCompareGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetResponse|null) => void
  ): UnaryResponse;
  alertCompareGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetResponse|null) => void
  ): UnaryResponse;
  alertCompareList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListResponse|null) => void
  ): UnaryResponse;
  alertCompareList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListResponse|null) => void
  ): UnaryResponse;
  alertHitUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AlertHitUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AlertHitUpdateResponse|null) => void
  ): UnaryResponse;
  alertHitUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AlertHitUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.AlertHitUpdateResponse|null) => void
  ): UnaryResponse;
  identityVerify(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyResponse|null) => void
  ): UnaryResponse;
  identityVerify(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyResponse|null) => void
  ): UnaryResponse;
  identityVerifyGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetResponse|null) => void
  ): UnaryResponse;
  identityVerifyGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetResponse|null) => void
  ): UnaryResponse;
  identityVerifyList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListResponse|null) => void
  ): UnaryResponse;
  identityVerifyList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListResponse|null) => void
  ): UnaryResponse;
  featureSyncList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FeatureSyncListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FeatureSyncListResponse|null) => void
  ): UnaryResponse;
  featureSyncList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FeatureSyncListRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FeatureSyncListResponse|null) => void
  ): UnaryResponse;
  userAdd(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserAddRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserAddResponse|null) => void
  ): UnaryResponse;
  userAdd(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserAddRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserAddResponse|null) => void
  ): UnaryResponse;
  userDelete(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserDeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserDeleteResponse|null) => void
  ): UnaryResponse;
  userDelete(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserDeleteRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserDeleteResponse|null) => void
  ): UnaryResponse;
  userUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateResponse|null) => void
  ): UnaryResponse;
  userUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateResponse|null) => void
  ): UnaryResponse;
  userUpdatePassword(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdatePasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdatePasswordResponse|null) => void
  ): UnaryResponse;
  userUpdatePassword(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdatePasswordRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdatePasswordResponse|null) => void
  ): UnaryResponse;
  userUpdateImage(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateImageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateImageResponse|null) => void
  ): UnaryResponse;
  userUpdateImage(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateImageRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserUpdateImageResponse|null) => void
  ): UnaryResponse;
  userList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserListResponse|null) => void
  ): UnaryResponse;
  userList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserListRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserListResponse|null) => void
  ): UnaryResponse;
  userGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserGetResponse|null) => void
  ): UnaryResponse;
  userGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserGetRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UserGetResponse|null) => void
  ): UnaryResponse;
  logList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LogListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LogListResponse|null) => void
  ): UnaryResponse;
  logList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LogListRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.LogListResponse|null) => void
  ): UnaryResponse;
  deviceAdd(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceAddRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceAddResponse|null) => void
  ): UnaryResponse;
  deviceAdd(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceAddRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceAddResponse|null) => void
  ): UnaryResponse;
  deviceDelete(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceDeleteRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceDeleteResponse|null) => void
  ): UnaryResponse;
  deviceDelete(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceDeleteRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceDeleteResponse|null) => void
  ): UnaryResponse;
  deviceUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceUpdateResponse|null) => void
  ): UnaryResponse;
  deviceUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceUpdateResponse|null) => void
  ): UnaryResponse;
  deviceList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceListResponse|null) => void
  ): UnaryResponse;
  deviceList(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceListRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceListResponse|null) => void
  ): UnaryResponse;
  deviceGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceGetResponse|null) => void
  ): UnaryResponse;
  deviceGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceGetRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.DeviceGetResponse|null) => void
  ): UnaryResponse;
  updateMiddleWareConfig(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UpdateMiddleWareConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UpdateMiddleWareConfigResponse|null) => void
  ): UnaryResponse;
  updateMiddleWareConfig(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UpdateMiddleWareConfigRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.UpdateMiddleWareConfigResponse|null) => void
  ): UnaryResponse;
  indexBaseInfoGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexBaseInfoGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexBaseInfoGetResponse|null) => void
  ): UnaryResponse;
  indexBaseInfoGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexBaseInfoGetRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexBaseInfoGetResponse|null) => void
  ): UnaryResponse;
  indexAlertCompareGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexAlertCompareGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexAlertCompareGetResponse|null) => void
  ): UnaryResponse;
  indexAlertCompareGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexAlertCompareGetRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.IndexAlertCompareGetResponse|null) => void
  ): UnaryResponse;
  faceDetect(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FaceDetectRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FaceDetectResponse|null) => void
  ): UnaryResponse;
  faceDetect(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FaceDetectRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.FaceDetectResponse|null) => void
  ): UnaryResponse;
  systemConfigGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigGetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigGetResponse|null) => void
  ): UnaryResponse;
  systemConfigGet(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigGetRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigGetResponse|null) => void
  ): UnaryResponse;
  systemConfigUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigUpdateResponse|null) => void
  ): UnaryResponse;
  systemConfigUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemConfigUpdateResponse|null) => void
  ): UnaryResponse;
  systemLogoUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemLogoUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemLogoUpdateResponse|null) => void
  ): UnaryResponse;
  systemLogoUpdate(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemLogoUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_internal_pb.SystemLogoUpdateResponse|null) => void
  ): UnaryResponse;
}

