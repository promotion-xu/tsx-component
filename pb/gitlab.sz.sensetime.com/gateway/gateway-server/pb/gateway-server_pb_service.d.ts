// package: sensetime.gateway
// file: gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server.proto

import * as gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb from "../../../../gitlab.sz.sensetime.com/gateway/gateway-server/pb/gateway-server_pb";
import {grpc} from "@improbable-eng/grpc-web";

type GatewayPublicAuthorization = {
  readonly methodName: string;
  readonly service: typeof GatewayPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AuthorizationRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AuthorizationResponse;
};

type GatewayPublicUnAuth = {
  readonly methodName: string;
  readonly service: typeof GatewayPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.UnAuthResponse;
};

type GatewayPublicAlertCompare = {
  readonly methodName: string;
  readonly service: typeof GatewayPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareResponse;
};

type GatewayPublicAlertCompareGet = {
  readonly methodName: string;
  readonly service: typeof GatewayPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareGetResponse;
};

type GatewayPublicAlertCompareList = {
  readonly methodName: string;
  readonly service: typeof GatewayPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AlertCompareListResponse;
};

type GatewayPublicIdentityVerifyGet = {
  readonly methodName: string;
  readonly service: typeof GatewayPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyGetResponse;
};

type GatewayPublicIdentityVerifyList = {
  readonly methodName: string;
  readonly service: typeof GatewayPublic;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListRequest;
  readonly responseType: typeof gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.IdentityVerifyListResponse;
};

export class GatewayPublic {
  static readonly serviceName: string;
  static readonly Authorization: GatewayPublicAuthorization;
  static readonly UnAuth: GatewayPublicUnAuth;
  static readonly AlertCompare: GatewayPublicAlertCompare;
  static readonly AlertCompareGet: GatewayPublicAlertCompareGet;
  static readonly AlertCompareList: GatewayPublicAlertCompareList;
  static readonly IdentityVerifyGet: GatewayPublicIdentityVerifyGet;
  static readonly IdentityVerifyList: GatewayPublicIdentityVerifyList;
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

export class GatewayPublicClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  authorization(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AuthorizationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AuthorizationResponse|null) => void
  ): UnaryResponse;
  authorization(
    requestMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AuthorizationRequest,
    callback: (error: ServiceError|null, responseMessage: gitlab_sz_sensetime_com_gateway_gateway_server_pb_gateway_server_pb.AuthorizationResponse|null) => void
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
}

